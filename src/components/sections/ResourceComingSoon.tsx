import Link from "next/link";
import AuroraGradient from "@/components/effects/AuroraGradient";

/**
 * Gabarit commun aux pages ressources en développement (Plugins, Automations,
 * Agents) : header vert (Inter blanc) + bloc « En développement » avec barre de
 * progression et CTA vers la roadmap.
 */
export default function ResourceComingSoon({
  title,
  description,
  progress = 10,
}: {
  title: string;
  description: string;
  progress?: number;
}) {
  return (
    <div className="pt-16 min-h-screen flex flex-col">
      {/* ===================== HEADER (fond vert, Inter blanc) ===================== */}
      <div className="relative bg-forest-900 text-cream-50 px-6 py-20 overflow-hidden">
        <AuroraGradient />
        <div className="relative max-w-3xl mx-auto">
          <h1 className="font-sans tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold text-cream-50 leading-[1.05] mb-5">
            {title}
          </h1>
          <p className="text-cream-50/85 font-sans leading-relaxed text-base md:text-lg max-w-2xl">
            {description}
          </p>
        </div>
      </div>

      {/* ===================== EN DÉVELOPPEMENT ===================== */}
      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-md w-full text-center">
          <div
            className="w-px h-16 bg-gradient-to-b from-transparent via-ink-100 to-transparent mx-auto mb-10"
            aria-hidden="true"
          />
          <p className="font-serif text-3xl font-light text-ink-700 mb-8">
            En développement
          </p>

          {/* Barre de progression */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs text-ink-300 mb-2 font-sans">
              <span>Progression</span>
              <span>{progress} %</span>
            </div>
            <div className="h-1.5 w-full bg-ink-100 rounded-full overflow-hidden">
              <div className="h-full bg-forest-900 rounded-full" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <p className="text-xs text-ink-300 font-sans mb-8">
            Prévue sur le moyen terme (3 à 9 mois)
          </p>

          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest-900 text-cream-50 text-sm font-sans font-medium hover:bg-forest-700 transition-colors rounded-[10px]"
          >
            Voir la roadmap
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
