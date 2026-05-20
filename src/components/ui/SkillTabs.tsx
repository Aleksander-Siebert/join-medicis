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
  const downloadUrl = `/skills/${skill.slug}.md`;
  return (
    <div className="space-y-6">
      {/* File explorer style header */}
      <div className="border border-ink-100 bg-cream-100">
        <div className="px-4 py-3 border-b border-ink-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-ink-500 font-sans">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="font-mono">{skill.slug}/</span>
          </div>
          <a
            href={downloadUrl}
            download={`${skill.slug}.md`}
            className="text-xs text-forest-700 hover:text-forest-900 transition-colors font-sans"
          >
            Télécharger tout →
          </a>
        </div>
        <ul className="divide-y divide-ink-100 text-sm font-sans">
          <li className="px-4 py-3 flex items-center justify-between hover:bg-cream-200 transition-colors">
            <span className="flex items-center gap-2.5 text-ink-700">
              <svg className="w-4 h-4 text-ink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-mono">skill.md</span>
              <span className="text-xs text-ink-300">— v{skill.version}</span>
            </span>
            <a
              href={downloadUrl}
              download={`${skill.slug}.md`}
              className="text-xs text-ink-400 hover:text-forest-900 transition-colors"
            >
              ↓
            </a>
          </li>
          <li className="px-4 py-3 flex items-center justify-between text-ink-300">
            <span className="flex items-center gap-2.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span className="font-mono">references/</span>
              <span className="text-xs">— documents sources</span>
            </span>
            <span className="text-xs">bientôt</span>
          </li>
        </ul>
      </div>

      {/* File preview */}
      <div className="border border-ink-100">
        <div className="px-4 py-2 border-b border-ink-100 bg-cream-200 text-xs text-ink-500 font-mono">
          skill.md · aperçu des 30 premières lignes
        </div>
        <div className="bg-ink-900 text-cream-100 p-8 font-mono text-sm leading-relaxed overflow-x-auto">
          <p className="text-ink-300 mb-1">---</p>
          <p className="text-ink-300 mb-1">name: {skill.slug}</p>
          <p className="text-ink-300 mb-1">version: {skill.version}</p>
          <p className="text-ink-300 mb-1">category: {skill.category}</p>
          <p className="text-ink-300 mb-1">difficulty: {skill.difficulty}</p>
          <p className="text-ink-300 mb-1">time_saved: &ldquo;{skill.timeSaved}&rdquo;</p>
          {skill.resultMetric && (
            <p className="text-ink-300 mb-1">result_metric: &ldquo;{skill.resultMetric}&rdquo;</p>
          )}
          <p className="text-ink-300 mb-4">---</p>

          <p className="text-cream-200 mb-1"># {skill.name}</p>
          <p className="text-ink-500 mb-5">{skill.description}</p>

          <p className="text-cream-200 mb-1">## §0 — Identité &amp; paradigme</p>
          <p className="text-ink-500 mb-5">
            [Définition du rôle et du paradigme — extrait. Le fichier complet
            contient toutes les sections §0 à §N.]
          </p>
          <p className="text-cream-200 mb-1">## §1 — Déclenchement</p>
          <p className="text-ink-500">
            [Conditions d&rsquo;activation du Skill...]
          </p>
        </div>
      </div>

      <p className="text-xs text-ink-300 font-sans">
        Le fichier complet est disponible en téléchargement ci-dessus ou sur GitHub.
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
