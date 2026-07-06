import Link from "next/link";
import { homeCategories } from "@/lib/data";

/* Mêmes accents que les tuiles du méga-menu de la navbar. */
const ACCENTS = [
  { bg: "#E8F1ED", fg: "#0E3F2D" }, // forest
  { bg: "#F5E8D4", fg: "#8E6A2A" }, // gold
  { bg: "#E8F0F8", fg: "#1E3A5F" }, // blue
  { bg: "#E8EBEF", fg: "#2A3845" }, // slate
  { bg: "#F5D9C2", fg: "#8B4A1A" }, // terracotta
  { bg: "#F2E8F0", fg: "#5A3A6B" }, // plum
] as const;

export default function CategoryGrid() {
  return (
    <section className="py-20 px-6 border-t border-ink-100">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-5 mb-12">
          <span className="text-xs tracking-widest uppercase text-ink-300 font-sans shrink-0">
            Catégories
          </span>
          <div className="flex-1 h-px bg-ink-100" aria-hidden="true" />
        </div>

        {/* Grid — rounded cards with navbar-style color accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {homeCategories.map((cat, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group bg-cream-50 border border-ink-100 hover:border-forest-900/30 hover:bg-cream-100 transition-all p-7 rounded-[25px]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Colored tile like the navbar */}
                    <span
                      className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-[12px] font-sans font-bold text-sm"
                      style={{ backgroundColor: accent.bg, color: accent.fg }}
                      aria-hidden="true"
                    >
                      {cat.label.charAt(0)}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-ink-900 leading-snug truncate">
                      {cat.label}
                    </h3>
                  </div>
                  {cat.comingSoon ? (
                    <span className="text-xs bg-cream-200 text-ink-300 px-2 py-0.5 font-sans mt-1 shrink-0 rounded">
                      Bientôt
                    </span>
                  ) : (
                    <span className="text-xs text-ink-300 font-sans mt-1 shrink-0">
                      {cat.count} ressource{cat.count !== 1 ? "s" : ""}
                    </span>
                  )}
                </div>

                <p className="text-sm text-ink-500 leading-relaxed font-sans">
                  {cat.description}
                </p>

                <div
                  className="mt-6 flex items-center gap-1.5 text-xs font-sans font-medium transition-all"
                  style={{ color: accent.fg }}
                >
                  <span>Explorer</span>
                  <svg
                    className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
