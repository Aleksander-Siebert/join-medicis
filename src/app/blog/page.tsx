import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { authors } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, retours d'expérience et analyses sur l'IA, le Growth marketing et l'open-source francophone.",
};

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

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
          {posts.length === 0 ? (
            <p className="text-ink-500 font-sans text-center py-16">
              Aucun article publié pour le moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100">
              {posts.map((post) => {
                const author = authors.find((a) => a.slug === post.authorSlug);
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-cream-100 p-6 flex flex-col hover:bg-cream-200 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-4 text-xs text-ink-300 font-sans">
                      <span>{formatDate(post.publishedAt)}</span>
                      {post.readingTime && (
                        <>
                          <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
                          <span>{post.readingTime}</span>
                        </>
                      )}
                    </div>

                    <h2 className="font-serif text-xl font-light text-ink-900 group-hover:text-forest-900 transition-colors mb-3 leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-sm text-ink-500 leading-relaxed mb-6 flex-1 font-sans">
                      {post.excerpt}
                    </p>

                    {author && (
                      <span className="text-xs text-ink-500 font-sans">
                        Par {author.name}
                      </span>
                    )}

                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-ink-100">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-xs text-ink-300 font-sans">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          )}

          <p className="text-xs text-ink-300 text-center mt-12 font-sans">
            Pour publier un nouvel article : crée un fichier{" "}
            <code className="font-mono bg-cream-200 px-1.5 py-0.5">.md</code> dans{" "}
            <code className="font-mono bg-cream-200 px-1.5 py-0.5">content/blog/</code> et push sur GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}
