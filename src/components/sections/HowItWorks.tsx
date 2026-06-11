const steps = [
  {
    roman: "I",
    arabic: "01",
    title: "Parcourir",
    description: "Trouvez des Skills, projets et guides pour votre domaine — marketing, growth, automation.",
    tag: null,
  },
  {
    roman: "II",
    arabic: "02",
    title: "Télécharger",
    description: "Obtenez les fichiers instantanément. Aucune inscription, aucun paywall.",
    tag: "SKILL.md",
  },
  {
    roman: "III",
    arabic: "03",
    title: "Utiliser",
    description: "Chargez la ressource dans Claude (ou n8n, Make, etc.) et démarrez.",
    tag: "Claude",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 px-6 border-t border-ink-100 bg-cream-50 overflow-hidden">
      {/* Subtle dot grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(14,63,45,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-forest-900 mb-5 font-sans font-medium">
            Comment ça marche
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink-900 leading-[1.05] mb-4 text-balance">
            De la découverte à l&rsquo;automatisation
            <br />
            <em className="italic text-forest-900">en quelques minutes.</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-px bg-ink-100">
          {/* Connecting line (decorative, behind cards) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-forest-900/30 to-transparent"
          />

          {steps.map((step) => (
            <article
              key={step.roman}
              className="group relative bg-cream-100 p-8 md:p-10 hover:bg-cream-50 transition-colors"
            >
              {/* Roman numeral badge */}
              <div className="relative z-10 mb-6 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest-900 text-cream-50 font-serif text-xl group-hover:scale-110 transition-transform">
                  {step.roman}
                </span>
                <span className="text-xs tracking-widest text-ink-300 font-sans tabular-nums">
                  {step.arabic}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-light text-ink-900 mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-ink-700 leading-relaxed font-sans mb-6">
                {step.description}
              </p>

              {step.tag && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest-900/5 border border-forest-900/15 text-forest-900 text-xs font-sans tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-900" aria-hidden="true" />
                  {step.tag}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
