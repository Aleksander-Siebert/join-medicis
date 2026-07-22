"use client";

import { useState } from "react";

type ToolId = "claude" | "chatgpt" | "gemini" | "mistral";

type Tool = {
  id: ToolId;
  label: string;
  badge: string;
  tone: "native" | "compat";
  answer: string;
  how: string;
};

const TOOLS: Tool[] = [
  {
    id: "claude",
    label: "Claude",
    badge: "Support natif",
    tone: "native",
    answer:
      "Oui, c'est l'environnement de référence. Claude gère les Skills nativement, sans bricolage.",
    how: "Réglages → Capacités → ajoutez le Skill. Il s'active automatiquement sur toutes vos conversations.",
  },
  {
    id: "chatgpt",
    label: "ChatGPT",
    badge: "Compatible · via projet",
    tone: "compat",
    answer:
      "Oui, dans la majorité des cas. Le Skill fonctionne, mais s'applique à un projet précis et non à tout ChatGPT.",
    how: "Créez un Projet ou un Custom GPT, puis ajoutez le fichier en pièce jointe ou collez-le dans les instructions.",
  },
  {
    id: "gemini",
    label: "Gemini",
    badge: "Compatible · via Gem",
    tone: "compat",
    answer:
      "Oui, via les Gems. Les résultats peuvent légèrement différer de Claude sur les Skills les plus structurés.",
    how: "Créez un Gem personnalisé, puis collez le contenu du fichier dans ses instructions.",
  },
  {
    id: "mistral",
    label: "Mistral",
    badge: "Compatible · via Vibe",
    tone: "compat",
    answer:
      "Oui, avec Vibe (le nouveau nom de l'assistant de Mistral, ex-« Le Chat »). Idéal si vous cherchez une solution souveraine.",
    how: "Ouvrez votre Espace de travail, puis ajoutez le fichier à la bibliothèque de documents.",
  },
];

export default function SkillsIntro() {
  const [active, setActive] = useState<ToolId>("claude");
  const current = TOOLS.find((t) => t.id === active) ?? TOOLS[0];

  return (
    <section className="px-6 py-16 border-b border-ink-100">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* ---------- C'est quoi un Skill ? ---------- */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-semibold mb-3">
            Pour bien commencer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink-900 mb-5">
            C&rsquo;est quoi un Skill ?
          </h2>
          <div className="space-y-4 text-ink-700 font-sans leading-relaxed">
            <p>
              Un Skill est un <strong className="font-semibold text-ink-900">fichier</strong> qui
              contient un mode d&rsquo;emploi complet pour votre IA : son rôle, sa méthode, ses
              exemples et ses règles. Vous le chargez une fois, et l&rsquo;IA cesse de répondre de
              façon générique pour travailler comme une spécialiste du sujet.
            </p>
            <p>
              La différence avec un prompt trouvé sur internet ? Un prompt, c&rsquo;est deux
              phrases jetées dans une conversation. Un Skill est structuré, testé sur des cas
              réels, versionné, et vous n&rsquo;avez pas à le réécrire à chaque fois.
            </p>
            <p className="text-sm text-ink-500">
              Concrètement : vous téléchargez un fichier, vous le déposez dans votre IA, et
              c&rsquo;est prêt. Aucune ligne de code, aucune clé API.
            </p>
          </div>
        </div>

        {/* ---------- Compatibilité par outil ---------- */}
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-ink-900 mb-5">
            Puis-je utiliser les Skills avec mon IA ?
          </h2>

          {/* Onglets outils */}
          <div className="flex flex-wrap gap-2 mb-5">
            {TOOLS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-4 py-2 text-sm font-sans rounded-lg transition-colors ${
                  active === t.id
                    ? "bg-forest-900 text-cream-50"
                    : "bg-cream-100 text-ink-500 border border-ink-100 hover:text-ink-700"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Panneau */}
          <div className="bg-cream-50 border border-ink-100 rounded-[18px] p-6">
            <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
              <p className="text-sm font-medium text-ink-900 font-sans">
                Avec {current.label}
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

            <p className="text-sm text-ink-700 font-sans leading-relaxed mb-4">
              {current.answer}
            </p>

            <p className="text-sm text-ink-500 font-sans leading-relaxed flex gap-2 pt-4 border-t border-ink-100">
              <span aria-hidden="true" className="text-forest-700 shrink-0">
                ↳
              </span>
              {current.how}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
