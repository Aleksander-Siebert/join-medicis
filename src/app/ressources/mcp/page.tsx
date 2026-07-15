import Link from "next/link";
import { guides } from "@/lib/data";
import FAQ, { type FAQItem } from "@/components/sections/FAQ";
import type { Metadata } from "next";

const MCP_FAQ: FAQItem[] = [
  {
    question: "Concrètement, MCP c'est quoi ?",
    answer:
      "MCP (Model Context Protocol) est un standard open-source créé par Anthropic. C'est un pont entre Claude et un outil externe : une fois le serveur MCP installé, Claude peut lire et écrire dans Notion, Search Console, HubSpot, etc. — sans que tu copies/colles. Tu lui dis « regarde dans mon Notion » et il le fait directement.",
  },
  {
    question: "Quelle différence entre MCP et un Skill ?",
    answer:
      "Un Skill configure le comportement de Claude (le prompt système). Un MCP lui donne accès à un outil externe. Les deux se combinent à merveille — par exemple : Skill « Brief SEO » + MCP Search Console = Claude qui rédige tes briefs en se basant sur tes vrais classements GSC, sans aucun export manuel.",
  },
  {
    question: "C'est compliqué à installer ?",
    answer:
      "Non, mais il faut suivre les étapes. Compte 5 à 15 minutes par serveur la première fois — installation d'un fichier de config, génération d'un token d'API, redémarrage de Claude Desktop. Chaque guide est pas-à-pas avec captures d'écran. Aucun terminal complexe, aucun code à écrire.",
  },
  {
    question: "Je dois être développeur pour utiliser MCP ?",
    answer:
      "Non. La plupart des serveurs MCP s'installent comme une extension : tu modifies un fichier JSON, tu colles un token, tu redémarres Claude. Si tu sais ouvrir un éditeur de texte et coller du JSON, tu peux installer un MCP. Les guides sont écrits pour des marketeurs, pas pour des devs.",
  },
  {
    question: "Est-ce que mes données sont en sécurité ?",
    answer:
      "Le serveur MCP tourne en local sur ta machine (ou sur un serveur que tu contrôles). Quand Claude appelle une fonction MCP, la requête passe par le serveur local — Anthropic ne voit jamais directement tes données Notion ou HubSpot. Tu gardes le contrôle total. Pour les tokens d'API, ils sont stockés dans ton fichier de config local, pas envoyés ailleurs.",
  },
  {
    question: "Ça marche aussi sur ChatGPT, Gemini, Mistral ?",
    answer:
      "MCP a été créé par Anthropic, donc l'expérience la plus fluide est sur Claude Desktop et Claude Code. ChatGPT et Gemini supportent leurs propres équivalents (Custom GPTs avec Actions, Gemini Extensions) mais ne sont pas compatibles MCP nativement à date. La documentation se concentre sur Claude pour cette raison.",
  },
  {
    question: "Et si l'outil que j'utilise n'a pas encore de serveur MCP ?",
    answer:
      "Trois options : (1) regarde sur le repo officiel anthropic/mcp-servers — la liste grossit chaque semaine, (2) demande-nous via la page « Demander un Skill » qu'on en publie un guide quand il existe, (3) si tu es à l'aise avec un peu de code (Node.js ou Python), tu peux créer ton propre serveur MCP — la spec est documentée chez Anthropic.",
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "/ressources/mcp" },
  title: "Serveurs MCP",
  description:
    "La bibliothèque de serveurs MCP (Model Context Protocol) pour connecter Claude à tes outils favoris.",
};

export default function MCPPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-5 font-sans">
            Ressources · MCP
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-900 mb-5">
            Serveurs MCP pour Claude
          </h1>
          <p className="text-ink-500 leading-relaxed font-sans max-w-2xl">
            Le Model Context Protocol permet à Claude d&rsquo;accéder à tes outils
            (Notion, Search Console, HubSpot, etc.) directement depuis une
            conversation. Voici les serveurs testés et documentés pour le Growth.
          </p>
        </div>
      </div>

      {/* What is MCP */}
      <div className="border-b border-ink-100 px-6 py-12 bg-cream-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
              C&rsquo;est quoi MCP ?
            </p>
            <h2 className="font-serif text-2xl font-light text-ink-900 mb-3">
              Une passerelle entre Claude et tes outils
            </h2>
            <p className="text-sm text-ink-500 leading-relaxed font-sans">
              MCP (Model Context Protocol) est un standard open-source créé par
              Anthropic. Il permet à Claude de lire et écrire dans des outils
              externes — sans copier-coller, sans intermédiaire. Une fois
              configuré, tu demandes simplement à Claude « regarde dans Notion » ou
              « pousse cette page dans HubSpot ».
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
              Pour qui ?
            </p>
            <h2 className="font-serif text-2xl font-light text-ink-900 mb-3">
              Marketeurs équipés d&rsquo;un stack outil
            </h2>
            <p className="text-sm text-ink-500 leading-relaxed font-sans">
              Si tu jongles déjà entre 5 outils (CRM, analytics, CMS, Notion, GSC)
              MCP fait gagner un temps fou. Compte 5 à 15 minutes par serveur la
              première fois — ensuite, c&rsquo;est transparent.
            </p>
          </div>
        </div>
      </div>

      {/* MCP guides list */}
      <div className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-5 mb-10">
            <h2 className="font-serif text-2xl font-light text-ink-900 shrink-0">
              Serveurs MCP documentés
            </h2>
            <div className="flex-1 h-px bg-ink-100" aria-hidden="true" />
            <span className="text-xs text-ink-300 font-sans">{guides.length} guides</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="bg-cream-100 p-6 hover:bg-cream-200 transition-colors group flex flex-col"
              >
                <div className="mb-4">
                  <span className="text-xs tracking-widest uppercase text-ink-300 font-sans">
                    {guide.target}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-light text-ink-900 group-hover:text-forest-900 transition-colors mb-2 leading-snug">
                  {guide.name}
                </h3>

                <p className="text-sm text-ink-500 leading-relaxed font-sans flex-1 mb-5">
                  {guide.description}
                </p>

                <div className="pt-4 border-t border-ink-100 flex items-center gap-2 text-xs text-ink-400 font-sans">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Installation : {guide.installTime}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-ink-500 font-sans mb-5">
              D&rsquo;autres serveurs en cours de documentation (HubSpot, Pipedrive,
              Linear, GA4…)
            </p>
            <Link
              href="/contribuer"
              className="inline-block px-6 py-3 border border-ink-200 text-ink-700 text-sm hover:border-ink-400 hover:text-ink-900 transition-colors font-sans"
            >
              Demander un nouveau MCP →
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FAQ
        items={MCP_FAQ}
        eyebrow="MCP · FAQ"
        title="Tout sur les serveurs MCP"
        subtitle="Installation, sécurité, compatibilité — les questions concrètes qu'on nous pose sur le Model Context Protocol."
      />
    </div>
  );
}
