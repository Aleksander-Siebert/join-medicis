"use client";

const inspirations = [
  {
    name: "Solomei",
    url: "https://www.solomei.ai/",
    reason:
      "Le style Renaissance et la beauté d'utiliser l'IA dans un nouveau contexte éditorial.",
    tilt: -1.6,
    tapeColor: "#F5D9C2",
  },
  {
    name: "Lawve",
    url: "https://lawve.ai/fr",
    reason:
      "L'idée de créer un écosystème open-source et accessible à tout le monde.",
    tilt: 1.2,
    tapeColor: "#E8F1ED",
  },
  {
    name: "Anis Ayari",
    url: "https://anisayari.com/fr",
    reason:
      "Ses points de vue et son expertise sur l'IA qui me font apprendre des choses nouvelles à chaque post.",
    tilt: -1.1,
    tapeColor: "#F2E8F0",
  },
  {
    name: "Silicon Carne",
    url: "https://siliconcarne.substack.com/",
    reason:
      "Carlos Diaz est le GOAT — on apprend plein de choses avec son ton tranché et son angle franco-américain.",
    tilt: 1.4,
    tapeColor: "#F5E8D4",
  },
  {
    name: "Caroline Mignaux",
    url: "https://www.carolinemignaux.com/",
    reason:
      "L'inspiration absolue pour le personal branding et la cohérence éditoriale sur la durée.",
    tilt: -1.3,
    tapeColor: "#F2E5D8",
  },
  {
    name: "Mike Oss",
    url: "https://mikeoss.com/",
    reason:
      "Pour le côté open-source et la démonstration que n'importe qui peut faire avancer les choses à sa façon.",
    tilt: 1.5,
    tapeColor: "#E8EBEF",
  },
];

export default function Inspirations() {
  return (
    <section className="py-24 px-6 md:px-10 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <p className="font-serif italic text-2xl md:text-3xl text-ink-900 mb-10 flex items-center gap-3">
          Mes inspirations
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </p>

        <div
          className="flex gap-5 overflow-x-auto pb-8 -mx-6 px-6 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {inspirations.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative shrink-0 w-[280px] snap-start"
              style={{ transform: `rotate(${item.tilt}deg)` }}
              aria-label={`${item.name} — ${item.reason}`}
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
                className="relative bg-cream-50 border border-ink-100 rounded-[18px] p-7 pt-9 h-full shadow-sm group-hover:shadow-md transition-shadow"
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

        <p className="mt-6 text-xs text-ink-500 font-sans italic">
          Faites défiler horizontalement pour découvrir les autres.
        </p>
      </div>
    </section>
  );
}
