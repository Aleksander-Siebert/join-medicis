import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contribuer" },
  title: "Contribuer",
  description:
    "Comment contribuer un Skill ou une ressource à la bibliothèque Join Médicis.",
};

const steps = [
  {
    number: "01",
    title: "Préparer",
    desc: "Lisez CONTRIBUTING.md sur GitHub. Vérifiez que la ressource n'existe pas déjà. Assurez-vous d'avoir des métriques de résultat réels à documenter.",
  },
  {
    number: "02",
    title: "Créer",
    desc: "Forkez le repo, créez votre fichier depuis _template.md, remplissez le frontmatter YAML et testez sur au moins 3 cas d'usage différents.",
  },
  {
    number: "03",
    title: "Soumettre",
    desc: "Ouvrez une Pull Request vers main avec le template fourni. Délai de review : 72h maximum.",
  },
  {
    number: "04",
    title: "Publier",
    desc: "Après merge, la ressource apparaît automatiquement sur joinmedicis.com. Vous recevez le flair Contributeur.",
  },
];

const checklist = [
  "Frontmatter YAML complet (tous les champs renseignés)",
  "Skill testé sur au moins 3 cas d'usage différents",
  "Métriques de résultat documentées (chiffrées ou estimées)",
  "Étapes d'installation claires (3 max)",
  "Section compatibilité LLM complète",
  "Rédigé en français natif (pas une traduction)",
  "Pas de clé API ou credential dans le fichier",
  "Licence MIT respectée",
];

export default function ContributePage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="w-px h-16 bg-gradient-to-b from-transparent to-ink-100 mx-auto mb-12"
            aria-hidden="true"
          />
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
            Open-source
          </p>
          <h1 className="font-serif text-5xl font-light text-ink-900 mb-6">
            Contribuer à Join Médicis
          </h1>
          <p className="text-ink-500 font-sans leading-relaxed">
            Chaque ressource publiée a été testée par un humain, dans des
            conditions réelles. Si vous avez développé un Skill qui fonctionne,
            partagez-le.
          </p>
        </div>
      </div>

      {/* Process */}
      <div className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-5 mb-12">
            <span className="text-xs tracking-widest uppercase text-ink-300 font-sans shrink-0">
              Pipeline
            </span>
            <div className="flex-1 h-px bg-ink-100" aria-hidden="true" />
          </div>

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-8">
                <span className="font-serif text-5xl font-light text-ink-100 leading-none shrink-0 select-none">
                  {step.number}
                </span>
                <div className="pt-2">
                  <h3 className="font-serif text-2xl font-light text-ink-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-ink-500 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Checklist */}
      <div className="border-t border-ink-100 px-6 py-16 bg-cream-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-5 mb-10">
            <span className="text-xs tracking-widest uppercase text-ink-300 font-sans shrink-0">
              Checklist qualité
            </span>
            <div className="flex-1 h-px bg-ink-300" aria-hidden="true" />
          </div>
          <p className="text-ink-500 font-sans text-sm mb-8">
            Règle absolue : aucune ressource non testée ne se publie.
          </p>
          <ul className="space-y-3">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-forest-900 mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-ink-700 font-sans">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-ink-100 px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-light text-ink-900 mb-4">
            Prêt à contribuer ?
          </h2>
          <p className="text-ink-500 font-sans text-sm leading-relaxed mb-8">
            Commencez par lire CONTRIBUTING.md sur GitHub, puis soumettez
            votre Pull Request.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://github.com/aleksander-siebert"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-forest-900 text-cream-50 text-sm font-sans hover:bg-forest-700 transition-colors"
            >
              Voir le repo GitHub →
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border border-ink-200 text-ink-700 text-sm font-sans hover:border-ink-400 transition-colors"
            >
              Une question ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
