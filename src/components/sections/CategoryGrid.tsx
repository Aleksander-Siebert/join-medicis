import Link from "next/link";
import { homeCategories } from "@/lib/data";

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

        {/* Grid — thin borders between cells like Solomei's grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100">
          {homeCategories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group bg-cream-100 hover:bg-cream-50 transition-colors p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif text-xl font-light text-ink-900 group-hover:text-forest-900 transition-colors leading-snug">
                  {cat.label}
                </h3>
                {cat.comingSoon ? (
                  <span className="text-xs bg-cream-200 text-ink-300 px-2 py-0.5 font-sans mt-0.5 shrink-0">
                    Bientôt
                  </span>
                ) : (
                  <span className="text-xs text-ink-300 font-sans mt-0.5 shrink-0">
                    {cat.count} ressource{cat.count !== 1 ? "s" : ""}
                  </span>
                )}
              </div>

              <p className="text-sm text-ink-500 leading-relaxed font-sans">
                {cat.description}
              </p>

              <div className="mt-6 flex items-center gap-1.5 text-xs text-ink-300 group-hover:text-forest-900 transition-colors font-sans">
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
          ))}
        </div>
      </div>
    </section>
  );
}
