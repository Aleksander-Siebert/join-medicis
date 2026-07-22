import type { Metadata } from "next";
import Link from "next/link";
import AuroraGradient from "@/components/effects/AuroraGradient";
import GoldenSpiral from "@/components/effects/GoldenSpiral";
import EcosystemBrowser from "@/components/ecosysteme/EcosystemBrowser";

export const metadata: Metadata = {
  alternates: { canonical: "/ecosysteme" },
  title: "Écosystème",
  description:
    "Ressources IA créées par des tiers (entreprises, individus, leaders d'opinion), recensées et évaluées de façon neutre.",
};

export default function EcosystemePage() {
  return (
    <div className="pt-16 min-h-screen bg-cream-100">
      {/* ===================== HERO (green banner) ===================== */}
      <div className="relative bg-forest-900 text-cream-50 px-6 py-20 overflow-hidden">
        <AuroraGradient />
        {/* Golden spiral — clin d'œil au nombre d'or, en filigrane doré */}
        <GoldenSpiral
          className="hidden md:block absolute -right-20 -top-10 w-[560px] h-auto opacity-[0.14] pointer-events-none"
          stroke="#E7C978"
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="font-sans tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold text-cream-50 leading-[1.05] mb-6">
            Écosystème
          </h1>
          <p className="text-cream-50/85 font-sans leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            Retrouvez les ressources créées par des tiers (entreprises, individus,
            etc…), recensées et évaluées de façon neutre.
          </p>
        </div>
      </div>

      {/* ===================== BROWSER (search + filters + grid) ===================== */}
      <EcosystemBrowser />

      {/* ===================== FINAL CTA (green, Inter, → /contribuer) ============= */}
      <div className="relative bg-forest-900 text-cream-50 px-6 py-16 overflow-hidden">
        <AuroraGradient />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-sans text-xl md:text-2xl font-semibold text-cream-50 leading-snug mb-8">
            Vous connaissez ou possédez une ressource qui mérite d&rsquo;être
            référencée ici ?
          </p>
          <Link
            href="/contribuer"
            className="inline-flex items-center px-7 py-3.5 bg-cream-50 text-forest-900 text-sm md:text-base font-sans font-semibold rounded-full hover:bg-cream-100 transition-colors"
          >
            Contribuer à Join Médicis !
          </Link>
        </div>
      </div>
    </div>
  );
}
