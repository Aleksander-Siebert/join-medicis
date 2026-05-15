"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ressourcesLinks = [
  { label: "Projets Claude", href: "/ressources/projets" },
  { label: "Écosystème", href: "/ressources/ecosysteme" },
  { label: "Automations n8n", href: "/ressources/automations", soon: true },
  { label: "Agents IA", href: "/ressources/agents", soon: true },
];

const GitHubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-100/95 backdrop-blur-sm border-b border-ink-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-serif text-xl font-light tracking-wide text-ink-900">
            Join Médicis
          </span>
          <span className="hidden sm:block text-xs tracking-widest uppercase text-ink-300 border-l border-ink-100 pl-3 font-sans">
            bibliothèque IA & Growth
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/skills"
            className={`text-sm transition-colors tracking-wide font-sans ${
              isActive("/skills") ? "text-ink-900" : "text-ink-500 hover:text-ink-900"
            }`}
          >
            Skills
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm transition-colors tracking-wide font-sans ${
                isActive("/ressources") ? "text-ink-900" : "text-ink-500 hover:text-ink-900"
              }`}
            >
              Ressources
              <svg
                className={`w-3 h-3 transition-transform ${dropdown ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56">
                <div className="bg-cream-50 border border-ink-100 shadow-md py-1.5">
                  {ressourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between px-4 py-2.5 text-sm text-ink-500 hover:bg-cream-200 hover:text-ink-900 transition-colors font-sans"
                    >
                      {link.label}
                      {link.soon && (
                        <span className="text-xs bg-cream-300 text-ink-300 px-1.5 py-0.5">
                          Bientôt
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/guides"
            className={`text-sm transition-colors tracking-wide font-sans ${
              isActive("/guides") ? "text-ink-900" : "text-ink-500 hover:text-ink-900"
            }`}
          >
            Guides
          </Link>

          <Link
            href="/a-propos"
            className={`text-sm transition-colors tracking-wide font-sans ${
              isActive("/a-propos") ? "text-ink-900" : "text-ink-500 hover:text-ink-900"
            }`}
          >
            À propos
          </Link>
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://github.com/aleksander-siebert"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-300 hover:text-ink-900 transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <Link
            href="/contribuer"
            className="px-5 py-2 text-sm bg-forest-900 text-cream-50 hover:bg-forest-700 transition-colors tracking-wide font-sans"
          >
            Contribuer
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
        <div className="lg:hidden bg-cream-100 border-t border-ink-100 px-6 py-5 space-y-1">
          {[
            { href: "/skills", label: "Skills" },
            { href: "/guides", label: "Guides" },
            { href: "/ressources/projets", label: "Projets Claude" },
            { href: "/ressources/ecosysteme", label: "Écosystème" },
            { href: "/a-propos", label: "À propos" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobile(false)}
              className="block py-3 text-sm text-ink-700 border-b border-ink-100 last:border-0 font-sans"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/contribuer"
              onClick={() => setMobile(false)}
              className="block text-center py-3 bg-forest-900 text-cream-50 text-sm font-sans"
            >
              Contribuer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
