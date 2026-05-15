import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Join Médicis — qui sommes-nous, pourquoi ce projet, et comment contribuer.",
};

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div
            className="w-px h-16 bg-gradient-to-b from-transparent to-ink-100 mx-auto mb-12"
            aria-hidden="true"
          />
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans text-center">
            À propos
          </p>
          <h1 className="font-serif text-5xl font-light text-ink-900 text-center mb-6">
            Pourquoi Join Médicis
          </h1>
          <p className="text-ink-500 text-center leading-relaxed font-sans">
            Un projet fondé sur un constat simple : 83% des marketeurs
            français utilisent l&rsquo;IA, mais seulement 17% l&rsquo;ont industrialisée.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Origin */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
                Le problème
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-ink-700 leading-relaxed font-sans mb-4">
                Le fossé entre &ldquo;tester ChatGPT ponctuellement&rdquo; et &ldquo;déployer
                Claude dans ses workflows quotidiens&rdquo; est immense. Et il
                n&rsquo;est pas comblé en français.
              </p>
              <p className="text-ink-500 leading-relaxed font-sans">
                Les ressources existantes sont soit trop techniques (GitHub
                brut), soit trop généralistes (forums), soit exclusivement
                anglophones. Il manquait une bibliothèque éditoriale,
                francophone native, calibrée pour les Growth Marketers.
              </p>
            </div>
          </div>

          <div className="h-px bg-ink-100" aria-hidden="true" />

          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
                La mission
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-ink-700 leading-relaxed font-sans mb-4">
                Rendre chaque ressource testée, documentée et déployable en
                moins de 5 minutes — sans terminal, sans clé API exposée,
                sans expertise développeur.
              </p>
              <p className="text-ink-500 leading-relaxed font-sans">
                Chaque Skill publié sur Join Médicis est testé par au moins
                10 membres avant publication. Chaque guide est validé sur
                deux configurations différentes. Aucune ressource non testée
                ne se publie.
              </p>
            </div>
          </div>

          <div className="h-px bg-ink-100" aria-hidden="true" />

          {/* Founder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
                Le fondateur
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-ink-700 leading-relaxed font-sans mb-4">
                Aleksander Siebert — Growth & Digital Marketer, fondateur de
                Join Médicis et auteur de la newsletter Growth with Claude.
              </p>
              <p className="text-ink-500 leading-relaxed font-sans mb-6">
                Placeholder — Votre bio complète ici. Décrivez votre
                parcours, vos expertises, et ce qui vous a motivé à créer
                Join Médicis.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/aleksander-siebert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-forest-900 hover:text-forest-700 transition-colors font-sans underline underline-offset-4"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/aleksander-siebert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-forest-900 hover:text-forest-700 transition-colors font-sans underline underline-offset-4"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-ink-100" aria-hidden="true" />

          {/* Values */}
          <div>
            <p className="text-xs tracking-widest uppercase text-ink-300 mb-8 font-sans">
              Principes
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink-100">
              {[
                {
                  title: "Open-source absolu",
                  desc: "Toutes les ressources sont en Licence MIT. Aucune barrière, aucun paywall.",
                },
                {
                  title: "Francophone natif",
                  desc: "Pas une traduction. Des ressources pensées pour les codes du marché français.",
                },
                {
                  title: "Testé avant tout",
                  desc: "Aucune ressource non validée en conditions réelles. Les métriques sont vérifiées.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-cream-100 p-6">
                  <h3 className="font-serif text-lg font-light text-ink-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-500 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-ink-100 px-6 py-16 bg-cream-200">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-light text-ink-900 mb-4">
            Rejoignez la bibliothèque
          </h2>
          <p className="text-ink-500 font-sans text-sm leading-relaxed mb-8">
            Explorez les Skills, contribuez vos propres ressources, ou suivez
            le projet sur LinkedIn.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/skills"
              className="px-6 py-3 bg-forest-900 text-cream-50 text-sm font-sans hover:bg-forest-700 transition-colors"
            >
              Explorer les Skills →
            </Link>
            <Link
              href="/contribuer"
              className="px-6 py-3 border border-ink-200 text-ink-700 text-sm font-sans hover:border-ink-400 transition-colors"
            >
              Contribuer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
