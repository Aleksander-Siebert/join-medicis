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
      {/* Background image — Monet "Vétheuil", full opacity */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/monet-vetheuil.webp')" }}
      />
      {/* Radial halo behind text — keeps painting visible on edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(250,247,240,0.85) 0%, rgba(250,247,240,0.55) 45%, rgba(250,247,240,0) 80%)",
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

      {/* Decorative SVG — thin tangled line, editorial feel */}
      <div
        aria-hidden="true"
        className="absolute top-16 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#1A1916" strokeWidth="0.8">
          <path d="M30 5 C40 10, 50 20, 45 30 C40 40, 20 45, 15 35 C10 25, 20 10, 30 15 C40 20, 50 30, 42 38 C34 46, 18 42, 14 32 C10 22, 22 8, 32 12" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Overline label */}
        <p className="text-xs tracking-widest uppercase text-ink-700 mb-10 font-sans font-medium">
          Bibliothèque open-source · Francophone · Growth Marketing
        </p>

        {/* Heading — Solomei-style serif, large and light */}
        <h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-ink-900 leading-[1.1] mb-6"
          style={{ textShadow: "0 1px 24px rgba(250,247,240,0.7)" }}
        >
          La bibliothèque IA & Growth
          <br />
          <em className="italic text-ink-800">pour les marketeurs francophones</em>
        </h1>

        {/* Tagline */}
        <p
          className="text-base md:text-lg text-ink-700 max-w-2xl mx-auto leading-relaxed mb-14 font-sans"
          style={{ textShadow: "0 1px 12px rgba(250,247,240,0.8)" }}
        >
          Skills Claude, projets prêts à l&rsquo;emploi, guides MCP, workflows n8n —
          tout en français, tout gratuit, tout open-source.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/skills"
            className="px-8 py-3.5 bg-forest-900 text-cream-50 text-sm tracking-wide hover:bg-forest-700 transition-colors font-sans"
          >
            Explorer les Skills →
          </Link>
          <a
            href="https://github.com/aleksander-siebert"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-ink-200 text-ink-700 text-sm tracking-wide hover:border-ink-400 hover:text-ink-900 transition-colors flex items-center gap-2.5 font-sans"
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
                <span className="hidden sm:block w-px h-3 bg-ink-100" aria-hidden="true" />
              )}
              <span className="text-sm text-ink-500 font-sans">
                <span className="font-medium text-ink-700">{stat.value}</span>{" "}
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
