"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "jm-contribute-popup-dismissed";
const SHOW_AFTER_MS = 12000;

export default function ContributePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY) === "1") return;

    const timer = window.setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* localStorage may be unavailable — fail silently */
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="contribute-popup-title"
      className="fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100%-3rem)] sm:w-full bg-cream-50 border border-ink-200 shadow-xl"
    >
      <div className="relative p-6">
        <button
          onClick={dismiss}
          aria-label="Fermer"
          className="absolute top-3 right-3 text-ink-300 hover:text-ink-700 transition-colors p-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <p className="text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans">
          Open-source · Communauté
        </p>
        <h3
          id="contribute-popup-title"
          className="font-serif text-xl font-light text-ink-900 mb-3 leading-snug pr-6"
        >
          Tu as un Skill qui marche ? Partage-le.
        </h3>
        <p className="text-sm text-ink-500 font-sans leading-relaxed mb-5">
          Chaque ressource ajoutée fait gagner du temps à toute la communauté
          francophone. On t&rsquo;accompagne dans la mise en forme et la
          publication.
        </p>

        <div className="flex items-center gap-2">
          <Link
            href="/contribuer"
            onClick={dismiss}
            className="flex-1 text-center px-4 py-2.5 bg-forest-900 text-cream-50 text-sm hover:bg-forest-700 transition-colors font-sans"
          >
            Contribuer
          </Link>
          <button
            onClick={dismiss}
            className="px-4 py-2.5 text-sm text-ink-400 hover:text-ink-700 transition-colors font-sans"
          >
            Plus tard
          </button>
        </div>
      </div>
    </div>
  );
}
