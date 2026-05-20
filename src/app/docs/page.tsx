import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Comment utiliser Join Médicis : installer un Skill, comprendre les MCP, contribuer au projet.",
};

const sections = [
  {
    title: "Démarrer",
    items: [
      {
        slug: "qu-est-ce-qu-un-skill",
        label: "Qu'est-ce qu'un Skill ?",
        desc: "Anatomie d'un fichier .md, frontmatter YAML, structure §0–§N.",
      },
      {
        slug: "installer-un-skill-sur-claude-ai",
        label: "Installer un Skill sur Claude.ai",
        desc: "En moins de 5 minutes, depuis le téléchargement jusqu'à la première conversation.",
        href: "/guides/installer-un-skill-sur-claude-ai",
      },
      {
        slug: "comprendre-mcp",
        label: "Comprendre les MCP",
        desc: "Model Context Protocol : ce que c'est, à quoi ça sert, quand l'utiliser.",
      },
    ],
  },
  {
    title: "Ressources",
    items: [
      {
        slug: "skills",
        label: "Bibliothèque de Skills",
        desc: "Tous les Skills disponibles, triés par catégorie Growth.",
        href: "/skills",
      },
      {
        slug: "guides",
        label: "Guides MCP",
        desc: "Connecter Claude à Notion, Google Search Console, HubSpot…",
        href: "/guides",
      },
    ],
  },
  {
    title: "Contribuer",
    items: [
      {
        slug: "publier-un-skill",
        label: "Publier un Skill",
        desc: "Le process pour proposer un Skill à la bibliothèque (PR GitHub).",
        href: "/contribuer",
      },
      {
        slug: "convention-naming",
        label: "Convention de naming & versioning",
        desc: "Slug, sémantique des versions, structure des dossiers.",
      },
      {
        slug: "request",
        label: "Demander un Skill",
        desc: "Tu cherches un Skill qui n'existe pas encore ? Fais une demande.",
        href: "/request",
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-5 font-sans">
            Documentation
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-900 mb-5">
            Tout pour bien démarrer
          </h1>
          <p className="text-ink-500 leading-relaxed font-sans max-w-2xl">
            La documentation pour comprendre, utiliser et contribuer à Join Médicis.
            Pensée pour les marketeurs, pas pour les devs.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-5 mb-8">
                <h2 className="font-serif text-2xl font-light text-ink-900 shrink-0">
                  {section.title}
                </h2>
                <div className="flex-1 h-px bg-ink-100" aria-hidden="true" />
              </div>

              <div className="space-y-4">
                {section.items.map((item) => {
                  const content = (
                    <>
                      <h3 className="font-serif text-lg text-ink-900 mb-1.5">
                        {item.label}
                      </h3>
                      <p className="text-sm text-ink-500 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </>
                  );

                  return item.href ? (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className="block border border-ink-100 bg-cream-100 hover:bg-cream-200 hover:border-ink-200 transition-colors p-6"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div
                      key={item.slug}
                      className="border border-ink-100 bg-cream-100/50 p-6 opacity-70"
                    >
                      {content}
                      <p className="text-xs text-ink-300 mt-2 font-sans">
                        Bientôt — page en cours de rédaction
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
