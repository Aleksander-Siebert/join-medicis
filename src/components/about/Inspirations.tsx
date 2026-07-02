const inspirations = [
  {
    name: "Solomei",
    url: "https://www.solomei.ai/",
    reason:
      "L'inspiration de la Renaissance italienne. C'est la démonstration qu'on peut utiliser l'IA dans un contexte à la fois créatif et technique.",
    tilt: -1.6,
    tapeColor: "#F5D9C2",
  },
  {
    name: "Lawve",
    url: "https://lawve.ai/fr",
    reason:
      "Sans eux, Join Médicis n'existerait pas. Anciennement Lawvable, c'est une bibliothèque IA gratuite destinée aux professionnels du droit. Si vous passez par là : merci.",
    tilt: 1.2,
    tapeColor: "#E8F1ED",
  },
  {
    name: "Anis Ayari",
    url: "https://anisayari.com/fr",
    reason:
      "Un créateur avec un angle précis et concret sur l'IA. Son expertise partagée en vidéo m'apprend de nouvelles choses à chaque fois. Si vous lisez ceci, Anis : je serais ravi d'échanger et d'avoir vos retours.",
    tilt: -1.1,
    tapeColor: "#F2E8F0",
  },
  {
    name: "Silicon Carne",
    url: "https://siliconcarne.substack.com/",
    reason:
      "J'avais besoin de piment. Carlos Diaz a apporté le style et la vision qui manquaient au projet pour le rendre actionnable. Maintenant, j'ai les yeux qui piquent un peu.",
    tilt: 1.4,
    tapeColor: "#F5E8D4",
  },
  {
    name: "The Roum",
    url: "https://www.youtube.com/@TheRoum",
    reason:
      "Le talk-show sur l'IA de ce début d'année 2026. Leur approche est claire : décortiquer un métier et tester des solutions IA en direct. Je m'en inspire dans mon approche.",
    tilt: -1.3,
    tapeColor: "#F2E5D8",
  },
  {
    name: "Mike OSS",
    url: "https://mikeoss.com/",
    reason:
      "La preuve que chacun peut faire avancer les choses à sa façon. Si vous ne le connaissez pas, vous passez à côté du combat de David contre Goliath, version IA, dans le secteur juridique.",
    tilt: 1.5,
    tapeColor: "#E8EBEF",
  },
];

export default function Inspirations() {
  return (
    <section className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="font-sans font-bold tracking-tight text-2xl md:text-3xl text-ink-900 mb-12 flex items-center gap-3">
          Mes inspirations
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {inspirations.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              style={{ transform: `rotate(${item.tilt}deg)` }}
              aria-label={`${item.name}. ${item.reason}`}
            >
              {/* Tape on top */}
              <span
                aria-hidden="true"
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 opacity-80 z-10"
                style={{
                  background: item.tapeColor,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                }}
              />

              <div
                className="relative bg-cream-50 border border-ink-100 rounded-[18px] p-7 pt-9 h-full group-hover:translate-y-[-2px] transition-transform"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.05), 0 8px 24px -8px rgba(0,0,0,0.08)",
                }}
              >
                <h3 className="font-sans font-bold text-xl tracking-wider uppercase text-ink-900 mb-4">
                  {item.name}
                </h3>
                <p className="text-sm text-ink-700 font-sans leading-relaxed mb-6">
                  {item.reason}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-forest-900 font-sans font-medium group-hover:gap-2.5 transition-all">
                  Visiter
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 max-w-2xl space-y-4 text-ink-700 font-sans leading-relaxed">
          <p>
            J&rsquo;ai d&rsquo;autres sources d&rsquo;inspiration, mais je garde ce jardin
            secret. Vous en découvrirez davantage en explorant le site.
          </p>
          <p>
            En parlant d&rsquo;exploration : j&rsquo;ai caché quelques easter eggs un peu
            partout. Petit indice : cherchez du côté de l&rsquo;espace qui explique le
            vocabulaire technique.
          </p>
        </div>
      </div>
    </section>
  );
}
