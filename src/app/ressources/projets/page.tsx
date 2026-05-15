import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projets Claude",
  description:
    "Configurations complètes pour transformer Claude en assistant Growth spécialisé.",
};

const projets = [
  {
    slug: "growth-analyst",
    name: "Growth Analyst",
    description:
      "Transforme Claude en analyste Growth dédié : analyse de données marketing, identification des leviers, recommandations actionnables.",
    plan: "Claude Pro",
    type: "Analyste",
  },
  {
    slug: "seo-content-manager",
    name: "SEO Content Manager",
    description:
      "Un assistant SEO complet : brief, rédaction, optimisation on-page, maillage interne, suivi de performance.",
    plan: "Claude Pro",
    type: "Contenu",
  },
  {
    slug: "outbound-researcher",
    name: "Outbound Researcher",
    description:
      "Qualification de prospects, personnalisation des approches, recherche de signaux d'achat et de contexte business.",
    plan: "Claude Free",
    type: "Prospection",
  },
];

export default function ProjetsPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
            Ressources
          </p>
          <h1 className="font-serif text-5xl font-light text-ink-900 mb-3">
            Projets Claude
          </h1>
          <p className="text-ink-500 max-w-xl font-sans">
            Configurations complètes (system prompt + fichiers de contexte)
            pour transformer Claude en assistant Growth spécialisé.
          </p>
        </div>
      </div>

      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-px bg-ink-100">
          {projets.map((projet) => (
            <div
              key={projet.slug}
              className="bg-cream-100 p-8 flex items-start justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs tracking-widest uppercase text-ink-300 font-sans">
                    {projet.type}
                  </span>
                  <span className="text-xs bg-cream-200 text-ink-500 px-2 py-0.5 font-sans">
                    {projet.plan}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-light text-ink-900 mb-2">
                  {projet.name}
                </h2>
                <p className="text-sm text-ink-500 font-sans leading-relaxed max-w-xl">
                  {projet.description}
                </p>
              </div>
              <div className="shrink-0">
                <button className="px-5 py-2.5 bg-forest-900 text-cream-50 text-sm font-sans hover:bg-forest-700 transition-colors">
                  Télécharger ZIP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-ink-100 px-6 py-12 bg-cream-200">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-ink-500 font-sans text-sm leading-relaxed mb-6">
            Vous avez créé un Projet Claude qui fonctionne bien ?
            Contribuez-le à la bibliothèque.
          </p>
          <Link
            href="/contribuer"
            className="inline-block px-6 py-3 border border-ink-300 text-ink-700 text-sm font-sans hover:border-ink-500 transition-colors"
          >
            Proposer un Projet
          </Link>
        </div>
      </div>
    </div>
  );
}
