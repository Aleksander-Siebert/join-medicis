const features = [
  {
    label: "Skills",
    description: "Compétences spécialisées prêtes à charger dans Claude",
  },
  {
    label: "MCP",
    description: "Serveurs Model Context Protocol pour connecter vos outils",
  },
  {
    label: "Plugins",
    description: "Extensions pour personnaliser vos workflows",
  },
  {
    label: "Agent AI",
    description: "Agents autonomes qui exécutent des tâches Growth",
  },
  {
    label: "Automation",
    description: "Workflows n8n et Make orchestrés de bout en bout",
  },
];

export default function Mission() {
  return (
    <section className="relative py-24 px-6 border-t border-ink-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section header with ornamental divider */}
        <div className="flex items-center gap-6 mb-16 ornament-line">
          <span className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-medium shrink-0">
            La mission
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left — editorial intro */}
          <div>
            <p className="text-xs tracking-widest uppercase text-ink-500 mb-5 font-sans">
              Pourquoi Join Médicis
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-ink-900 leading-[1.05] mb-8">
              Une bibliothèque <em className="italic text-forest-900">gratuite</em> et open-source.
            </h2>
            <p className="text-base md:text-lg text-ink-700 leading-relaxed font-sans drop-cap">
              Join Médicis aide les marketers francophones à utiliser facilement
              des fonctionnalités IA avancées — Skills, MCP, Plugins, Agents IA
              et automatisations — sans avoir à passer des heures à lire de la
              documentation en anglais.
            </p>
          </div>

          {/* Right — feature pills */}
          <div className="lg:pt-12">
            <p className="text-xs tracking-widest uppercase text-ink-500 mb-6 font-sans">
              Ce que vous y trouverez
            </p>
            <ul className="flex flex-col divide-y divide-ink-100 border-y border-ink-100">
              {features.map((f, i) => (
                <li
                  key={f.label}
                  className="group py-5 flex items-baseline gap-5"
                >
                  <span className="text-xs text-ink-300 font-sans tabular-nums shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-serif text-2xl font-medium text-ink-900 group-hover:text-forest-900 transition-colors">
                        {f.label}
                      </span>
                      <span className="h-px flex-1 bg-ink-100 mb-1.5" aria-hidden="true" />
                    </div>
                    <p className="text-sm text-ink-700 font-sans leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
