import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { skills, authors } from "@/lib/data";
import { collections } from "@/lib/collections";
import { getAllPostSlugs } from "@/lib/blog";
import { ecosystem } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const url = (path: string): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  });

  // Static, indexable routes
  const staticPaths = [
    "/",
    "/ressources/skills",
    "/ressources/mcp",
    "/ressources/plugins",
    "/ressources/automations",
    "/ressources/agents",
    "/ecosysteme",
    "/glossaire",
    "/blog",
    "/auteurs",
    "/guides",
    "/contribuer",
    "/request",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    ...url(p),
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : 0.7,
  }));

  // Skills detail
  for (const s of skills) {
    entries.push({ ...url(`/ressources/skills/${s.slug}`), changeFrequency: "monthly", priority: 0.8 });
  }

  // Authors detail
  for (const a of authors) {
    entries.push({ ...url(`/auteurs/${a.slug}`), changeFrequency: "monthly", priority: 0.5 });
  }

  // Blog posts
  for (const slug of getAllPostSlugs()) {
    entries.push({ ...url(`/blog/${slug}`), changeFrequency: "monthly", priority: 0.6 });
  }

  // Blog collections
  for (const c of collections) {
    entries.push({ ...url(`/blog/collections/${c.slug}`), changeFrequency: "monthly", priority: 0.5 });
  }

  // Ecosystem detail
  for (const e of ecosystem) {
    entries.push({ ...url(`/ecosysteme/${e.slug}`), changeFrequency: "monthly", priority: 0.4 });
  }

  return entries;
}
