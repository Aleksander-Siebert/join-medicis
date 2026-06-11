"use client";

import { useEffect, useRef, useState } from "react";

const BLOG_URL = "https://join-medicis.vercel.app/blog";
const HOVER_OPEN_DELAY = 220;
const HOVER_CLOSE_DELAY = 180;

type Feature = {
  label: string;
  description: string;
  details: string;
  cta: string;
};

const features: Feature[] = [
  {
    label: "Skills",
    description: "Compétences spécialisées prêtes à charger dans Claude",
    details:
      "Une Skill Claude est un fichier SKILL.md qui regroupe un prompt système, des instructions de rôle, des exemples et des règles métier. Vous chargez la Skill dans Claude (Pro, Teams, ou API) et elle s'active automatiquement quand le contexte le justifie. Joignez-y des templates, des frameworks d'analyse, ou des workflows Growth complets en quelques secondes.",
    cta: "Lire le guide complet sur les Skills",
  },
  {
    label: "MCP",
    description: "Serveurs Model Context Protocol pour connecter vos outils",
    details:
      "Le Model Context Protocol (MCP) est le standard ouvert qui permet à Claude de se connecter à vos outils : HubSpot, Notion, Linear, Sheets, votre base Postgres... Un serveur MCP expose des actions (lire, écrire, requêter) que Claude peut appeler en temps réel. La bibliothèque rassemble les serveurs MCP les plus utiles aux Growth Marketers.",
    cta: "Découvrir les serveurs MCP",
  },
  {
    label: "Plugins",
    description: "Extensions pour personnaliser vos workflows",
    details:
      "Les plugins étendent les capacités natives de Claude : connecteurs SaaS, automatisations conditionnelles, validation de données, exports formatés. Idéal pour transformer un assistant générique en outil sur-mesure pour votre stack Marketing (CRM, ESP, analytics, ads).",
    cta: "Voir les plugins disponibles",
  },
  {
    label: "Agent AI",
    description: "Agents autonomes qui exécutent des tâches Growth",
    details:
      "Un agent IA exécute des tâches complexes en plusieurs étapes sans supervision continue : enrichir une liste de leads, qualifier des comptes, lancer une campagne de cold email, monitorer des mentions de marque. Les agents combinent Skills + MCP + logique métier pour automatiser ce qui prenait des journées.",
    cta: "Construire votre premier agent",
  },
  {
    label: "Automation",
    description: "Workflows n8n et Make orchestrés de bout en bout",
    details:
      "Les workflows n8n et Make orchestrent des chaînes d'actions multi-outils : ingestion de données, scoring IA via Claude, déclenchement de séquences, reporting. Vous récupérez des recettes prêtes à importer et les adaptez à votre stack en quelques clics.",
    cta: "Parcourir les workflows",
  },
];

export default function Mission() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [openIndex]);

  useEffect(() => {
    return () => {
      if (openTimer.current) window.clearTimeout(openTimer.current);
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const scheduleOpen = (i: number) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    if (openIndex === i) return;
    if (openTimer.current) window.clearTimeout(openTimer.current);
    openTimer.current = window.setTimeout(() => setOpenIndex(i), HOVER_OPEN_DELAY);
  };

  const scheduleClose = () => {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), HOVER_CLOSE_DELAY);
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const open = openIndex !== null ? features[openIndex] : null;

  return (
    <section className="relative py-24 px-6 border-t border-ink-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-16 ornament-line">
          <span className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-semibold shrink-0">
            La mission
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <p className="text-xs tracking-widest uppercase text-ink-700 mb-5 font-sans font-medium">
              Pourquoi Join Médicis
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-ink-900 leading-[1.05] mb-8">
              Une bibliothèque <em className="italic text-forest-900">gratuite</em> et open-source.
            </h2>
            <p className="text-base md:text-lg text-ink-900 leading-relaxed font-sans drop-cap">
              Join Médicis aide les marketers francophones à utiliser facilement
              des fonctionnalités IA avancées — Skills, MCP, Plugins, Agents IA
              et automatisations — sans avoir à passer des heures à lire de la
              documentation en anglais.
            </p>
          </div>

          <div className="lg:pt-12">
            <p className="text-xs tracking-widest uppercase text-ink-700 mb-6 font-sans font-medium">
              Ce que vous y trouverez · cliquez pour en savoir plus
            </p>
            <ul className="flex flex-col divide-y divide-ink-100 border-y border-ink-100">
              {features.map((f, i) => (
                <li key={f.label}>
                  <button
                    type="button"
                    onMouseEnter={() => scheduleOpen(i)}
                    onMouseLeave={scheduleClose}
                    onFocus={() => scheduleOpen(i)}
                    onBlur={scheduleClose}
                    onClick={() => setOpenIndex(i)}
                    aria-haspopup="dialog"
                    aria-expanded={openIndex === i}
                    className="group w-full py-5 flex items-baseline gap-5 text-left hover:bg-cream-50 transition-colors -mx-3 px-3"
                  >
                    <span className="text-xs text-ink-500 font-sans tabular-nums shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="font-serif text-2xl font-medium text-ink-900 group-hover:text-forest-900 transition-colors">
                          {f.label}
                        </span>
                        <span
                          className="h-px flex-1 bg-ink-100 mb-1.5 group-hover:bg-forest-900/40 transition-colors"
                          aria-hidden="true"
                        />
                        <span
                          aria-hidden="true"
                          className="text-forest-900 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-lg"
                        >
                          →
                        </span>
                      </div>
                      <p className="text-sm text-ink-900 font-sans leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mission-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 animate-fadeUp"
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setOpenIndex(null)}
            className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
          />
          <div
            className="relative max-w-xl w-full bg-cream-50 border border-ink-100 shadow-2xl"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-semibold">
                  {String(features.indexOf(open) + 1).padStart(2, "0")} · La mission
                </span>
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  aria-label="Fermer"
                  className="w-8 h-8 inline-flex items-center justify-center rounded-full text-ink-700 hover:bg-cream-200 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <h3
                id="mission-modal-title"
                className="font-serif text-4xl font-medium text-ink-900 mb-4"
              >
                {open.label}
              </h3>
              <p className="text-sm text-ink-700 font-sans italic mb-6">
                {open.description}
              </p>
              <p className="text-base text-ink-900 font-sans leading-relaxed mb-8">
                {open.details}
              </p>

              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-forest-900 text-cream-50 text-sm tracking-wide hover:bg-forest-700 transition-colors font-sans"
              >
                {open.cta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
