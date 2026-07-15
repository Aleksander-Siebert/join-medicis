import Link from "next/link";
import type { BlogPostWithContent } from "@/lib/blog";
import type { Author } from "@/types";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME, OG_IMAGE, absoluteUrl, breadcrumbSchema } from "@/lib/seo";

export type Crumb = { name: string; path: string };

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Rendu d'un article de blog, partagé entre la route imbriquée
 * (/blog/collections/[slug]/[article]) et la route à plat (/blog/[slug]).
 * `canonicalPath` et `breadcrumb` sont fournis par la route appelante.
 */
export default function ArticleView({
  post,
  author,
  canonicalPath,
  breadcrumb,
}: {
  post: BlogPostWithContent;
  author?: Author;
  canonicalPath: string;
  breadcrumb: Crumb[];
}) {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: OG_IMAGE,
    datePublished: post.publishedAt || undefined,
    dateModified: post.publishedAt || undefined,
    inLanguage: "fr-FR",
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(canonicalPath) },
    author: author
      ? { "@type": "Person", name: author.name, url: absoluteUrl(`/auteurs/${author.slug}`) }
      : { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL, logo: OG_IMAGE },
    keywords: post.tags.join(", "),
  };

  return (
    <div className="pt-16 min-h-screen">
      <JsonLd data={[blogPostingSchema, breadcrumbSchema(breadcrumb)]} />

      {/* Breadcrumb */}
      <div className="border-b border-ink-100 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-2 text-xs text-ink-300 font-sans">
          {breadcrumb.map((crumb, i) => {
            const isLast = i === breadcrumb.length - 1;
            return (
              <span key={crumb.path} className="flex items-center gap-2 min-w-0">
                {i > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="text-ink-500 truncate">{crumb.name}</span>
                ) : (
                  <Link href={crumb.path} className="hover:text-ink-500 transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-widest uppercase text-ink-300 font-sans"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-900 leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-ink-500 leading-relaxed font-sans mb-8">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-ink-500 font-sans">
            {author && (
              <Link
                href={`/auteurs/${author.slug}`}
                className="inline-flex items-center gap-3 group"
              >
                <span
                  className="w-9 h-9 rounded-full bg-forest-900 text-cream-50 flex items-center justify-center font-serif text-sm shrink-0"
                  aria-hidden="true"
                >
                  {author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span className="text-ink-700 group-hover:text-forest-900 transition-colors font-medium">
                  {author.name}
                </span>
              </Link>
            )}
            <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
            <span>{formatDate(post.publishedAt)}</span>
            {post.readingTime && (
              <>
                <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
                <span>{post.readingTime} de lecture</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="px-6 py-16">
        <div
          className="prose prose-editorial max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      {/* Footer CTA */}
      <div className="border-t border-ink-100 px-6 py-16 bg-cream-200">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
            Plus de contenu
          </p>
          <h2 className="font-serif text-3xl font-light text-ink-900 mb-6">
            Explore d&rsquo;autres ressources
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/blog"
              className="px-6 py-3 border border-ink-200 text-ink-700 text-sm font-sans hover:border-ink-400 transition-colors"
            >
              ← Tous les articles
            </Link>
            <Link
              href="/ressources/skills"
              className="px-6 py-3 bg-forest-900 text-cream-50 text-sm font-sans hover:bg-forest-700 transition-colors"
            >
              Explorer les Skills →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
