import Link from "next/link";
import { guides } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides MCP",
  description:
    "Guides pas à pas pour connecter Claude à vos outils marketing via le protocole MCP.",
};

const difficultyConfig = {
  debutant: { label: "Débutant", className: "bg-forest-100 text-forest-900" },
  intermediaire: { label: "Intermédiaire", className: "bg-cream-300 text-ink-700" },
  avance: { label: "Avancé", className: "bg-ink-900 text-cream-50" },
};

export default function GuidesPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
            Guides
          </p>
          <h1 className="font-serif text-5xl font-light text-ink-900 mb-3">
            Guides MCP
          </h1>
          <p className="text-ink-500 max-w-xl font-sans">
            Connectez Claude à vos outils marketing en quelques minutes.
            Step-by-step, sans terminal, sans expertise technique.
          </p>
        </div>
      </div>

      {/* What is MCP */}
      <div className="border-b border-ink-100 px-6 py-12 bg-cream-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
              C&rsquo;est quoi le MCP ?
            </p>
            <p className="text-sm text-ink-500 leading-relaxed font-sans">
              Model Context Protocol — le protocole d&rsquo;Anthropic qui permet à
              Claude de se connecter à des outils externes (Notion, Google,
              HubSpot...) et d&rsquo;agir directement dessus.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
              Sans MCP
            </p>
            <p className="text-sm text-ink-500 leading-relaxed font-sans">
              Vous exportez vos données, les copiez-collez dans Claude, obtenez
              une analyse, puis recopiez manuellement les résultats dans vos
              outils.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
              Avec MCP
            </p>
            <p className="text-sm text-ink-500 leading-relaxed font-sans">
              Claude accède directement à vos données et peut agir en temps
              réel — analyser, rédiger, créer des entrées dans Notion, lire
              la Search Console.
            </p>
          </div>
        </div>
      </div>

      {/* Guides list */}
      <div className="px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-px bg-ink-100">
          {guides.map((guide) => {
            const diff = difficultyConfig[guide.difficulty];
            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex items-start justify-between bg-cream-100 hover:bg-cream-50 transition-colors p-8 gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs tracking-widest uppercase text-ink-300 font-sans">
                      {guide.target}
                    </span>
                    <span className={`text-xs px-2 py-0.5 font-sans ${diff.className}`}>
                      {diff.label}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl font-light text-ink-900 group-hover:text-forest-900 transition-colors mb-2">
                    {guide.name}
                  </h2>
                  <p className="text-sm text-ink-500 leading-relaxed font-sans max-w-xl">
                    {guide.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-cream-200 text-ink-400 px-2 py-0.5 font-sans"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-ink-300 font-sans mb-1">Installation</p>
                  <p className="text-sm font-medium text-ink-700 font-sans">
                    {guide.installTime}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-ink-300 group-hover:text-forest-900 transition-colors justify-end font-sans text-sm">
                    <span>Lire</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
