import { Redis } from "@upstash/redis";
import { skills } from "@/lib/data";

const hasUpstash =
  Boolean(process.env.UPSTASH_REDIS_REST_URL) &&
  Boolean(process.env.UPSTASH_REDIS_REST_TOKEN);

const redis: Redis | null = hasUpstash ? Redis.fromEnv() : null;

const inMemory: Map<string, number> = (globalThis as unknown as {
  __jmStats?: Map<string, number>;
}).__jmStats ?? new Map();

if (!(globalThis as unknown as { __jmStats?: Map<string, number> }).__jmStats) {
  (globalThis as unknown as { __jmStats: Map<string, number> }).__jmStats = inMemory;
  // Seed in-memory with baseline counts from data.ts so dev never shows zero
  for (const s of skills) {
    if (typeof s.views === "number") inMemory.set(`skill:${s.slug}:views`, s.views);
    if (typeof s.downloads === "number") inMemory.set(`skill:${s.slug}:downloads`, s.downloads);
  }
}

const viewKey = (slug: string) => `skill:${slug}:views`;
const downloadKey = (slug: string) => `skill:${slug}:downloads`;

async function get(key: string): Promise<number> {
  if (redis) {
    const v = await redis.get<number>(key);
    return typeof v === "number" ? v : 0;
  }
  return inMemory.get(key) ?? 0;
}

async function incr(key: string): Promise<number> {
  if (redis) return redis.incr(key);
  const next = (inMemory.get(key) ?? 0) + 1;
  inMemory.set(key, next);
  return next;
}

/** Seuls les slugs de Skills publiés ont des compteurs — bloque la création de clés arbitraires. */
export function isKnownSkillSlug(slug: string): boolean {
  return skills.some((s) => s.slug === slug);
}

/* Rate-limit par IP : fenêtre fixe via INCR+EXPIRE (Redis) ou Map en mémoire. */
const RATE_WINDOW_S = 60;
const RATE_MAX = 30;
const rateMemory = new Map<string, { count: number; resetAt: number }>();

export async function checkRateLimit(ip: string, route: string): Promise<boolean> {
  const key = `rate:${route}:${ip}`;
  if (redis) {
    const count = await redis.incr(key);
    if (count === 1) await redis.expire(key, RATE_WINDOW_S);
    return count <= RATE_MAX;
  }
  const now = Date.now();
  const entry = rateMemory.get(key);
  if (!entry || entry.resetAt < now) {
    rateMemory.set(key, { count: 1, resetAt: now + RATE_WINDOW_S * 1000 });
    return true;
  }
  entry.count += 1;
  return entry.count <= RATE_MAX;
}

export async function getSkillStats(slug: string): Promise<{ views: number; downloads: number }> {
  const [views, downloads] = await Promise.all([get(viewKey(slug)), get(downloadKey(slug))]);
  return { views, downloads };
}

export async function incrementSkillView(slug: string): Promise<number> {
  return incr(viewKey(slug));
}

export async function incrementSkillDownload(slug: string): Promise<number> {
  return incr(downloadKey(slug));
}

export const upstashConnected = hasUpstash;
