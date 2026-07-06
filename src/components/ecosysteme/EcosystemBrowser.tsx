"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ecosystem } from "@/lib/data";
import type { EcosystemCategory, EcosystemResource } from "@/types";
import EcosystemLogo from "@/components/ui/EcosystemLogo";

/** Ordre + libellés des blocs. Les individus et leaders ont un logo rond. */
const CATEGORY_ORDER: {
  id: EcosystemCategory;
  label: string;
  description: string;
  shape: "square" | "round";
}[] = [
  {
    id: "entreprises",
    label: "Entreprises",
    description: "Éditeurs, plateformes et outils qui construisent avec l'IA.",
    shape: "square",
  },
  {
    id: "individus",
    label: "Individus",
    description: "Créateurs, experts et communautés qui font avancer le domaine.",
    shape: "round",
  },
  {
    id: "leaders",
    label: "Leaders d'opinion",
    description:
      "Les voix qu'on suit vraiment : créateurs, podcasts et talk-shows qui décryptent l'IA au quotidien.",
    shape: "round",
  },
  {
    id: "gouvernement",
    label: "Gouvernement",
    description: "Institutions publiques et ressources officielles.",
    shape: "square",
  },
  {
    id: "autres",
    label: "Autres",
    description: "Ressources qui n'entrent pas dans les catégories ci-dessus.",
    shape: "square",
  },
];

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ResourceCard({
  item,
  shape,
}: {
  item: EcosystemResource;
  shape: "square" | "round";
}) {
  return (
    <Link
      href={`/ecosysteme/${item.slug}`}
      className="group flex flex-col bg-cream-50 border border-ink-100 p-6 rounded-[25px] hover:border-forest-600 hover:shadow-[0_2px_24px_-12px_rgba(26,51,40,0.4)] transition-all duration-200 shadow-[0_1px_2px_rgba(26,51,40,0.04)]"
    >
      {/* Logo + meta */}
      <div className="flex items-start gap-4 mb-4">
        <EcosystemLogo resource={item} size={52} shape={shape} />
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-xl font-light text-ink-900 group-hover:text-forest-900 transition-colors leading-snug">
            {item.name}
          </h3>
          <p className="text-xs tracking-widest uppercase text-ink-300 font-sans mt-1">
            {item.org}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-ink-500 font-sans leading-relaxed flex-1">
        {item.tagline}
      </p>

      {/* Tags */}
      {(item.type || item.lang) && (
        <div className="flex flex-wrap items-center gap-2 mt-4">
          {item.type && (
            <span className="text-xs bg-cream-200 text-ink-500 px-2 py-0.5 rounded-full font-sans">
              {item.type}
            </span>
          )}
          {item.lang && (
            <span className="text-xs bg-cream-200 text-ink-500 px-2 py-0.5 rounded-full font-sans">
              {item.lang}
            </span>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="mt-5 pt-4 border-t border-ink-100 flex items-center gap-1.5 text-sm text-forest-900 font-sans font-medium">
        Découvrir la ressource
        <ArrowIcon />
      </div>
    </Link>
  );
}

export default function EcosystemBrowser() {
  const [category, setCategory] = useState<EcosystemCategory | "all">("all");
  const [search, setSearch] = useState("");

  // On ne garde que les catégories qui contiennent au moins une ressource.
  const activeCategories = useMemo(
    () => CATEGORY_ORDER.filter((c) => ecosystem.some((r) => r.category === c.id)),
    []
  );

  // Filtrage par catégorie + recherche.
  const sections = useMemo(() => {
    const q = search.trim().toLowerCase();
    return activeCategories
      .filter((c) => category === "all" || c.id === category)
      .map((c) => ({
        ...c,
        items: ecosystem.filter((r) => {
          if (r.category !== c.id) return false;
          if (!q) return true;
          return (
            r.name.toLowerCase().includes(q) ||
            r.org.toLowerCase().includes(q) ||
            r.tagline.toLowerCase().includes(q) ||
            r.description.toLowerCase().includes(q) ||
            (r.type?.toLowerCase().includes(q) ?? false)
          );
        }),
      }))
      .filter((c) => c.items.length > 0);
  }, [activeCategories, category, search]);

  const total = sections.reduce((n, s) => n + s.items.length, 0);

  return (
    <>
      {/* Filters */}
      <div className="border-b border-ink-100 px-6 py-5 sticky top-16 bg-cream-100/95 backdrop-blur-sm z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-wrap">
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
              placeholder="Rechercher une ressource..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm bg-cream-200 border border-transparent focus:border-ink-200 focus:bg-cream-50 focus:outline-none text-ink-700 placeholder-ink-300 transition-colors font-sans w-56 rounded-full"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory("all")}
              className={`px-3 py-1.5 text-xs rounded-full transition-colors font-sans ${
                category === "all"
                  ? "bg-forest-900 text-cream-50"
                  : "bg-cream-200 text-ink-500 hover:bg-cream-300"
              }`}
            >
              Tous
            </button>
            {activeCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`px-3 py-1.5 text-xs rounded-full transition-colors font-sans ${
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
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-ink-300 mb-10 tracking-widest uppercase font-sans">
            {total} ressource{total !== 1 ? "s" : ""}
          </p>

          {sections.length > 0 ? (
            <div className="space-y-20">
              {sections.map((cat) => (
                <section key={cat.id}>
                  {/* Category heading */}
                  <div className="flex items-baseline gap-4 mb-3">
                    <h2 className="font-serif text-3xl font-light text-ink-900">
                      {cat.label}
                    </h2>
                    <span className="text-xs text-ink-300 font-sans">
                      {cat.items.length} ressource{cat.items.length > 1 ? "s" : ""}
                    </span>
                    <div className="flex-1 h-px bg-ink-100" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-ink-500 font-sans mb-8 max-w-2xl">
                    {cat.description}
                  </p>

                  {/* Cards — 3 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {cat.items.map((item) => (
                      <ResourceCard key={item.slug} item={item} shape={cat.shape} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="py-28 text-center">
              <p className="font-serif text-3xl font-light text-ink-300 mb-4">
                Aucun résultat
              </p>
              <p className="text-sm text-ink-300 font-sans">
                Modifiez votre recherche ou changez de catégorie.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
