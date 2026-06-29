import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/ressources/automations" },
  title: "Automations — Bientôt",
};

export default function AutomationsPage() {
  return (
    <div className="pt-16 min-h-screen flex flex-col">
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
            Bientôt · V2
          </p>
          <h1 className="font-serif text-5xl font-light text-ink-900 mb-3">
            Automations
          </h1>
          <p className="text-ink-500 max-w-xl font-sans">
            Templates n8n, Make et Zapier connectant des outils marketing avec
            des LLMs. Disponible dans la V2.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <div
            className="w-px h-16 bg-gradient-to-b from-transparent via-ink-100 to-transparent mx-auto mb-10"
            aria-hidden="true"
          />
          <p className="font-serif text-3xl font-light text-ink-700 mb-4">
            En préparation
          </p>
          <p className="text-sm text-ink-500 font-sans leading-relaxed mb-8">
            La section Automations incluera des templates exportables pour
            n8n, Make et Zapier, connectant vos outils marketing à Claude.
          </p>
          <p className="text-xs text-ink-300 font-sans mb-8">
            Prévue pour la V2 — Mois 3-4
          </p>
          <Link
            href="/ressources/skills"
            className="inline-block px-6 py-3 bg-forest-900 text-cream-50 text-sm font-sans hover:bg-forest-700 transition-colors"
          >
            Explorer les Skills disponibles →
          </Link>
        </div>
      </div>
    </div>
  );
}
