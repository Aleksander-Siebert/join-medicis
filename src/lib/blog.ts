import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  authorSlug: string;
  readingTime: string;
  tags: string[];
  collection: string | null;
}

export interface BlogPostWithContent extends BlogPost {
  html: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readPostFile(slug: string) {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf-8");
  return matter(raw);
}

function toPostMeta(slug: string, data: matter.GrayMatterFile<string>["data"]): BlogPost {
  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    publishedAt: String(data.publishedAt ?? ""),
    authorSlug: String(data.authorSlug ?? ""),
    readingTime: String(data.readingTime ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    collection: data.collection ? String(data.collection) : null,
  };
}

export function getPostsByCollection(collectionSlug: string): BlogPost[] {
  return getAllPosts().filter((p) => p.collection === collectionSlug);
}

/**
 * URL canonique d'un article : imbriquée sous sa collection quand elle existe
 * (/blog/collections/{collection}/{slug}), sinon /blog/{slug}.
 */
export function postHref(post: { slug: string; collection: string | null }): string {
  return post.collection
    ? `/blog/collections/${post.collection}/${post.slug}`
    : `/blog/${post.slug}`;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPost[] {
  return getAllPostSlugs()
    .map((slug) => toPostMeta(slug, readPostFile(slug).data))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  if (!getAllPostSlugs().includes(slug)) return null;
  const parsed = readPostFile(slug);
  const html = marked.parse(parsed.content, { async: false }) as string;
  return {
    ...toPostMeta(slug, parsed.data),
    html,
  };
}
