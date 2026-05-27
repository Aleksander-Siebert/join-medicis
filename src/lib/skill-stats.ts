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
