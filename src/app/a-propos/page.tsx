import type { Metadata } from "next";
import Aurora from "@/components/effects/Aurora";
import Inspirations from "@/components/about/Inspirations";
import SupportProject from "@/components/sections/SupportProject";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Aleksander Siebert, le projet Join Médicis, la vision, les inspirations et la double licence open-source.",
};

const LINKEDIN_URL = "https://www.linkedin.com/in/aleksander-siebert/";

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-cream-100">
      {/* ============================================================ */}
      {/* HERO eyebrow */}
      {/* ============================================================ */}
      <section className="px-6 md:px-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-semibold mb-2">
            À propos
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT ME — Caroline Mignaux style */}
      {/* ============================================================ */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-ink-900 leading-[1.05] mb-10">
              Je fais du Growth depuis dix ans,
              <br />
              <em className="italic text-forest-900">
                et de l&rsquo;IA appliquée depuis le jour où Claude est arrivé.
              </em>
            </h1>

            <div className="space-y-5 text-ink-900 leading-relaxed font-sans text-base md:text-lg max-w-2xl">
              <p>
                J&rsquo;ai découvert Claude en 2023, en cherchant à automatiser un
                workflow Growth qui me prenait des heures chaque semaine.
              </p>
              <p>
                À l&rsquo;époque, je faisais du Growth & Digital Marketing :
                outbound, SEO, contenu, automation. Le métier classique,
                trouver ce qui marche, scaler ce qui marche, recommencer.
              </p>
              <p>
                Et l&rsquo;IA s&rsquo;est invitée dans toutes les conversations,
                presque toujours mal. Les marketeurs francophones se débattaient
                avec la même friction : 90 % de la doc en anglais, 100 % des
                ressources publiques calibrées pour le marché US, et zéro guide
                concret pour livrer en français.
              </p>
              <p>
                Alors j&rsquo;ai commencé à documenter ce que je faisais. Puis à
                partager. Puis à structurer ce qui est devenu Join Médicis :
                une bibliothèque <em className="italic">gratuite</em>,{" "}
                <em className="italic">open-source</em>, en français. Skills
                Claude, MCP, agents, workflows n8n. Exactement ce que
                j&rsquo;aurais voulu trouver au démarrage.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-forest-900 text-cream-50 text-sm font-sans font-medium hover:bg-forest-700 transition-colors rounded-[18px]"
              >
                <LinkedInIcon />
                Me suivre sur LinkedIn
              </a>
              <a
                href="mailto:aleksiebert@gmail.com"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-ink-300 text-ink-900 text-sm font-sans font-medium hover:border-forest-900 hover:text-forest-900 transition-colors rounded-[18px]"
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* Portrait placeholder — typographic "A" */}
          <div className="lg:sticky lg:top-24">
            <div
              className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(155deg, #1A1916 0%, #0E3F2D 70%, #2D7259 100%)",
              }}
              aria-label="Portrait d'Aleksander Siebert (placeholder)"
            >
              {/* Grain texture */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />
              {/* Large A */}
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center font-serif italic text-cream-50/95 select-none"
                style={{
                  fontSize: "clamp(12rem, 26vw, 22rem)",
                  lineHeight: 1,
                  textShadow: "0 24px 60px rgba(0,0,0,0.45)",
                }}
              >
                A
              </span>
              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-cream-50/90 font-sans">
                <div>
                  <p className="font-serif text-lg leading-tight">Aleksander Siebert</p>
                  <p className="text-xs tracking-wide opacity-80 mt-0.5">
                    Fondateur · Join Médicis
                  </p>
                </div>
                <span className="text-[10px] tracking-widest uppercase opacity-60 font-sans">
                  Portrait à venir
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROJECT VISION */}
      {/* ============================================================ */}
      <section className="px-6 md:px-10 py-24 border-t border-ink-100 bg-cream-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-6 mb-10 ornament-line">
            <span className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-semibold shrink-0">
              La vision
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-ink-900 leading-[1.05] mb-10 max-w-4xl">
            Rendre accessible{" "}
            <em className="italic text-forest-900">aux marketeurs</em> les
            fonctions avancées de l&rsquo;IA.
          </h2>

          <div className="space-y-5 text-ink-900 leading-relaxed font-sans text-base md:text-lg max-w-3xl">
            <p>
              Skills, agents IA, MCP, automatisations. La majorité de ces
              briques sont déjà disponibles, mais leur accès reste verrouillé
              par la barrière de la langue, le jargon technique, et la culture
              US des early adopters.
            </p>
            <p>
              Join Médicis partage des ressources et de la documentation{" "}
              <em className="italic">gratuitement</em>, en français, en{" "}
              <em className="italic">open-source</em>. L&rsquo;objectif : que
              chaque marketer francophone puisse intégrer Claude (ou Mistral,
              ou Gemini) dans son workflow en moins de trente minutes, sans
              passer par un consultant, sans formation payante, sans terminal.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INNOVATION QUOTE — Aurora green */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-10 py-28 bg-forest-900 text-cream-50 overflow-hidden">
        {/* Aurora background — same recipe as SupportProject */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Aurora
            colorStops={["#0E3F2D", "#3E8E6F", "#B89253"]}
            blend={0.55}
            amplitude={1.1}
            speed={0.45}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-forest-900/55"
        />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-center">
          {/* Portrait — William Gibson, Wikimedia CC BY-SA */}
          <figure className="shrink-0 mx-auto lg:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/william-gibson.jpg"
              alt="William Gibson, portrait 60ᵉ anniversaire"
              width={220}
              height={293}
              loading="lazy"
              className="w-[180px] md:w-[220px] aspect-[3/4] object-cover rounded-[18px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] grayscale"
            />
          </figure>

          <div className="text-center lg:text-left">
            <span aria-hidden="true" className="block font-serif text-7xl text-cream-50/30 leading-none mb-2">
              “
            </span>
            <blockquote className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-cream-50 leading-[1.15] mb-6 text-balance">
              Le futur est déjà là. Il n&rsquo;est juste pas équitablement
              distribué.
            </blockquote>
            <p className="text-xs tracking-[0.25em] uppercase font-sans font-semibold text-cream-50/85">
              William Gibson
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INSPIRATIONS — taped cards carousel */}
      {/* ============================================================ */}
      <Inspirations />

      {/* ============================================================ */}
      {/* WHY OPEN SOURCE — Lawve-style cards */}
      {/* ============================================================ */}
      <section
        className="relative px-6 md:px-10 py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #F1F7F4 0%, #FAF7F2 60%, #FAF7F2 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-semibold mb-4">
              Pourquoi l&rsquo;open source
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-ink-900 leading-[1.05] mb-5 text-balance">
              Notre IA, <em className="italic text-forest-900">vos règles</em>.
            </h2>
            <p className="text-base md:text-lg text-ink-700 max-w-2xl mx-auto leading-relaxed font-sans">
              Un projet à double nature exige une double licence. Code en MIT,
              contenu en CC BY 4.0. Le modèle Wikipédia, MDN, et la doc de la
              plupart des projets open-source matures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-cream-50 border border-ink-100 rounded-[25px] p-8 md:p-10 hover:border-forest-900/30 transition-colors">
              <div className="flex items-baseline justify-between mb-6">
                <p className="text-xs tracking-[0.2em] uppercase text-ink-500 font-sans font-semibold">
                  Code
                </p>
                <span className="font-serif text-2xl text-forest-900 font-medium">
                  MIT
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-ink-900 font-medium leading-tight mb-4">
                Aucune autorisation requise.
              </h3>
              <p className="text-base text-ink-700 leading-relaxed font-sans mb-6">
                Site Next.js, composants, scripts, serveurs MCP. La licence la
                plus permissive du paysage software : tu peux copier, modifier,
                redistribuer, intégrer en commercial, sans rien demander, à
                condition de conserver la mention de copyright.
              </p>
              <a
                href="https://opensource.org/license/mit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-forest-900 hover:text-forest-700 transition-colors font-sans font-medium"
              >
                Texte officiel MIT
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>

            <article className="bg-cream-50 border border-ink-100 rounded-[25px] p-8 md:p-10 hover:border-forest-900/30 transition-colors">
              <div className="flex items-baseline justify-between mb-6">
                <p className="text-xs tracking-[0.2em] uppercase text-ink-500 font-sans font-semibold">
                  Contenu
                </p>
                <span className="font-serif text-2xl text-forest-900 font-medium">
                  CC BY 4.0
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-ink-900 font-medium leading-tight mb-4">
                Créditez, c&rsquo;est tout.
              </h3>
              <p className="text-base text-ink-700 leading-relaxed font-sans mb-6">
                Skills{" "}
                <code className="font-mono text-sm bg-cream-200 px-1.5 py-0.5 rounded">
                  .md
                </code>
                , guides, documents de référence. Tu peux les utiliser,
                modifier, redistribuer (y compris en commercial), à condition
                de <em className="italic">créditer</em> l&rsquo;auteur et de
                mentionner Join Médicis.
              </p>
              <a
                href="https://creativecommons.org/licenses/by/4.0/deed.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-forest-900 hover:text-forest-700 transition-colors font-sans font-medium"
              >
                Texte officiel CC BY 4.0
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SUPPORT PROJECT — final block */}
      {/* ============================================================ */}
      <SupportProject />
    </div>
  );
}
