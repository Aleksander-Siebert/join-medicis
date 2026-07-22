"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ------------------------------------------------------------------ */
/* Icons (lucide-style strokes)                                        */
/* ------------------------------------------------------------------ */
const I = {
  skills: (
    <path d="M13 2L4.5 12.5h6L9 22l9-11h-6L13 2z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  mcp: (
    <>
      <path d="M9 7V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3" strokeLinecap="round" />
      <path d="M9 7h6v4a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V7z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 17v5" strokeLinecap="round" />
    </>
  ),
  plugins: (
    <path
      d="M10 3v3a1 1 0 0 1-1 1H6m0 0a2 2 0 1 0 0 4h3a1 1 0 0 1 1 1v3a2 2 0 1 0 4 0v-3a1 1 0 0 1 1-1h3a2 2 0 1 0 0-4h-3a1 1 0 0 1-1-1V3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  automations: (
    <>
      <path d="M4 4v6h6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 20v-6h-6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 10a8 8 0 0 1 14-3M20 14a8 8 0 0 1-14 3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  agents: (
    <>
      <rect x="5" y="8" width="14" height="11" rx="3" />
      <path d="M12 4v4M9 13h.01M15 13h.01" strokeLinecap="round" />
    </>
  ),
  contribuer: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" strokeLinecap="round" />
    </>
  ),
  glossaire: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h6v17H6a2 2 0 0 0-2 2V5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 5a2 2 0 0 0-2-2h-6v17h6a2 2 0 0 1 2 2V5z" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  ecosysteme: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  auteurs: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" strokeLinecap="round" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8M18 20a6 6 0 0 0-3-5.2" strokeLinecap="round" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  newsletter: (
    <>
      <path d="M3 11l18-7-7 18-2.5-7.5L3 11z" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  blog: (
    <>
      <path d="M5 3h9l5 5v13a0 0 0 0 1 0 0H5a0 0 0 0 1 0 0V3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 3v5h5M8 13h8M8 17h6" strokeLinecap="round" />
    </>
  ),
  about: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M16 8l-2 6-6 2 2-6 6-2z" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  roadmap: (
    <>
      <path d="M9 20l-5-2V5l5 2m0 13l6-2m-6 2V7m6 11l5 2V7l-5-2m0 13V5m0 2L9 5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

/* Tile color palettes — on-brand variety (forest / gold / blue / slate / terracotta / plum) */
const TILES = {
  forest: { bg: "#E8F1ED", fg: "#0E3F2D" },
  gold: { bg: "#F5E8D4", fg: "#8E6A2A" },
  blue: { bg: "#E8F0F8", fg: "#1E3A5F" },
  slate: { bg: "#E8EBEF", fg: "#2A3845" },
  terracotta: { bg: "#F5D9C2", fg: "#8B4A1A" },
  plum: { bg: "#F2E8F0", fg: "#5A3A6B" },
} as const;

type MenuItem = {
  label: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
  tile: keyof typeof TILES;
  soon?: boolean;
  external?: boolean;
};

type Menu = { id: string; label: string; activePrefix: string[]; items: MenuItem[] };

const MENUS: Menu[] = [
  {
    id: "ressources",
    label: "Ressources",
    activePrefix: ["/ressources/skills", "/ressources"],
    items: [
      { label: "Skills", desc: "Compétences Claude prêtes à charger", href: "/ressources/skills", icon: I.skills, tile: "forest" },
      { label: "MCP", desc: "Connectez vos outils directement à Claude", href: "/ressources/mcp", icon: I.mcp, tile: "blue" },
      { label: "Plugins", desc: "Étendez Claude avec des extensions", href: "/ressources/plugins", icon: I.plugins, tile: "plum", soon: true },
      { label: "Automations", desc: "Workflows n8n et Make orchestrés", href: "/ressources/automations", icon: I.automations, tile: "gold", soon: true },
      { label: "Agents IA", desc: "Des agents autonomes qui travaillent pour vous", href: "/ressources/agents", icon: I.agents, tile: "terracotta", soon: true },
    ],
  },
  {
    id: "communaute",
    label: "Communauté",
    activePrefix: ["/contribuer", "/glossaire", "/ecosysteme", "/auteurs"],
    items: [
      { label: "Contribuer", desc: "Ajoutez vos ressources à la bibliothèque", href: "/contribuer", icon: I.contribuer, tile: "forest" },
      { label: "Glossaire", desc: "Tous les termes de l'IA, expliqués simplement", href: "/glossaire", icon: I.glossaire, tile: "slate" },
      { label: "Écosystème", desc: "Les acteurs de l'IA francophone à suivre", href: "/ecosysteme", icon: I.ecosysteme, tile: "blue" },
      { label: "Auteurs", desc: "Celles et ceux qui font vivre le projet", href: "/auteurs", icon: I.auteurs, tile: "gold" },
    ],
  },
  {
    id: "apropos",
    label: "À propos",
    activePrefix: ["/contact", "/blog", "/a-propos", "/roadmap"],
    items: [
      { label: "Contact", desc: "Une question ? Écrivez-nous directement", href: "/contact", icon: I.contact, tile: "slate" },
      { label: "Growth with Claude 🐙", desc: "Notre newsletter Growth & IA sur LinkedIn", href: "https://www.linkedin.com/newsletters/growth-with-claude%F0%9F%90%99-7443262733011189760/", icon: I.newsletter, tile: "terracotta", external: true },
      { label: "Blog", desc: "Articles, analyses et retours d'expérience", href: "/blog", icon: I.blog, tile: "plum" },
      { label: "Roadmap", desc: "Suivez l'avancée du projet et votez", href: "/roadmap", icon: I.roadmap, tile: "gold" },
      { label: "Join Médicis", desc: "La vision et l'histoire du projet", href: "/a-propos", icon: I.about, tile: "forest" },
    ],
  },
];

const GitHubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

function IconTile({ tile, children }: { tile: keyof typeof TILES; children: React.ReactNode }) {
  const c = TILES[tile];
  return (
    <span
      className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-[12px]"
      style={{ backgroundColor: c.bg }}
      aria-hidden="true"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c.fg} strokeWidth="1.8">
        {children}
      </svg>
    </span>
  );
}

function MenuItemRow({ item, onClick }: { item: MenuItem; onClick?: () => void }) {
  const inner = (
    <>
      <IconTile tile={item.tile}>{item.icon}</IconTile>
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          <span className="font-sans font-semibold text-ink-900 text-sm">{item.label}</span>
          {item.soon && (
            <span className="text-[10px] tracking-wide uppercase bg-cream-200 text-ink-500 px-1.5 py-0.5 rounded font-sans font-medium">
              Bientôt
            </span>
          )}
        </span>
        <span className="block text-xs text-ink-500 leading-snug mt-0.5 font-sans">{item.desc}</span>
      </span>
    </>
  );

  const cls =
    "group/item flex items-start gap-3.5 p-3 rounded-[14px] hover:bg-cream-100 transition-colors";

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={item.href} className={cls} onClick={onClick}>
      {inner}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();

  const isMenuActive = (m: Menu) =>
    m.activePrefix.some((p) => pathname === p || pathname.startsWith(p + "/"));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-100/95 backdrop-blur-sm border-b border-ink-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <span className="font-sans text-xl font-bold tracking-tight text-ink-900">
            Join Médicis
          </span>
        </Link>

        {/* Desktop mega-menu nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {MENUS.map((menu) => (
            <div
              key={menu.id}
              className="relative"
              onMouseEnter={() => setOpen(menu.id)}
              onMouseLeave={() => setOpen((cur) => (cur === menu.id ? null : cur))}
            >
              <button
                type="button"
                aria-expanded={open === menu.id}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-[12px] text-sm tracking-wide font-sans transition-colors ${
                  open === menu.id || isMenuActive(menu)
                    ? "text-ink-900 font-semibold bg-cream-200/60"
                    : "text-ink-800 hover:text-ink-900 font-medium hover:bg-cream-200/40"
                }`}
              >
                {menu.label}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${open === menu.id ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {open === menu.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  {/* Caret notch */}
                  <span
                    aria-hidden="true"
                    className="absolute top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-cream-50 border-l border-t border-ink-100"
                  />
                  <div className="relative w-[620px] bg-cream-50 border border-ink-100 rounded-[20px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] p-3">
                    <div className="grid grid-cols-2 gap-1">
                      {menu.items.map((item) => (
                        <MenuItemRow key={item.href} item={item} onClick={() => setOpen(null)} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="https://github.com/Aleksander-Siebert/join-medicis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-500 hover:text-forest-900 transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <Link
            href="/contribuer"
            className="px-5 py-2 text-sm bg-forest-900 text-cream-50 hover:bg-forest-700 transition-colors tracking-wide font-sans rounded-[12px]"
          >
            Join the Renaissance
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden text-ink-700 p-1"
          onClick={() => setMobile(!mobile)}
          aria-label="Menu"
        >
          {mobile ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div className="lg:hidden bg-cream-100 border-t border-ink-100 px-6 py-5 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {MENUS.map((menu) => (
            <div key={menu.id} className="mb-6">
              <p className="text-xs tracking-[0.15em] uppercase text-ink-400 font-sans font-semibold mb-2">
                {menu.label}
              </p>
              <div className="flex flex-col">
                {menu.items.map((item) => (
                  <MenuItemRow key={item.href} item={item} onClick={() => setMobile(false)} />
                ))}
              </div>
            </div>
          ))}
          <Link
            href="/contribuer"
            onClick={() => setMobile(false)}
            className="block text-center py-3 bg-forest-900 text-cream-50 text-sm font-sans rounded-[12px]"
          >
            Join the Renaissance
          </Link>
        </div>
      )}
    </header>
  );
}
