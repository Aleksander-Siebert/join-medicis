import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { skills, authors, ecosystem } from "@/lib/data";
import { collections } from "@/lib/collections";
import { getAllPosts, postHref } from "@/lib/blog";
import { getPublishedGlossarySlugs } from "@/lib/glossary-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE_URL}${path}`;

  // Static, indexable routes.
  // Pas de lastModified artificiel : un « modifié à l'instant » permanent
  // est un signal que Google apprend à ignorer.
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
    "/roadmap",
    "/contribuer",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: url(p),
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : 0.7,
  }));

  // Skills detail — date réelle de publication quand elle existe
  for (const s of skills.filter((x) => !x.comingSoon)) {
    entries.push({
      url: url(`/ressources/skills/${s.slug}`),
      ...(s.publishedAt ? { lastModified: new Date(s.publishedAt) } : {}),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Authors detail (only real contributors)
  for (const a of authors.filter((x) => !x.hidden)) {
    entries.push({ url: url(`/auteurs/${a.slug}`), changeFrequency: "monthly", priority: 0.5 });
  }

  // Blog posts — URL imbriquée sous la collection, date réelle de publication
  for (const post of getAllPosts()) {
    entries.push({
      url: url(postHref(post)),
      ...(post.publishedAt ? { lastModified: new Date(post.publishedAt) } : {}),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Blog collections
  for (const c of collections) {
    entries.push({ url: url(`/blog/collections/${c.slug}`), changeFrequency: "monthly", priority: 0.5 });
  }

  // Ecosystem detail
  for (const e of ecosystem) {
    entries.push({ url: url(`/ecosysteme/${e.slug}`), changeFrequency: "monthly", priority: 0.4 });
  }

  // Glossaire — uniquement les articles publiés (les brouillons sont noindex).
  for (const slug of getPublishedGlossarySlugs()) {
    entries.push({ url: url(`/glossaire/${slug}`), changeFrequency: "monthly", priority: 0.5 });
  }

  return entries;
}
