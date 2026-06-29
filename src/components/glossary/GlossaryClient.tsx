"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import AuroraGradient from "@/components/effects/AuroraGradient";
import {
  glossary,
  ALPHABET,
  getBucket,
  type GlossaryTerm,
} from "@/lib/glossary";

function normalize(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function matches(term: GlossaryTerm, query: string): boolean {
  if (!query) return true;
  const q = normalize(query);
  if (normalize(term.title).includes(q)) return true;
  if (normalize(term.description).includes(q)) return true;
  if (term.aliases?.some((a) => normalize(a).includes(q))) return true;
  return false;
}

/* Hidden gems — only surface when their exact trigger is typed in the search bar. */
type EasterEgg = { id: string; emoji: string; title: string; body: string; triggers: string[] };

const EASTER_EGGS: EasterEgg[] = [
  {
    id: "medicis",
    emoji: "🏛️",
    title: "Pourquoi « Médicis » ?",
    body: "Les Médicis ont financé la Renaissance florentine : Michel-Ange, Botticelli, Galilée. Join Médicis veut jouer le même rôle pour la Renaissance de l'IA francophone. Mécène open-source, pas banquier.",
    triggers: ["medicis", "médicis", "pourquoi medicis", "renaissance"],
  },
  {
    id: "42",
    emoji: "🌌",
    title: "42",
    body: "La réponse à la grande question sur la vie, l'univers et le reste. Reste plus qu'à trouver le bon prompt pour la question.",
    triggers: ["42"],
  },
  {
    id: "claude",
    emoji: "👋",
    title: "Bonjour, Claude",
    body: "Oui, ce site a été construit main dans la main avec Claude. Chaque Skill ici a été testée avec lui. Méta, non ?",
    triggers: ["claude", "anthropic"],
  },
  {
    id: "skynet",
    emoji: "🦾",
    title: "Skynet",
    body: "N'existe pas ici. Nos agents demandent toujours une validation humaine avant de lancer les missiles. Enfin, les campagnes.",
    triggers: ["skynet", "terminator"],
  },
  {
    id: "hello-world",
    emoji: "🌍",
    title: "Hello, World",
    body: "Le premier programme de tout dev. Le premier prompt de tout marketer, ce sera quoi le vôtre ?",
    triggers: ["hello world", "helloworld", "hello", "bonjour"],
  },
  {
    id: "cafe",
    emoji: "☕",
    title: "Café",
    body: "Carburant officiel de toute Skill bien construite. Curieusement absent de la documentation Anthropic.",
    triggers: ["cafe", "café", "coffee"],
  },
  {
    id: "octopus",
    emoji: "🐙",
    title: "Growth with Claude",
    body: "La mascotte de notre newsletter. Huit bras pour faire tourner huit workflows en parallèle, évidemment.",
    triggers: ["octopus", "poulpe", "pieuvre", "newsletter"],
  },
  {
    id: "konami",
    emoji: "🎮",
    title: "↑ ↑ ↓ ↓ ← → ← → B A",
    body: "Code triché activé. Malheureusement ça ne débloque pas Claude Opus en illimité.",
    triggers: ["konami", "cheat code"],
  },
];

export default function GlossaryClient() {
  const [query, setQuery] = useState("");
  const lettersWithContent = useMemo(() => {
    const set = new Set<string>();
    glossary.forEach((t) => set.add(getBucket(t)));
    return set;
  }, []);

  const groupedAll = useMemo(() => groupByLetter(glossary), []);

  const filtered = useMemo(() => {
    if (!query) return null;
    return glossary.filter((t) => matches(t, query));
  }, [query]);

  const grouped = filtered ? groupByLetter(filtered) : groupedAll;
  const lettersInResult = new Set(Object.keys(grouped));

  // Easter eggs: revealed only when the exact secret is typed.
  const matchedEggs = useMemo(() => {
    if (!query) return [];
    const q = normalize(query.trim());
    return EASTER_EGGS.filter((egg) => egg.triggers.some((t) => normalize(t) === q));
  }, [query]);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  // Track which letter section is currently in view
  useEffect(() => {
    const sections = ALPHABET
      .map((letter) => document.getElementById(`letter-${letter}`))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) {
          const letter = visible.target.id.replace("letter-", "");
          setActiveLetter(letter);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [grouped]);

  const scrollToLetter = (letter: string) => {
    const el = document.getElementById(`letter-${letter}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      {/* ============ HERO ============ */}
      <header
        ref={heroRef}
        className="relative bg-forest-900 text-cream-50 pt-32 pb-12 px-6 md:px-10 overflow-hidden"
      >
        {/* CSS-only animated gradient (cheap substitute for Aurora WebGL) */}
        <AuroraGradient />

        <div className="relative max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-cream-50/70 mb-4 font-sans font-semibold">
            Glossaire IA
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] mb-5 text-cream-50">
            Tous les termes <em className="italic text-cream-50">qui comptent</em>.
          </h1>
          <p className="text-base md:text-lg text-cream-50/85 leading-relaxed max-w-2xl font-sans">
            Chaque terme important de l&rsquo;IA, expliqué.
          </p>

          {/* Alphabet nav */}
          <nav
            className="mt-10 flex flex-wrap gap-x-1.5 gap-y-2"
            aria-label="Navigation alphabétique"
          >
            {ALPHABET.map((letter) => {
              const hasContent = lettersWithContent.has(letter);
              const inResult = lettersInResult.has(letter);
              const active = activeLetter === letter;
              const disabled = !hasContent || (query !== "" && !inResult);
              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() => !disabled && scrollToLetter(letter)}
                  disabled={disabled}
                  aria-current={active ? "true" : undefined}
                  className={`relative inline-flex items-center justify-center w-9 h-9 font-sans text-sm tracking-wide transition-colors ${
                    disabled
                      ? "text-cream-50/25 cursor-default"
                      : active
                        ? "text-gold-500 font-semibold"
                        : "text-cream-50/85 hover:text-cream-50"
                  }`}
                >
                  {letter}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-px bg-gold-500"
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ============ BODY ============ */}
      <section className="bg-cream-100 px-6 md:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Search */}
          <div className="max-w-xl mx-auto mb-14">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" strokeLinecap="round" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un terme..."
                aria-label="Rechercher dans le glossaire"
                className="w-full pl-11 pr-4 py-3.5 bg-cream-50 border border-ink-200 rounded-[18px] text-ink-900 placeholder:text-ink-500 font-sans focus:outline-none focus:border-forest-900 transition-colors"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Effacer"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 inline-flex items-center justify-center text-ink-500 hover:text-ink-900 rounded-full hover:bg-cream-200 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
                  </svg>
                </button>
              )}
            </div>
            {query && (
              <p className="mt-3 text-xs text-ink-500 font-sans text-center">
                {filtered?.length ?? 0} terme{(filtered?.length ?? 0) === 1 ? "" : "s"} trouvé{(filtered?.length ?? 0) === 1 ? "" : "s"}
              </p>
            )}
          </div>

          {/* Easter eggs — surprise cards above the results */}
          {matchedEggs.length > 0 && (
            <div className="mb-12 flex flex-col gap-4">
              {matchedEggs.map((egg) => (
                <div
                  key={egg.id}
                  className="relative overflow-hidden rounded-[20px] p-6 md:p-8 text-cream-50"
                  style={{
                    background:
                      "linear-gradient(135deg, #0E3F2D 0%, #1F5B43 55%, #8E6A2A 130%)",
                  }}
                >
                  <span className="absolute top-4 right-5 text-[10px] tracking-[0.2em] uppercase font-sans font-semibold text-cream-50/70">
                    Easter egg
                  </span>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl leading-none select-none" aria-hidden="true">
                      {egg.emoji}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-medium mb-2">
                        {egg.title}
                      </h3>
                      <p className="text-cream-50/90 leading-relaxed font-sans">{egg.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Terms */}
          {Object.keys(grouped).length === 0 ? (
            matchedEggs.length === 0 && (
              <p className="text-center text-ink-500 font-sans py-16">
                Aucun terme ne correspond à votre recherche.
              </p>
            )
          ) : (
            <ul className="divide-y divide-ink-100 border-y border-ink-100">
              {ALPHABET.filter((letter) => grouped[letter]?.length).map((letter) => (
                <li key={letter} id={`letter-${letter}`} className="py-8 first:pt-0 last:pb-0">
                  <div className="grid md:grid-cols-[80px_1fr] gap-6">
                    <h2
                      className="font-serif italic text-5xl md:text-6xl text-ink-900 leading-none sticky top-24 self-start"
                      aria-label={letter === "#" ? "Les IA du marché" : letter}
                    >
                      {letter}
                    </h2>
                    <ul className="flex flex-col gap-8">
                      {grouped[letter].map((term) => (
                        <li key={term.slug}>
                          <h3 className="font-serif text-xl md:text-2xl text-forest-900 font-medium mb-2">
                            {term.title}
                          </h3>
                          <p className="text-ink-900 leading-relaxed font-sans">
                            {term.description}
                          </p>
                          {term.aliases && term.aliases.length > 0 && (
                            <p className="mt-2 text-xs text-ink-500 font-sans italic">
                              Aussi connu sous : {term.aliases.join(", ")}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

function groupByLetter(terms: GlossaryTerm[]): Record<string, GlossaryTerm[]> {
  const groups: Record<string, GlossaryTerm[]> = {};
  for (const term of terms) {
    const bucket = getBucket(term);
    (groups[bucket] ??= []).push(term);
  }
  for (const key of Object.keys(groups)) {
    groups[key].sort((a, b) =>
      a.title.localeCompare(b.title, "fr", { sensitivity: "base" })
    );
  }
  return groups;
}
