import Link from "next/link";
import type { Metadata } from "next";
import BookCarousel from "@/components/blog/BookCarousel";
import SupportProject from "@/components/sections/SupportProject";
import { collections, getCollectionBySlug } from "@/lib/collections";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Bibliotheca",
  description:
    "La bibliothèque éditoriale de Join Médicis : Skills, MCP, agents, vibe coding, growth IA, et l'actualité du projet.",
};

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogHomePage() {
  const allPosts = getAllPosts();
  const latest = allPosts.slice(0, 5);
  const popular = allPosts.slice(0, 5); // until we have view-count data

  return (
    <div className="pt-16 min-h-screen bg-ink-900 text-cream-50">
      <section className="relative px-6 md:px-10 lg:px-16 py-12 lg:py-16 overflow-hidden">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-cream-50 leading-[0.95]">
            Collections
          </h1>
          <Link
            href="#all-collections"
            className="text-sm text-cream-50/80 hover:text-cream-50 transition-colors font-sans border-b border-cream-50/30 hover:border-cream-50 pb-0.5"
          >
            Voir tout
          </Link>
        </div>

        {/* Carousel of book covers */}
        <div className="max-w-7xl mx-auto">
          <BookCarousel collections={collections} />
        </div>

        {/* Most popular + Latest additions */}
        <div className="grid md:grid-cols-2 gap-10 mt-20 max-w-7xl mx-auto">
          <ColumnList
            title="Les plus lus"
            empty="Les statistiques arrivent bientôt."
            items={popular.map((p) => ({
              slug: p.slug,
              title: p.title,
              meta: getCollectionBySlug(p.collection ?? "")?.label,
            }))}
          />
          <ColumnList
            title="Dernières publications"
            empty="Aucune publication pour le moment."
            items={latest.map((p) => ({
              slug: p.slug,
              title: p.title,
              meta: formatDate(p.publishedAt),
            }))}
          />
        </div>

        {/* All collections grid (anchor target) */}
        <div
          id="all-collections"
          className="mt-24 pt-12 border-t border-cream-50/10 max-w-7xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-cream-50 mb-8">
            Toutes les collections
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {collections.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/blog/collections/${c.slug}`}
                  className="group flex items-start gap-4 p-4 bg-ink-800/40 border border-cream-50/10 hover:border-cream-50/30 transition-colors rounded-[18px]"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-10 h-12 rounded-sm shadow-md"
                    style={{
                      background: `linear-gradient(160deg, ${c.palette.light}, ${c.palette.mid}, ${c.palette.dark})`,
                    }}
                  />
                  <span>
                    <span className="block font-serif text-lg text-cream-50 group-hover:text-cream-100">
                      {c.label}
                    </span>
                    <span className="block text-xs text-cream-50/65 leading-relaxed mt-1 font-sans">
                      {c.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Soutenir le projet — Aurora forest section */}
      <SupportProject />
    </div>
  );
}

function ColumnList({
  title,
  items,
  empty,
}: {
  title: string;
  items: { slug: string; title: string; meta?: string }[];
  empty: string;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl font-medium text-cream-50 mb-5">
        {title}
      </h2>
      {items.length === 0 ? (
        <p className="text-sm text-cream-50/65 font-sans">{empty}</p>
      ) : (
        <ul className="flex flex-col divide-y divide-cream-50/10">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/blog/${item.slug}`}
                className="group flex items-center justify-between gap-4 py-4 hover:bg-cream-50/[0.04] -mx-2 px-2 transition-colors"
              >
                <span className="text-cream-50 group-hover:text-cream-100 font-sans">
                  {item.title}
                </span>
                {item.meta && (
                  <span className="text-xs text-cream-50/60 font-sans shrink-0">
                    {item.meta}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
