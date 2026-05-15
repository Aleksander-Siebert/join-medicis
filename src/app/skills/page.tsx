"use client";

import { useState, useMemo } from "react";
import { skills } from "@/lib/data";
import SkillCard from "@/components/ui/SkillCard";

const CATEGORIES = [
  { id: "all", label: "Tous" },
  { id: "seo", label: "SEO & Contenu" },
  { id: "prospection", label: "Prospection" },
  { id: "cro", label: "CRO" },
  { id: "analytics", label: "Analytics" },
  { id: "strategie", label: "Stratégie" },
];

const DIFFICULTIES = [
  { id: "debutant", label: "Débutant" },
  { id: "intermediaire", label: "Intermédiaire" },
  { id: "avance", label: "Avancé" },
];

export default function SkillsPage() {
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      if (category !== "all" && s.category !== category) return false;
      if (difficulty !== "all" && s.difficulty !== difficulty) return false;
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
  }, [category, difficulty, search]);

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

          {/* Difficulty filters */}
          <div className="flex flex-wrap gap-2">
            {DIFFICULTIES.map((d) => (
              <button
                key={d.id}
                onClick={() => setDifficulty(difficulty === d.id ? "all" : d.id)}
                className={`px-3 py-1.5 text-xs transition-colors font-sans ${
                  difficulty === d.id
                    ? "bg-ink-900 text-cream-50"
                    : "bg-cream-200 text-ink-500 hover:bg-cream-300"
                }`}
              >
                {d.label}
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
    </div>
  );
}
