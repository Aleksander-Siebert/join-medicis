import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plugins — Bientôt",
};

export default function PluginsPage() {
  return (
    <div className="pt-16 min-h-screen flex flex-col">
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
            Bientôt · V1.5
          </p>
          <h1 className="font-serif text-5xl font-light text-ink-900 mb-3">
            Plugins
          </h1>
          <p className="text-ink-500 max-w-xl font-sans">
            Petits modules réutilisables qui étendent un Skill existant (formats
            de sortie, sources de données, contrôles qualité).
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-md w-full text-center">
          <div
            className="w-px h-16 bg-gradient-to-b from-transparent via-ink-100 to-transparent mx-auto mb-10"
            aria-hidden="true"
          />
          <p className="font-serif text-3xl font-light text-ink-700 mb-4">
            En développement
          </p>
          <p className="text-sm text-ink-500 font-sans leading-relaxed mb-8">
            La section Plugins permettra de greffer rapidement des modules
            réutilisables sur n&rsquo;importe quel Skill — par exemple un module
            de tracking UTM ou un formateur Notion.
          </p>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs text-ink-300 mb-2 font-sans">
              <span>Progression</span>
              <span>20 %</span>
            </div>
            <div className="h-1 w-full bg-ink-100">
              <div className="h-full bg-forest-900" style={{ width: "20%" }} />
            </div>
          </div>

          <p className="text-xs text-ink-300 font-sans mb-8">
            Prévue pour la V1.5 — Mois 2-3
          </p>

          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-forest-900 text-cream-50 text-sm font-sans hover:bg-forest-700 transition-colors"
          >
            Être notifié au lancement
          </Link>
        </div>
      </div>
    </div>
  );
}
