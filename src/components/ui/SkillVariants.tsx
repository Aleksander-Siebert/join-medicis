import Link from "next/link";
import type { Skill } from "@/types";

export default function SkillVariants({ skill }: { skill: Skill }) {
  const variants = skill.variants ?? [];

  return (
    <section className="px-6 py-16 border-t border-ink-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
          Adapté à votre secteur
        </p>
        <h2 className="font-serif text-3xl font-light text-ink-900 mb-8">
          {variants.length > 0 ? "Variantes disponibles" : "Variantes sectorielles"}
        </h2>

        {/* Variant cards */}
        {variants.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {variants.map((v) => {
              const inner = (
                <>
                  <span className="inline-block text-[11px] tracking-wide uppercase text-forest-700 bg-forest-50 px-2.5 py-1 rounded-full font-sans mb-3">
                    {v.sector}
                  </span>
                  <p className="font-serif text-lg font-light text-ink-900 mb-2">
                    {v.name}
                  </p>
                  {v.slug ? (
                    <span className="inline-flex items-center gap-1.5 text-sm text-forest-900 font-sans font-medium">
                      Voir la variante
                      <span aria-hidden="true">→</span>
                    </span>
                  ) : (
                    <span className="text-xs text-ink-300 font-sans">Bientôt disponible</span>
                  )}
                </>
              );
              return v.slug ? (
                <Link
                  key={v.name}
                  href={`/ressources/skills/${v.slug}`}
                  className="group bg-cream-50 border border-ink-100 rounded-[18px] p-6 hover:border-forest-600 transition-colors"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={v.name}
                  className="bg-cream-50 border border-ink-100 rounded-[18px] p-6"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        )}

        {/* Contribution encart — toujours affiché */}
        <Link
          href="/contribuer"
          className="group flex items-center gap-4 bg-cream-50 border border-dashed border-ink-200 rounded-[18px] p-5 hover:border-forest-600 transition-colors"
        >
          <span
            className="shrink-0 w-10 h-10 rounded-full bg-forest-50 text-forest-700 flex items-center justify-center"
            aria-hidden="true"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </span>
          <p className="text-sm text-ink-500 font-sans leading-relaxed">
            Vous travaillez dans un secteur spécifique ?{" "}
            <span className="text-forest-900 font-medium group-hover:underline underline-offset-4">
              Contactez-nous ou partagez votre propre ressource
            </span>
            .
          </p>
        </Link>
      </div>
    </section>
  );
}
