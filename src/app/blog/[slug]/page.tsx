import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { authors } from "@/lib/data";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const author = authors.find((a) => a.slug === post.authorSlug);

  return (
    <div className="pt-16 min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-ink-100 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-2 text-xs text-ink-300 font-sans">
          <Link href="/" className="hover:text-ink-500 transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-ink-500 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-ink-500 truncate">{post.title}</span>
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
