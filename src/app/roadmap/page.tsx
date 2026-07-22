import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { Metadata } from "next";
import { roadmap, roadmapFaq, REDDIT_URL } from "@/lib/roadmap";
import SupportProject from "@/components/sections/SupportProject";

export const metadata: Metadata = {
  alternates: { canonical: "/roadmap" },
  title: "Roadmap",
  description:
    "Suivez l'avancée de Join Médicis : ce qui est en ligne, à court, moyen et long terme. Votez pour les prochaines fonctionnalités et contribuez au projet.",
};

/** True if a /public asset exists (graceful image fallback). */
function publicFileExists(p: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", p.replace(/^\//, "")));
  } catch {
    return false;
  }
}

const BANNER = "/images/roadmap/davinci-architecture.jpg";

export default function RoadmapPage() {
  const hasBanner = publicFileExists(BANNER);

  return (
    <div className="pt-16 min-h-screen bg-cream-100">
      {/* ===================== HERO ===================== */}
      <section className="relative px-6 md:px-10 py-20 overflow-hidden border-b border-ink-100">
        {/* Da Vinci architecture banner, faint, under the title */}
        {hasBanner && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-center bg-cover opacity-40"
            style={{ backgroundImage: `url('${BANNER}')` }}
          />
        )}
        {/* Parchment overlay so text stays readable */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 45%, rgba(250,247,240,0.7) 0%, rgba(250,247,240,0.45) 60%, rgba(250,247,240,0.25) 100%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-semibold mb-4">
            Suivi du projet
          </p>
          <h1 className="font-sans tracking-tight text-5xl md:text-6xl lg:text-7xl font-bold text-ink-900 leading-[1.02] mb-8">
            Roadmap
          </h1>
          <p className="text-base md:text-lg text-ink-900 leading-relaxed font-sans max-w-2xl mx-auto mb-8">
            <span className="font-semibold">Construisons ensemble.</span> Join Médicis est
            construit par vous et pour vous. Cette roadmap est publique pour que chacun
            puisse suivre l&rsquo;avancée du projet, voter pour les prochaines fonctionnalités
            et contribuer en partageant des ressources !
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <Link
              href="/contribuer"
              className="px-6 py-3 text-cream-50 text-sm font-sans font-medium rounded-[12px] transition-colors"
              style={{ backgroundColor: "#2A4A1E" }}
            >
              Contribuer au projet
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-forest-900 text-sm font-sans font-medium rounded-[12px] border-2 border-forest-900/70 hover:bg-forest-900 hover:text-cream-50 transition-colors"
            >
              Nous contacter
            </Link>
          </div>

          {/* Reddit callout */}
          <a
            href={REDDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block text-left max-w-2xl mx-auto bg-cream-50 border border-ink-100 rounded-[16px] p-5 hover:border-forest-900/30 transition-colors"
          >
            <p className="text-sm text-ink-800 font-sans leading-relaxed">
              🔴 <span className="font-semibold">Rejoignez la communauté sur Reddit{" "}
              <span className="text-forest-900 group-hover:underline underline-offset-2">
                r/JoinMedicis
              </span></span>{" "}
              : le subreddit officiel du projet pour suivre les updates, discuter de
              Growth × IA et voter pour les prochaines features. Le thread de vote est épinglé.
            </p>
          </a>
        </div>
      </section>

      {/* ===================== KANBAN ===================== */}
      <section className="relative px-6 md:px-10 py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-10 ornament-line">
            <span className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-semibold shrink-0">
              L&rsquo;avancée du projet
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roadmap.map((col) => (
              <div
                key={col.id}
                className="flex flex-col bg-cream-50 border border-ink-100 rounded-[18px] overflow-hidden"
              >
                <div className="h-1.5 w-full" style={{ backgroundColor: col.accent }} aria-hidden="true" />
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-2 mb-4">
                    <div>
                      <h2 className="font-serif text-xl text-ink-900 font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: col.accent }} aria-hidden="true" />
                        {col.title}
                      </h2>
                      {col.subtitle && (
                        <p className="text-xs text-ink-400 font-sans mt-0.5 ml-4">{col.subtitle}</p>
                      )}
                    </div>
                    <span className="text-xs font-sans font-semibold text-ink-400 bg-cream-200 rounded-full px-2 py-0.5">
                      {col.items.length}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-ink-800 font-sans leading-relaxed bg-cream-100 border border-ink-100 rounded-[10px] px-3 py-2.5"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PARTICIPER (FAQ) ===================== */}
      <section className="relative px-6 md:px-10 py-20 border-t border-ink-100 overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-semibold mb-4">
            Participer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink-900 mb-8">
            Comment prendre part au projet
          </h2>

          <div className="space-y-3">
            {roadmapFaq.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group bg-cream-50 border border-ink-100 rounded-[14px] px-5 py-4"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-sm md:text-base font-sans font-medium text-ink-900">
                  {f.q}
                  <svg className="w-4 h-4 text-ink-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="text-sm text-ink-600 font-sans leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SOUTENIR LE PROJET ===================== */}
      <SupportProject />
    </div>
  );
}
