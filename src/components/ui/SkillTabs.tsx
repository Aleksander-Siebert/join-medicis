"use client";

import { useState } from "react";
import { Skill } from "@/types";

const TABS = [
  { id: "about", label: "À propos" },
  { id: "content", label: "Contenu" },
  { id: "demo", label: "Démo", badge: "Bientôt" },
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
          {active === "demo" && <DemoTab />}
        </div>
      </div>
    </div>
  );
}

function AboutTab({ skill }: { skill: Skill }) {
  const problem =
    skill.problem ??
    `Sans ce Skill, ${skill.name.toLowerCase()} se fait à la main : les marketeurs passent en moyenne plusieurs heures par semaine sur cette tâche, sans systématisation ni reproductibilité à l'échelle.`;
  const solution =
    skill.solution ??
    "Avec ce Skill configuré dans un Projet, chaque demande produit un résultat structuré, calibré pour le marché français, en quelques minutes.";

  const metrics = [
    { label: "Temps économisé", value: skill.timeSaved },
    ...(skill.resultMetric
      ? [{ label: "Résultat observé", value: skill.resultMetric }]
      : []),
    { label: "Testé par", value: `${skill.testedBy} membres` },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
          Problème résolu
        </p>
        <h3 className="font-serif text-2xl font-light text-ink-900 mb-4">
          Ce que ce Skill change
        </h3>
        <p className="text-ink-500 leading-relaxed font-sans text-sm">{problem}</p>
        <p className="text-ink-500 leading-relaxed font-sans text-sm mt-4">{solution}</p>
      </div>

      <div>
        <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
          Pourquoi c&rsquo;est recommandé
        </p>
        {skill.whyRecommended && (
          <p className="text-ink-500 leading-relaxed font-sans text-sm mb-8">
            {skill.whyRecommended}
          </p>
        )}
        <dl className="divide-y divide-ink-100 border-y border-ink-100">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-baseline justify-between gap-4 py-3">
              <dt className="text-xs tracking-widest uppercase text-ink-300 font-sans">
                {m.label}
              </dt>
              <dd className="font-serif text-lg text-ink-900">{m.value}</dd>
            </div>
          ))}
        </dl>
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

function DemoTab() {
  return (
    <div className="bg-cream-200 py-20 text-center">
      <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
        Démo
      </p>
      <p className="font-serif text-3xl font-light text-ink-700 mb-3">
        Bientôt disponible
      </p>
      <p className="text-sm text-ink-500 mb-8 font-sans max-w-md mx-auto">
        Une démonstration de ce Skill (input exemple → output Claude) arrive
        prochainement. En attendant, téléchargez le Skill pour le tester sur
        vos propres cas d&rsquo;usage.
      </p>
      <span className="inline-block px-5 py-2.5 bg-cream-300 text-ink-300 text-sm font-sans">
        Bientôt disponible
      </span>
    </div>
  );
}
