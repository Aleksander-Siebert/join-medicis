import type { Metadata } from "next";
import Link from "next/link";
import { ecosystem } from "@/lib/data";
import type { EcosystemCategory } from "@/types";
import EcosystemLogo from "@/components/ui/EcosystemLogo";

export const metadata: Metadata = {
  alternates: { canonical: "/ecosysteme" },
  title: "Écosystème",
  description:
    "Ressources IA Growth créées par des tiers et recensées éditorialement, classées par catégorie.",
};

const CATEGORY_ORDER: { id: EcosystemCategory; label: string; description: string }[] = [
  {
    id: "entreprises",
    label: "Entreprises",
    description: "Éditeurs, plateformes et outils qui construisent avec l'IA.",
  },
  {
    id: "individus",
    label: "Individus",
    description: "Créateurs, experts et communautés qui font avancer le domaine.",
  },
  {
    id: "gouvernement",
    label: "Gouvernement",
    description: "Institutions publiques et ressources officielles.",
  },
  {
    id: "autres",
    label: "Autres",
    description: "Ressources qui n'entrent pas dans les catégories ci-dessus.",
  },
];

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function EcosystemePage() {
  const categories = CATEGORY_ORDER.map((cat) => ({
    ...cat,
    items: ecosystem.filter((r) => r.category === cat.id),
  })).filter((cat) => cat.items.length > 0);

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
            Ressources
          </p>
          <h1 className="font-serif text-5xl font-light text-ink-900 mb-3">Écosystème</h1>
          <p className="text-ink-500 max-w-xl font-sans">
            Ressources créées par des tiers, recensées et évaluées éditorialement.
            Indépendance garantie — aucun contenu sponsorisé.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 py-16 space-y-20">
        {categories.map((cat) => (
          <section key={cat.id} className="max-w-5xl mx-auto">
            {/* Category heading */}
            <div className="flex items-baseline gap-4 mb-8">
              <h2 className="font-serif text-3xl font-light text-ink-900">{cat.label}</h2>
              <span className="text-xs text-ink-300 font-sans">
                {cat.items.length} ressource{cat.items.length > 1 ? "s" : ""}
              </span>
              <div className="flex-1 h-px bg-ink-100" aria-hidden="true" />
            </div>
            <p className="text-sm text-ink-500 font-sans mb-8 -mt-4">{cat.description}</p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {cat.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/ecosysteme/${item.slug}`}
                  className="group flex flex-col bg-cream-100 border border-ink-100 p-6 hover:border-forest-600 hover:shadow-[0_2px_24px_-12px_rgba(26,51,40,0.4)] transition-all duration-200"
                >
                  {/* Logo + meta */}
                  <div className="flex items-start gap-4 mb-4">
                    <EcosystemLogo resource={item} size={48} />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-xl font-light text-ink-900 group-hover:text-forest-900 transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs tracking-widest uppercase text-ink-300 font-sans mt-1">
                        {item.org}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-ink-500 font-sans leading-relaxed flex-1">
                    {item.tagline}
                  </p>

                  {/* Tags */}
                  {(item.type || item.lang) && (
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      {item.type && (
                        <span className="text-xs bg-cream-200 text-ink-500 px-2 py-0.5 font-sans">
                          {item.type}
                        </span>
                      )}
                      {item.lang && (
                        <span className="text-xs bg-cream-200 text-ink-500 px-2 py-0.5 font-sans">
                          {item.lang}
                        </span>
                      )}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-5 pt-4 border-t border-ink-100 flex items-center gap-1.5 text-sm text-forest-900 font-sans font-medium">
                    Découvrir la ressource
                    <ArrowIcon />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Submit CTA */}
      <div className="border-t border-ink-100 px-6 py-12 bg-cream-200">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-ink-500 font-sans text-sm leading-relaxed mb-6">
            Vous connaissez une ressource IA Growth qui mérite d&rsquo;être référencée ici ?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 border border-ink-300 text-ink-700 text-sm font-sans hover:border-ink-500 transition-colors"
          >
            Proposer une ressource
          </Link>
        </div>
      </div>
    </div>
  );
}
