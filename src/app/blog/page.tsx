import Link from "next/link";
import type { Metadata } from "next";
import BookCarousel from "@/components/blog/BookCarousel";
import { collections, getCollectionBySlug } from "@/lib/collections";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
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
    <div className="pt-16 min-h-screen bg-cream-100">
      <div className="grid lg:grid-cols-[340px_1fr] min-h-[calc(100vh-4rem)]">
        {/* ============ LEFT SIDEBAR ============ */}
        <aside className="relative bg-cream-100 px-8 py-12 lg:py-16 flex flex-col">
          <p className="text-sm tracking-wide text-ink-500 mb-12 font-sans">
            <em className="italic font-serif text-base">by</em>{" "}
            <span className="font-semibold text-ink-900">Join Méd<em className="italic">ici</em>s</span>
          </p>

          <div className="flex items-end gap-3 mb-7">
            <span className="font-serif italic text-5xl md:text-6xl font-light text-ink-900 leading-none">
              the
            </span>
            <BookmarkIcon />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-ink-900 leading-[0.95] mb-8">
            Bibliotheca
          </h1>
          <p className="text-ink-700 leading-relaxed font-sans max-w-sm mb-10">
            La bibliothèque éditoriale du projet — Skills, MCP, agents, vibe coding, growth IA, et journal de bord en accès libre.
          </p>

          <Link
            href="/skills"
            className="mt-auto inline-flex items-center gap-3 px-4 py-3 bg-cream-50 border border-ink-100 hover:border-forest-900/40 transition-colors w-fit rounded-[18px]"
          >
            <span className="w-9 h-9 rounded-full bg-forest-900 text-cream-50 flex items-center justify-center font-serif text-sm font-medium">
              J
            </span>
            <span className="text-sm leading-tight">
              <span className="block text-xs text-ink-500 font-sans">Démarrer avec</span>
              <span className="block font-semibold text-ink-900 font-sans">les Skills →</span>
            </span>
          </Link>
        </aside>

        {/* ============ DARK MAIN PANEL ============ */}
        <section className="relative bg-ink-900 text-cream-50 px-8 py-12 lg:py-16 overflow-hidden rounded-tl-[25px] rounded-bl-[25px] lg:rounded-l-[25px]">
          {/* Header */}
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-cream-50">
              Collections
            </h2>
            <Link
              href="#all-collections"
              className="text-sm text-cream-50/80 hover:text-cream-50 transition-colors font-sans border-b border-cream-50/30 hover:border-cream-50 pb-0.5"
            >
              Voir tout
            </Link>
          </div>

          {/* Carousel of book covers */}
          <BookCarousel collections={collections} />

          {/* Most popular + Latest additions */}
          <div className="grid md:grid-cols-2 gap-10 mt-20">
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
          <div id="all-collections" className="mt-24 pt-12 border-t border-cream-50/10">
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-cream-50 mb-8">
              Toutes les collections
            </h3>
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
      </div>
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
      <h3 className="font-serif text-2xl md:text-3xl font-medium text-cream-50 mb-5">{title}</h3>
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

function BookmarkIcon() {
  return (
    <svg
      width="36"
      height="46"
      viewBox="0 0 36 46"
      fill="none"
      aria-hidden="true"
      className="mb-1"
    >
      <rect x="2" y="2" width="32" height="42" rx="2" fill="#1A1916" stroke="#0F0E0C" strokeWidth="1.2" />
      <rect x="6" y="6" width="24" height="34" fill="#2A2925" />
      <path d="M21 4 L21 16 L18 13 L15 16 L15 4 Z" fill="#FEFCF8" />
      <text x="18" y="13" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="7" fill="#1A1916">
        j
      </text>
    </svg>
  );
}
