import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

/**
 * Articles longs du glossaire : un fichier Markdown par terme dans
 * content/glossaire/<slug>.md, où <slug> correspond au `slug` du terme dans
 * src/lib/glossary.ts. Même mécanique que le blog (content/blog).
 *
 * Une page n'est créée QUE si le fichier existe : pas de fichier = pas de page
 * (404). On ne génère donc jamais les 82 termes du glossaire d'un coup.
 *
 * `draft: true` dans le frontmatter : la page existe (pour la tester en ligne)
 * mais reste en noindex, hors sitemap, et non liée depuis le glossaire.
 */

const GLOSSARY_DIR = path.join(process.cwd(), "content", "glossaire");

export interface GlossaryArticle {
  slug: string;
  /** Titre H1 optionnel — à défaut, le titre du terme dans glossary.ts. */
  title?: string;
  /** Title tag Google, si différent du H1 (ex. « Qu'est-ce qu'un LLM ? »). */
  metaTitle?: string;
  /** Chapô optionnel affiché sous le H1 — sert aussi de meta description. */
  excerpt?: string;
  /** Dernière mise à jour (ISO), affichée en pied d'article. */
  updatedAt?: string;
  /** Brouillon : page visible en direct mais noindex, hors sitemap, non liée. */
  draft: boolean;
  /** Corps de l'article rendu en HTML. */
  html: string;
}

/** Tous les slugs ayant un fichier .md (brouillons inclus). */
export function getGlossaryArticleSlugs(): string[] {
  if (!fs.existsSync(GLOSSARY_DIR)) return [];
  return fs
    .readdirSync(GLOSSARY_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_") && f !== "README.md")
    .map((f) => f.replace(/\.md$/, ""));
}

/** Slugs publiés uniquement : ce qui est liable et indexable. */
export function getPublishedGlossarySlugs(): string[] {
  return getGlossaryArticleSlugs().filter((slug) => !getGlossaryArticle(slug)?.draft);
}

export function getGlossaryArticle(slug: string): GlossaryArticle | null {
  const fullPath = path.join(GLOSSARY_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const parsed = matter(fs.readFileSync(fullPath, "utf-8"));
  const body = parsed.content.trim();
  if (!body) return null;

  return {
    slug,
    title: parsed.data.title ? String(parsed.data.title) : undefined,
    metaTitle: parsed.data.metaTitle ? String(parsed.data.metaTitle) : undefined,
    excerpt: parsed.data.excerpt ? String(parsed.data.excerpt) : undefined,
    updatedAt: parsed.data.updatedAt ? String(parsed.data.updatedAt) : undefined,
    draft: parsed.data.draft === true,
    html: marked.parse(body, { async: false }) as string,
  };
}
