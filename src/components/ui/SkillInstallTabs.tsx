"use client";

import { useState } from "react";
import type { Skill, LLMSupport } from "@/types";

type ToolId = "claude" | "chatgpt" | "gemini" | "mistral";

type Tool = {
  id: ToolId;
  label: string;
  badge: string;
  tone: "native" | "compat";
  steps: string[];
  note: string;
};

const TOOLS: Tool[] = [
  {
    id: "claude",
    label: "Claude",
    badge: "Support natif",
    tone: "native",
    steps: [
      "Connectez-vous à Claude",
      "Ouvrez Réglages → Capacités",
      "Ajoutez le Skill",
    ],
    note: "Une fois ajouté, le Skill est actif automatiquement sur toutes vos conversations.",
  },
  {
    id: "chatgpt",
    label: "ChatGPT",
    badge: "Compatible · via projet",
    tone: "compat",
    steps: [
      "Connectez-vous à ChatGPT",
      "Créez un Projet ou un Custom GPT",
      "Ajoutez le fichier en pièce jointe ou en instructions",
    ],
    note: "S'applique uniquement à ce projet / GPT — pas à l'ensemble de ChatGPT.",
  },
  {
    id: "gemini",
    label: "Gemini",
    badge: "Compatible · via Gem",
    tone: "compat",
    steps: [
      "Connectez-vous à Gemini",
      "Créez un Gem personnalisé",
      "Collez le contenu du fichier dans les instructions",
    ],
    note: "Le Gem applique le Skill à chaque conversation lancée depuis lui.",
  },
  {
    id: "mistral",
    label: "Mistral",
    badge: "Compatible · via Vibe",
    tone: "compat",
    steps: [
      "Connectez-vous à Vibe (Mistral)",
      "Ouvrez votre Espace de travail",
      "Ajoutez le fichier à la bibliothèque de documents",
    ],
    note: "Vibe est le nouveau nom de l'assistant de Mistral (ex-« Le Chat »), depuis fin mai 2026.",
  },
];

export default function SkillInstallTabs({ skill }: { skill: Skill }) {
  // On n'affiche que les outils réellement compatibles.
  const support: Record<ToolId, LLMSupport | undefined> = {
    claude: skill.llm.claude,
    chatgpt: skill.llm.chatgpt,
    gemini: skill.llm.gemini,
    mistral: skill.llm.mistral,
  };
  const tools = TOOLS.filter((t) => support[t.id] && support[t.id] !== "none");
  const [active, setActive] = useState<ToolId>(tools[0]?.id ?? "claude");
  const current = tools.find((t) => t.id === active) ?? tools[0];

  if (!current) return null;

  return (
    <section className="px-6 py-16 border-b border-ink-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
          Prise en main
        </p>
        <h2 className="font-serif text-3xl font-light text-ink-900 mb-8">
          Comment l&rsquo;installer, selon votre outil
        </h2>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {tools.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`shrink-0 px-4 py-2 text-sm font-sans rounded-lg transition-colors ${
                active === t.id
                  ? "bg-forest-900 text-cream-50"
                  : "bg-cream-100 text-ink-500 border border-ink-100 hover:text-ink-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="bg-cream-100 border border-ink-100 rounded-[18px] p-6 md:p-8">
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <p className="text-sm font-medium text-ink-900 font-sans">
              Installation via {current.label}
            </p>
            <span
              className={`text-[11px] tracking-wide px-2.5 py-1 rounded-full font-sans font-medium ${
                current.tone === "native"
                  ? "bg-forest-50 text-forest-700"
                  : "bg-[#F0EBDC] text-[#8C7A4A]"
              }`}
            >
              {current.badge}
            </span>
          </div>

          {/* Steps */}
          <ol className="grid sm:grid-cols-3 gap-6">
            {current.steps.map((step, i) => (
              <li key={i} className="flex sm:flex-col items-start gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-forest-900 text-cream-50 flex items-center justify-center text-xs font-sans font-medium">
                  {i + 1}
                </span>
                <p className="text-sm text-ink-700 font-sans leading-snug">{step}</p>
              </li>
            ))}
          </ol>

          {/* Note */}
          <p className="mt-8 pt-6 border-t border-ink-100 text-sm text-ink-500 font-sans leading-relaxed flex gap-2">
            <span aria-hidden="true" className="text-forest-700">↳</span>
            {current.note}
          </p>
        </div>
      </div>
    </section>
  );
}
