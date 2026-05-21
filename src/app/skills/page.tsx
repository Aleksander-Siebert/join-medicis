"use client";

import { useState, useMemo } from "react";
import { skills } from "@/lib/data";
import SkillCard from "@/components/ui/SkillCard";
import FAQ, { type FAQItem } from "@/components/sections/FAQ";

const CATEGORIES = [
  { id: "all", label: "Tous" },
  { id: "seo", label: "SEO & Contenu" },
  { id: "prospection", label: "Prospection" },
  { id: "cro", label: "CRO" },
  { id: "analytics", label: "Analytics" },
  { id: "strategie", label: "Stratégie" },
];

const SKILLS_FAQ: FAQItem[] = [
  {
    question: "Comment j'installe un Skill sur Claude ?",
    answer:
      "Trois étapes : (1) tu cliques sur « Télécharger .md » sur la fiche du Skill, (2) tu ouvres Claude.ai → Nouveau projet → Instructions du projet, (3) tu colles le contenu du fichier. C'est tout — le Skill est actif sur toutes les conversations du projet. Compte 2 à 5 minutes la première fois.",
  },
  {
    question: "Je peux utiliser un Skill sur ChatGPT ou Gemini ?",
    answer:
      "Oui, dans la majorité des cas. Chaque fiche Skill indique le niveau de compatibilité par LLM : « ✓ » = optimisé, « ~ » = fonctionne mais résultats légèrement différents. Sur ChatGPT, tu colles le contenu dans un Custom GPT. Sur Gemini, dans les Gems. Sur Mistral Le Chat, dans les Personas.",
  },
  {
    question: "Quelle est la différence avec un prompt qu'on trouve sur internet ?",
    answer:
      "Un prompt internet, c'est en général 2 phrases sans structure ni tests. Un Skill, c'est un système complet : identité, déclencheurs, méthodologie, format de sortie, garde-fous, anti-patterns. Et surtout, c'est testé sur 10+ cas réels avant publication, avec une métrique de résultat mesurée.",
  },
  {
    question: "Je peux combiner plusieurs Skills dans le même projet ?",
    answer:
      "Oui, et c'est même recommandé pour les workflows complexes. Tu peux par exemple combiner « Growth Context » (fondation) + « Brief SEO » + « Cluster de contenu ». Claude gère les instructions en parallèle. Limite pratique : 3 à 4 Skills par projet pour rester lisible — au-delà, mieux vaut séparer en deux projets.",
  },
  {
    question: "Et si le Skill ne marche pas sur mon cas d'usage ?",
    answer:
      "Deux options. (1) Fork-le : la licence CC BY 4.0 t'autorise à modifier librement le fichier, adapte-le à ton contexte. (2) Signale-nous le cas via la page Contact — si le Skill échoue sur des cas raisonnables, on le met à jour. La version est trackée (semver) pour que tu saches quand re-télécharger.",
  },
  {
    question: "À quelle fréquence sont publiés les nouveaux Skills ?",
    answer:
      "L'objectif est 2 à 4 nouveaux Skills par mois, plus des mises à jour des Skills existants. La roadmap est priorisée par les demandes via la page « Demander un Skill » et par l'usage interne. Suis le repo GitHub ou la newsletter LinkedIn pour ne rien rater.",
  },
];

export default function SkillsPage() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      if (category !== "all" && s.category !== category) return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !s.name.toLowerCase().includes(q) &&
          !s.description.toLowerCase().includes(q) &&
          !s.tags.some((t) => t.includes(q))
        )
          return false;
      }
      return true;
    });
  }, [category, search]);

  return (
    <div className="pt-16 min-h-screen">
      {/* Page header */}
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
            Bibliothèque
          </p>
          <h1 className="font-serif text-5xl font-light text-ink-900 mb-3">
            Skills Claude
          </h1>
          <p className="text-ink-500 max-w-xl font-sans">
            {skills.length} Skills testés, documentés et immédiatement
            déployables sur claude.ai.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-ink-100 px-6 py-5 sticky top-16 bg-cream-100/95 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-wrap">
          {/* Search */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Rechercher un Skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm bg-cream-200 border border-transparent focus:border-ink-200 focus:bg-cream-50 focus:outline-none text-ink-700 placeholder-ink-300 transition-colors font-sans w-52"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`px-3 py-1.5 text-xs transition-colors font-sans ${
                  category === c.id
                    ? "bg-forest-900 text-cream-50"
                    : "bg-cream-200 text-ink-500 hover:bg-cream-300"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Results */}
      <div className="px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-ink-300 mb-8 tracking-widest uppercase font-sans">
            {filtered.length} résultat{filtered.length !== 1 ? "s" : ""}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100">
              {filtered.map((skill) => (
                <div key={skill.slug} className="bg-cream-100">
                  <SkillCard skill={skill} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center">
              <p className="font-serif text-3xl font-light text-ink-300 mb-4">
                Aucun résultat
              </p>
              <p className="text-sm text-ink-300 font-sans">
                Modifiez vos filtres ou revenez bientôt — de nouveaux Skills
                arrivent chaque semaine.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FAQ */}
      <FAQ
        items={SKILLS_FAQ}
        eyebrow="Skills · FAQ"
        title="Tout sur les Skills"
        subtitle="Installation, compatibilité, fréquence de publication — les questions concrètes côté utilisation."
      />
    </div>
  );
}
