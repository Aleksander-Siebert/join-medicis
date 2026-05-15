import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Écosystème",
  description:
    "Ressources IA Growth créées par des tiers et recensées éditorialement.",
};

const ecosysteme = [
  {
    slug: "skills-lemlist",
    name: "Skills Lemlist",
    org: "Lemlist",
    description:
      "Les Skills officiels de Lemlist pour personnaliser les séquences d'outreach avec Claude.",
    type: "Skills",
    lang: "EN + FR",
  },
  {
    slug: "skills-coreyhaines",
    name: "Marketing Skills (corey haines)",
    org: "Corey Haines",
    description:
      "La collection de référence en anglais (17k stars GitHub). Base de travail pour de nombreux Skills Join Médicis.",
    type: "Skills",
    lang: "EN",
  },
  {
    slug: "skills-lawvable",
    name: "Skills Lawvable",
    org: "Lawvable",
    description:
      "Preuve de concept du modèle bibliothèque sectorielle. 70+ Skills juridiques, UX référence.",
    type: "Skills",
    lang: "FR",
  },
];

export default function EcosystemePage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
            Ressources
          </p>
          <h1 className="font-serif text-5xl font-light text-ink-900 mb-3">
            Écosystème
          </h1>
          <p className="text-ink-500 max-w-xl font-sans mb-2">
            Ressources créées par des tiers, recensées et évaluées
            éditorialement. Indépendance garantie — aucun contenu sponsorisé.
          </p>
        </div>
      </div>

      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-px bg-ink-100">
          {ecosysteme.map((item) => (
            <div key={item.slug} className="bg-cream-100 p-8">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs tracking-widest uppercase text-ink-300 font-sans">
                      {item.org}
                    </span>
                    <span className="text-xs bg-cream-200 text-ink-500 px-2 py-0.5 font-sans">
                      {item.type}
                    </span>
                    <span className="text-xs bg-cream-200 text-ink-500 px-2 py-0.5 font-sans">
                      {item.lang}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl font-light text-ink-900 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-sm text-ink-500 font-sans leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-ink-100 px-6 py-12 bg-cream-200">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-ink-500 font-sans text-sm leading-relaxed mb-6">
            Vous connaissez une ressource IA Growth qui mérite d&rsquo;être
            référencée ici ?
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
