import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agents IA — Bientôt",
};

export default function AgentsPage() {
  return (
    <div className="pt-16 min-h-screen flex flex-col">
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
            Bientôt · V3
          </p>
          <h1 className="font-serif text-5xl font-light text-ink-900 mb-3">
            Agents IA
          </h1>
          <p className="text-ink-500 max-w-xl font-sans">
            Configurations d&rsquo;agents autonomes utilisant Claude, LangGraph
            ou CrewAI. Disponible dans la V3.
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
            La section Agents incluera des configurations d&rsquo;agents autonomes
            pour automatiser des workflows Growth marketing complets.
          </p>
          <p className="text-xs text-ink-300 font-sans mb-8">
            Prévue pour la V3 — Mois 6+
          </p>
          <Link
            href="/skills"
            className="inline-block px-6 py-3 bg-forest-900 text-cream-50 text-sm font-sans hover:bg-forest-700 transition-colors"
          >
            Explorer les Skills disponibles →
          </Link>
        </div>
      </div>
    </div>
  );
}
