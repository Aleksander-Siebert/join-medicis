"use client";

import { useState } from "react";

function BrowseMockup({ active = false }: { active?: boolean }) {
  return (
    <svg
      viewBox="0 0 240 160"
      className="w-full h-auto"
      role="img"
      aria-label="Mockup d'une interface de recherche"
    >
      <rect
        x="4"
        y="4"
        width="232"
        height="152"
        rx="10"
        fill="#FEFCF8"
        stroke="#0F0E0C"
        strokeWidth="1.2"
      />
      {/* Search bar */}
      <rect x="18" y="20" width="204" height="18" rx="9" fill="#F2EDE4" />
      <circle cx="32" cy="29" r="3.5" fill="none" stroke="#525049" strokeWidth="1.2" />
      <line x1="34.5" y1="31.5" x2="38" y2="35" stroke="#525049" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="48" y1="29" x2="120" y2="29" stroke="#8E8C85" strokeWidth="1.2" strokeLinecap="round" />
      {/* Grid of cards */}
      <g>
        <rect x="18" y="52" width="96" height="42" rx="6" fill="#FFFFFF" stroke="#D4D2CC" strokeWidth="1" />
        <rect x="126" y="52" width="96" height="42" rx="6" fill="#FFFFFF" stroke="#D4D2CC" strokeWidth="1" />
        <rect
          x="18"
          y="102"
          width="96"
          height="42"
          rx="6"
          fill={active ? "#E8F1ED" : "#FFFFFF"}
          stroke={active ? "#0E3F2D" : "#D4D2CC"}
          strokeWidth={active ? "1.5" : "1"}
        />
        <rect x="126" y="102" width="96" height="42" rx="6" fill="#FFFFFF" stroke="#D4D2CC" strokeWidth="1" />
      </g>
    </svg>
  );
}

function DownloadMockup({ active = false }: { active?: boolean }) {
  return (
    <svg
      viewBox="0 0 240 160"
      className="w-full h-auto"
      role="img"
      aria-label="Mockup de téléchargement de fichier SKILL.md"
    >
      <rect
        x="6"
        y="6"
        width="228"
        height="148"
        rx="10"
        fill="#FEFCF8"
        stroke={active ? "#0E3F2D" : "#0F0E0C"}
        strokeWidth="1.2"
        strokeDasharray="5 4"
      />
      <path d="M 22 26 L 22 22 L 26 22" stroke="#0E3F2D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 214 22 L 218 22 L 218 26" stroke="#0E3F2D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 22 134 L 22 138 L 26 138" stroke="#0E3F2D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 218 134 L 218 138 L 214 138" stroke="#0E3F2D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="100" y="46" width="40" height="56" rx="3" fill="#FFFFFF" stroke="#0F0E0C" strokeWidth="1.4" />
      <path d="M 132 46 L 132 54 L 140 54" stroke="#0F0E0C" strokeWidth="1.4" fill="none" />
      <line x1="120" y1="62" x2="120" y2="82" stroke="#0E3F2D" strokeWidth="2" strokeLinecap="round" />
      <path d="M 113 76 L 120 84 L 127 76" stroke="#0E3F2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="92" y="112" width="56" height="14" rx="2" fill="#0F0E0C" />
      <text
        x="120"
        y="121.5"
        textAnchor="middle"
        fontSize="7"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="600"
        fill="#FEFCF8"
        letterSpacing="0.5"
      >
        SKILL.md
      </text>
    </svg>
  );
}

function UseMockup({ active = false }: { active?: boolean }) {
  return (
    <svg
      viewBox="0 0 240 160"
      className="w-full h-auto"
      role="img"
      aria-label="Mockup d'une interface de chat Claude"
    >
      <rect x="4" y="4" width="232" height="152" rx="10" fill="#FEFCF8" stroke="#0F0E0C" strokeWidth="1.2" />
      <circle cx="18" cy="18" r="3" fill="#D4B681" />
      <circle cx="28" cy="18" r="3" fill="#E8E1D5" />
      <circle cx="38" cy="18" r="3" fill="#E8E1D5" />
      <circle cx="24" cy="48" r="6" fill="#0E3F2D" />
      <path d="M 21 48 L 23 50 L 27 46" stroke="#FEFCF8" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="40" y1="44" x2="180" y2="44" stroke="#8E8C85" strokeWidth="1" strokeLinecap="round" />
      <line x1="40" y1="50" x2="150" y2="50" stroke="#8E8C85" strokeWidth="1" strokeLinecap="round" />
      <rect
        x="50"
        y="70"
        width="172"
        height="34"
        rx="6"
        fill={active ? "#E8F1ED" : "#F2EDE4"}
        stroke={active ? "#0E3F2D" : "transparent"}
        strokeWidth={active ? "1.2" : "0"}
        strokeDasharray={active ? "4 3" : ""}
      />
      <line x1="60" y1="82" x2="200" y2="82" stroke="#0F0E0C" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="60" y1="90" x2="170" y2="90" stroke="#0F0E0C" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="24" cy="128" r="6" fill="#0E3F2D" />
      <path d="M 21 128 L 23 130 L 27 126" stroke="#FEFCF8" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="44" cy="128" r="2" fill="#0E3F2D">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="52" cy="128" r="2" fill="#0E3F2D">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="128" r="2" fill="#0E3F2D">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin="0.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

type Step = {
  arabic: string;
  title: string;
  description: string;
  Mockup: (props: { active?: boolean }) => React.ReactElement;
};

const steps: Step[] = [
  {
    arabic: "01",
    title: "Parcourir",
    description: "Trouvez des Skills pour votre domaine",
    Mockup: BrowseMockup,
  },
  {
    arabic: "02",
    title: "Télécharger",
    description: "Obtenez les fichiers instantanément",
    Mockup: DownloadMockup,
  },
  {
    arabic: "03",
    title: "Utiliser",
    description: "Chargez dans Claude et commencez",
    Mockup: UseMockup,
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState<number | null>(0);

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
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-ink-900 leading-[1.05] mb-3">
            Comment ça marche
          </h2>
          <p className="font-serif italic text-lg text-ink-700">
            De la découverte à l&rsquo;automatisation en quelques minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Dashed connecting line under the badges */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-9 left-[15%] right-[15%]"
            style={{ borderTop: "1px dashed rgba(14,63,45,0.35)" }}
          />

          {steps.map((step, idx) => {
            const isActive = active === idx;
            const Mockup = step.Mockup;
            return (
              <button
                key={step.arabic}
                type="button"
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                className="group relative flex flex-col items-center text-center focus:outline-none"
              >
                {/* Numbered badge */}
                <span
                  className={`relative z-10 mb-5 inline-flex items-center justify-center w-[72px] h-[72px] rounded-2xl bg-cream-50 border-2 transition-all ${
                    isActive
                      ? "border-forest-900 shadow-[0_8px_28px_-12px_rgba(14,63,45,0.45)] scale-105"
                      : "border-ink-200 group-hover:border-ink-700"
                  }`}
                >
                  <span className="font-serif text-2xl font-medium text-ink-900 tabular-nums">
                    {step.arabic}
                  </span>
                </span>

                <h3 className="font-serif text-2xl uppercase tracking-wider text-ink-900 font-medium mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-700 font-sans leading-relaxed mb-6 max-w-[26ch] mx-auto">
                  {step.description}
                </p>

                {/* Mockup illustration */}
                <div
                  className={`w-full max-w-[300px] mx-auto transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-75 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
                  }`}
                >
                  <Mockup active={isActive} />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
