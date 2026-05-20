import Link from "next/link";
import { blogArticles, authors } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, retours d'expérience et analyses sur l'IA, le Growth marketing et l'open-source francophone.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-5 font-sans">
            Blog
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-900 mb-5">
            Réflexions sur l&rsquo;IA & le Growth francophone
          </h1>
          <p className="text-ink-500 leading-relaxed font-sans max-w-2xl">
            Retours d&rsquo;expérience, analyses, tutoriels approfondis. Le contenu
            qui ne tient pas dans un Skill ni dans un guide MCP.
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {blogArticles.length === 0 ? (
            <p className="text-ink-500 font-sans text-center py-16">
              Aucun article publié pour le moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100">
              {blogArticles.map((article) => {
                const author = authors.find((a) => a.slug === article.authorSlug);
                return (
                  <article
                    key={article.slug}
                    className="bg-cream-100 p-6 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-4 text-xs text-ink-300 font-sans">
                      <span>{formatDate(article.publishedAt)}</span>
                      <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
                      <span>{article.readingTime}</span>
                      {article.comingSoon && (
                        <>
                          <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
                          <span className="bg-cream-300 text-ink-500 px-1.5 py-0.5">
                            Bientôt
                          </span>
                        </>
                      )}
                    </div>

                    <h2 className="font-serif text-xl font-light text-ink-900 mb-3 leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-sm text-ink-500 leading-relaxed mb-6 flex-1 font-sans">
                      {article.excerpt}
                    </p>

                    {author && (
                      <Link
                        href={`/authors/${author.slug}`}
                        className="text-xs text-ink-500 hover:text-forest-900 transition-colors font-sans"
                      >
                        Par {author.name}
                      </Link>
                    )}

                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-ink-100">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-ink-300 font-sans"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          <p className="text-xs text-ink-300 text-center mt-12 font-sans">
            Les articles seront publiés progressivement à partir de l&rsquo;été
            2026. Suis le projet sur LinkedIn pour ne rien manquer.
          </p>
        </div>
      </div>
    </div>
  );
}
