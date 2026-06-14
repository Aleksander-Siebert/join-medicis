import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import BookCover from "@/components/blog/BookCover";
import RotatingBookStrip from "@/components/blog/RotatingBookStrip";
import { getAllCollectionSlugs, getCollectionBySlug, collections } from "@/lib/collections";
import { getPostsByCollection } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllCollectionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return {};
  return {
    title: collection.label,
    description: collection.description,
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

export default async function CollectionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const posts = getPostsByCollection(slug);
  const featured = posts.slice(0, 4);
  const otherCollections = collections.filter((c) => c.slug !== slug);

  return (
    <div className="pt-16 min-h-screen bg-cream-100">
      <div className="grid lg:grid-cols-[340px_1fr] min-h-[calc(100vh-4rem)]">
        {/* ============ LEFT SIDEBAR (same identity as blog home) ============ */}
        <aside className="relative bg-cream-100 px-8 py-12 lg:py-16 flex flex-col">
          <p className="text-sm tracking-wide text-ink-500 mb-12 font-sans">
            <em className="italic font-serif text-base">by</em>{" "}
            <span className="font-semibold text-ink-900">Join Méd<em className="italic">ici</em>s</span>
          </p>

          <h1 className="font-serif text-5xl md:text-6xl font-medium text-ink-900 leading-[0.95] mb-2">
            Bibliotheca
          </h1>
          <p className="text-ink-700 leading-relaxed font-sans max-w-sm mb-10">
            Collection éditoriale curée par Join Médicis.
          </p>

          <Link
            href="/blog"
            className="mt-auto inline-flex items-center gap-2 text-sm text-ink-700 hover:text-forest-900 transition-colors font-sans w-fit"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Toutes les collections
          </Link>
        </aside>

        {/* ============ DARK MAIN PANEL ============ */}
        <section className="relative bg-ink-900 text-cream-50 px-8 py-12 lg:py-16 overflow-hidden rounded-tl-[25px] rounded-bl-[25px] lg:rounded-l-[25px]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-cream-50/75 hover:text-cream-50 transition-colors font-sans mb-12 group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-0.5 transition-transform">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Toutes les collections
          </Link>

          {/* Book + Description grid */}
          <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-start mb-16">
            <div className="flex justify-center lg:justify-start">
              <BookCover
                collection={collection}
                size="lg"
                upright
                transitionName={`book-${collection.slug}`}
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-cream-50/60 mb-4 font-sans font-semibold">
                {collection.shortLabel}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-cream-50 leading-[1.05] mb-6">
                {collection.label}
              </h2>
              <p className="text-base md:text-lg text-cream-50/85 leading-relaxed font-sans max-w-2xl">
                {collection.longDescription}
              </p>
            </div>
          </div>

          {/* Featured articles */}
          <div className="mb-16">
            <h3 className="text-xs tracking-[0.2em] uppercase text-cream-50/65 mb-5 font-sans font-semibold">
              Articles à la une
            </h3>
            {featured.length === 0 ? (
              <div className="p-10 border border-dashed border-cream-50/15 rounded-[25px] text-center">
                <p className="text-cream-50/70 font-sans">
                  Aucun article publié dans cette collection pour le moment.
                </p>
                <p className="text-sm text-cream-50/50 font-sans mt-2">
                  Ajoutez un fichier{" "}
                  <code className="bg-cream-50/10 px-1.5 py-0.5 rounded text-cream-50/80">
                    .md
                  </code>{" "}
                  dans{" "}
                  <code className="bg-cream-50/10 px-1.5 py-0.5 rounded text-cream-50/80">
                    content/blog/
                  </code>{" "}
                  avec{" "}
                  <code className="bg-cream-50/10 px-1.5 py-0.5 rounded text-cream-50/80">
                    collection: {collection.slug}
                  </code>{" "}
                  pour qu&rsquo;il apparaisse ici.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-5">
                {featured.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group p-7 bg-ink-800/40 border border-cream-50/10 hover:border-cream-50/35 transition-colors rounded-[25px] flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3 text-xs text-cream-50/55 font-sans">
                      <span>{formatDate(post.publishedAt)}</span>
                      {post.readingTime && (
                        <>
                          <span className="w-1 h-1 bg-cream-50/40 rounded-full" aria-hidden="true" />
                          <span>{post.readingTime}</span>
                        </>
                      )}
                    </div>
                    <h4 className="font-serif text-xl md:text-2xl text-cream-50 font-medium leading-snug group-hover:text-cream-100">
                      {post.title}
                    </h4>
                    <p className="text-sm text-cream-50/70 leading-relaxed font-sans line-clamp-3">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Topics — accordion */}
          <div className="mb-16">
            <h3 className="text-xs tracking-[0.2em] uppercase text-cream-50/65 mb-5 font-sans font-semibold">
              Sujets
            </h3>
            <ul className="divide-y divide-cream-50/10 border-y border-cream-50/10">
              {[
                "Architecture & design",
                "Cas pratiques",
                "Tutoriels pas-à-pas",
                "Outils & écosystème",
                "Retours d'expérience",
              ].map((topic) => (
                <li key={topic}>
                  <details className="group">
                    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                      <span className="font-serif text-lg md:text-xl text-cream-50">{topic}</span>
                      <span className="text-cream-50/60 group-open:rotate-180 transition-transform">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </summary>
                    <div className="pb-5 text-sm text-cream-50/65 font-sans">
                      Les articles de cette sous-catégorie apparaîtront ici dès qu&rsquo;ils seront publiés.
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>

          {/* Other collections — rotating marquee */}
          <div className="pt-10 border-t border-cream-50/10">
            <h3 className="text-xs tracking-[0.2em] uppercase text-cream-50/65 mb-5 font-sans font-semibold">
              Autres collections
            </h3>
            <RotatingBookStrip collections={otherCollections} speed={30} />
            <p className="mt-3 text-xs text-cream-50/45 font-sans italic">
              Survolez pour mettre en pause.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
