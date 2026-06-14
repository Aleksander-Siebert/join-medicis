import Link from "next/link";

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl font-light text-ink-900">
              Join Médicis
            </Link>
            <p className="mt-3 text-sm text-ink-500 leading-relaxed font-sans">
              La bibliothèque IA & Growth pour les marketeurs francophones.
            </p>
            <p className="mt-4 text-xs text-ink-300 tracking-widest uppercase font-sans">
              Open-source · Code MIT · Contenu CC BY 4.0
            </p>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-ink-300 mb-5 font-sans">
              Ressources
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/skills", label: "Skills Claude" },
                { href: "/ressources/mcp", label: "Serveurs MCP" },
                { href: "/ressources/projets", label: "Projets Claude" },
                { href: "/ressources/ecosysteme", label: "Écosystème" },
                { href: "/glossaire", label: "Glossaire" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-500 hover:text-ink-900 transition-colors font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <span className="text-sm text-ink-300 font-sans">Plugins</span>
                <span className="text-xs bg-cream-200 text-ink-300 px-1.5 py-0.5">Bientôt</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm text-ink-300 font-sans">Automations</span>
                <span className="text-xs bg-cream-200 text-ink-300 px-1.5 py-0.5">Bientôt</span>
              </li>
            </ul>
          </div>

          {/* Communauté */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-ink-300 mb-5 font-sans">
              Communauté
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/authors", label: "Auteurs" },
                { href: "/contribuer", label: "Contribuer" },
                { href: "/request", label: "Demander un Skill" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-500 hover:text-ink-900 transition-colors font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/aleksander-siebert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors font-sans"
                >
                  <GitHubIcon />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-ink-300 mb-5 font-sans">
              Suivre le projet
            </h4>
            <p className="text-sm text-ink-500 leading-relaxed mb-5 font-sans">
              Nouveaux Skills et ressources chaque semaine sur LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/aleksander-siebert/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-forest-900 text-cream-50 text-sm hover:bg-forest-700 transition-colors font-sans"
            >
              <LinkedInIcon />
              Suivre sur LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ink-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ink-300 font-sans">
            © {new Date().getFullYear()} Join Médicis · Code MIT · Contenu CC BY 4.0
          </p>
          <div className="flex items-center gap-6">
            {[
              { href: "/mentions-legales", label: "Mentions légales" },
              { href: "/confidentialite", label: "Confidentialité" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-ink-300 hover:text-ink-500 transition-colors font-sans"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
