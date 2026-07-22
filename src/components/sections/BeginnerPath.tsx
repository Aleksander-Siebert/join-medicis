import Link from "next/link";

/* Mêmes accents colorés que les tuiles du méga-menu / CategoryGrid. */
const ACCENTS = [
  { bg: "#E8F1ED", fg: "#0E3F2D" }, // forest
  { bg: "#F5E8D4", fg: "#8E6A2A" }, // gold
  { bg: "#E8F0F8", fg: "#1E3A5F" }, // blue
  { bg: "#F5D9C2", fg: "#8B4A1A" }, // terracotta
] as const;

type Step = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Comment utiliser l'IA dans le marketing ?",
    description:
      "Les cas d'usage concrets de l'IA pour le Growth et le marketing, expliqués simplement et sans jargon.",
    href: "/blog/collections/ai-growth-marketing",
    icon: (
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" strokeLinejoin="round" />
    ),
  },
  {
    title: "Commencez votre première expérience",
    description:
      "Lancez votre premier projet IA en quelques minutes grâce à des Skills prêts à l'emploi.",
    href: "/ressources/skills",
    icon: (
      <>
        <path d="M5 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Développez vos premiers workflows",
    description:
      "Automatisez vos tâches marketing avec des workflows IA connectés à vos outils, de bout en bout.",
    href: "/blog/collections/agents-automation",
    icon: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M8.5 6H15a3 3 0 013 3v6.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "En savoir plus sur l'IA",
    description:
      "Articles, guides et actualités pour approfondir vos connaissances et rester à jour.",
    href: "/blog",
    icon: (
      <>
        <path d="M4 5h11a2 2 0 012 2v12a2.5 2.5 0 00-2.5-2.5H4V5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 5v11.5" strokeLinecap="round" />
      </>
    ),
  },
];

export default function BeginnerPath() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-semibold mb-4">
            Premiers pas
          </p>
          <h2 className="font-sans tracking-tight text-4xl md:text-5xl font-bold text-ink-900 leading-[1.05] mb-4">
            Vous êtes débutant avec l&rsquo;IA ?
          </h2>
          <p className="text-base md:text-lg text-ink-700 max-w-2xl mx-auto leading-relaxed font-sans">
            Tout ce qu&rsquo;il faut pour commencer, étape par étape.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <Link
                key={step.title}
                href={step.href}
                className="group flex flex-col items-center text-center bg-cream-50 border border-ink-100 hover:border-forest-900/30 hover:bg-cream-100 transition-all p-7 rounded-[25px]"
              >
                {/* Tuile icône colorée, centrée en haut */}
                <span
                  className="inline-flex items-center justify-center w-14 h-14 rounded-[16px] mb-6"
                  style={{ backgroundColor: accent.bg, color: accent.fg }}
                  aria-hidden="true"
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {step.icon}
                  </svg>
                </span>

                <h3 className="font-serif text-xl font-medium text-ink-900 leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed font-sans flex-1">
                  {step.description}
                </p>

                <span
                  className="mt-6 inline-flex items-center gap-2 text-sm font-sans font-semibold transition-all"
                  style={{ color: accent.fg }}
                >
                  Découvrir
                  <svg
                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
