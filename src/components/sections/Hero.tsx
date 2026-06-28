import Link from "next/link";
import { siteStats } from "@/lib/data";

const GitHubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const statsData = [
  { value: String(siteStats.skillsCount), label: "Skills disponibles" },
  { value: String(siteStats.projetsCount), label: "Projets Claude" },
  { value: String(siteStats.guidesCount), label: "Guides MCP" },
  { value: "MIT", label: "Licence" },
];

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden">
      {/* Background image — Michelangelo, La Création d'Adam (1512), public domain */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/michelangelo-creation-adam.webp')" }}
      />
      {/* Slightly stronger halo behind text — fresco is more textured than Monet */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 60% at 50% 45%, rgba(250,247,240,0.92) 0%, rgba(250,247,240,0.7) 45%, rgba(250,247,240,0.15) 80%)",
        }}
      />
      {/* Soft bottom fade to next section */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-cream-50"
      />

      {/* Decorative top line — Solomei-inspired */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-ink-100 to-transparent"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Overline label */}
        <p
          className="text-xs tracking-widest uppercase text-ink-900 mb-10 font-sans font-semibold"
          style={{ textShadow: "0 1px 10px rgba(250,247,240,0.85)" }}
        >
          Bibliothèque open-source · Francophone · Growth Marketing
        </p>

        {/* Heading — Inter (matches the old navbar tagline), large and dark over the fresco */}
        <h1
          className="font-sans tracking-tight text-5xl md:text-6xl lg:text-7xl font-bold text-ink-900 leading-[1.1] mb-6"
          style={{ textShadow: "0 1px 24px rgba(250,247,240,0.85)" }}
        >
          La bibliothèque IA & Growth
          <br />
          <span className="text-forest-900">pour les marketeurs francophones</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-base md:text-lg text-ink-900 max-w-2xl mx-auto leading-relaxed mb-14 font-sans font-medium"
          style={{ textShadow: "0 1px 12px rgba(250,247,240,0.85)" }}
        >
          Skills Claude, projets prêts à l&rsquo;emploi, guides MCP, workflows n8n.
          Tout en français, tout gratuit, tout open-source.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/ressources/skills"
            className="px-8 py-3.5 bg-forest-900 text-cream-50 text-sm tracking-wide hover:bg-forest-700 transition-colors font-sans"
          >
            Explorer les Skills →
          </Link>
          <a
            href="https://github.com/Aleksander-Siebert/join-medicis"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-ink-300 text-ink-900 text-sm tracking-wide hover:border-forest-900 hover:text-forest-900 transition-colors flex items-center gap-2.5 font-sans font-medium"
          >
            <GitHubIcon />
            Voir sur GitHub
          </a>
        </div>

        {/* Social proof bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {statsData.map((stat, i) => (
            <div key={i} className="flex items-center gap-6">
              {i > 0 && (
                <span className="hidden sm:block w-px h-3 bg-ink-300" aria-hidden="true" />
              )}
              <span
                className="text-sm text-ink-900 font-sans font-medium"
                style={{ textShadow: "0 1px 8px rgba(250,247,240,0.7)" }}
              >
                <span className="font-bold text-ink-900">{stat.value}</span>{" "}
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative bottom line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent via-ink-100 to-transparent"
      />
    </section>
  );
}
