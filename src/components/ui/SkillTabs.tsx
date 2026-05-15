"use client";

import { useState } from "react";
import { Skill } from "@/types";

const TABS = [
  { id: "about", label: "À propos" },
  { id: "content", label: "Contenu" },
  { id: "demo", label: "Démo" },
  { id: "try", label: "Essayer", badge: "V1.5" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function SkillTabs({ skill }: { skill: Skill }) {
  const [active, setActive] = useState<TabId>("about");

  return (
    <div className="px-6 py-0">
      <div className="max-w-5xl mx-auto">
        {/* Tab header */}
        <div className="flex border-b border-ink-100">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm transition-colors border-b-2 -mb-px font-sans ${
                active === tab.id
                  ? "border-forest-900 text-forest-900"
                  : "border-transparent text-ink-500 hover:text-ink-700"
              }`}
            >
              {tab.label}
              {"badge" in tab && tab.badge && (
                <span className="text-xs bg-cream-200 text-ink-300 px-1.5 py-0.5">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="py-10">
          {active === "about" && <AboutTab skill={skill} />}
          {active === "content" && <ContentTab skill={skill} />}
          {active === "demo" && <DemoTab skill={skill} />}
          {active === "try" && <TryTab />}
        </div>
      </div>
    </div>
  );
}

function AboutTab({ skill }: { skill: Skill }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
          Problème résolu
        </p>
        <h3 className="font-serif text-2xl font-light text-ink-900 mb-4">
          Ce que ce Skill change
        </h3>
        <p className="text-ink-500 leading-relaxed font-sans text-sm">
          Placeholder — Ce Skill résout le problème de la génération manuelle
          de {skill.name.toLowerCase()}. Les marketeurs passent en moyenne
          plusieurs heures par semaine sur cette tâche, sans possibilité de
          systématisation ni de reproductibilité à l'échelle.
        </p>
        <p className="text-ink-500 leading-relaxed font-sans text-sm mt-4">
          Avec ce Skill configuré dans un Projet Claude, chaque demande
          produit un résultat structuré, calibré pour le marché français, en
          moins de 3 minutes.
        </p>
      </div>

      <div>
        <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
          Mode Débutant — 3 étapes
        </p>
        <div className="space-y-6">
          {[
            {
              step: "01",
              label: "Télécharger",
              desc: "Cliquez sur « Télécharger le Skill » pour obtenir le fichier .md",
            },
            {
              step: "02",
              label: "Configurer",
              desc: "Ouvrez claude.ai → Nouveau Projet → Instructions du projet → Collez le contenu",
            },
            {
              step: "03",
              label: "Utiliser",
              desc: "Commencez à converser. Le Skill s'active automatiquement.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-5">
              <span className="font-serif text-4xl font-light text-ink-100 leading-none shrink-0">
                {item.step}
              </span>
              <div>
                <p className="text-sm font-medium text-ink-700 mb-1 font-sans">{item.label}</p>
                <p className="text-sm text-ink-500 font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentTab({ skill }: { skill: Skill }) {
  return (
    <div>
      <div className="bg-ink-900 text-cream-100 p-8 font-mono text-sm leading-relaxed overflow-x-auto">
        <p className="text-ink-300 mb-1"># {skill.name} — v{skill.version}</p>
        <p className="text-ink-500 mb-6">
          # Skill Join Médicis · Catégorie : {skill.category}
        </p>
        <p className="text-cream-200 mb-1">## §0 — Identité et paradigme</p>
        <p className="text-ink-500 mb-5">
          Tu es un expert en {skill.category} pour le marché B2B français.
          Tu maîtrises les codes culturels et les standards professionnels
          hexagonaux. Chaque output que tu produis est directement actionnable,
          calibré pour être envoyé ou publié sans modification majeure.
        </p>
        <p className="text-cream-200 mb-1">## §1 — Déclenchement</p>
        <p className="text-ink-500 mb-5">
          Ce Skill s'active automatiquement sur toute demande liée à{" "}
          {skill.name.toLowerCase()}. Il prend le relais dès que tu détectes
          une intention de [placeholder]...
        </p>
        <p className="text-cream-200 mb-1">## §2 — Instructions principales</p>
        <p className="text-ink-500 mb-5">
          [Contenu complet disponible en téléchargement — le fichier .md
          contient l'intégralité des instructions, variantes et exemples]
        </p>
        <p className="text-cream-200 mb-1">## §3 — Format de sortie</p>
        <p className="text-ink-500">
          Output structuré, en français natif, adapté au marché FR.
          Pas de bullshit, pas de remplissage — seulement ce qui est
          directement utilisable.
        </p>
      </div>
      <p className="text-xs text-ink-300 mt-4 font-sans">
        Le fichier complet est disponible en téléchargement ou sur GitHub.
      </p>
    </div>
  );
}

function DemoTab({ skill }: { skill: Skill }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-100">
        <div className="bg-cream-200 p-8">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
            Input exemple
          </p>
          <p className="text-sm text-ink-600 leading-relaxed font-sans italic">
            &ldquo;[Placeholder] — Exemple d&rsquo;une demande typique pour ce
            Skill. Téléchargez le Skill et testez avec vos propres cas
            d&rsquo;usage pour voir les résultats réels.&rdquo;
          </p>
        </div>
        <div className="bg-forest-900 p-8">
          <p className="text-xs tracking-widest uppercase text-forest-600 mb-4 font-sans">
            Output Claude
          </p>
          <p className="text-sm text-cream-200 leading-relaxed font-sans">
            [Placeholder] — L&rsquo;output structuré apparaîtra ici. Déployez
            le Skill dans un Projet Claude pour voir les résultats sur vos
            propres données.
          </p>
        </div>
      </div>
      <p className="text-xs text-ink-300 font-sans">
        Résultat observé sur 3+ cas d&rsquo;usage : {skill.resultMetric ?? skill.timeSaved}
      </p>
    </div>
  );
}

function TryTab() {
  return (
    <div className="bg-cream-200 py-20 text-center">
      <p className="font-serif text-3xl font-light text-ink-700 mb-3">
        Sandbox Interactive
      </p>
      <p className="text-sm text-ink-500 mb-8 font-sans max-w-sm mx-auto">
        Testez ce Skill directement dans le navigateur avec votre clé API
        Claude. Disponible dans la version 1.5.
      </p>
      <span className="inline-block px-5 py-2.5 bg-cream-300 text-ink-300 text-sm font-sans">
        Disponible en V1.5 — Bientôt
      </span>
    </div>
  );
}
