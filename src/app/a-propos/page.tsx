import type { Metadata } from "next";
import Link from "next/link";
import AuroraGradient from "@/components/effects/AuroraGradient";
import Inspirations from "@/components/about/Inspirations";
import SupportProject from "@/components/sections/SupportProject";

export const metadata: Metadata = {
  alternates: { canonical: "/a-propos" },
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
            <h1 className="font-sans tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 leading-[1.05] mb-10">
              Je fais du marketing depuis plusieurs années
              <br />
              <em className="italic text-forest-900">
                et de l&rsquo;IA appliquée depuis l&rsquo;arrivée de ChatGPT.
              </em>
            </h1>

            <div className="space-y-5 text-ink-900 leading-relaxed font-sans text-base md:text-lg max-w-2xl">
              <p>
                J&rsquo;ai découvert l&rsquo;IA comme tout le monde. Je ne fais pas de
                machine learning depuis 2015 et je ne m&rsquo;autoproclame pas
                «&nbsp;expert IA&nbsp;», contrairement à ce que l&rsquo;on pourrait penser
                de quelqu&rsquo;un qui lance un projet sur les fonctionnalités avancées de
                l&rsquo;IA.
              </p>
              <p>
                Mon premier vrai contact avec ChatGPT date de 2023, pendant mon échange
                Erasmus en Lituanie. Un ami en cybersécurité me l&rsquo;avait conseillé pour
                m&rsquo;aider à rédiger mon rapport de stage. Pour être honnête, je n&rsquo;y
                croyais pas vraiment au début.
              </p>
              <p>
                J&rsquo;ai fait mes propres tests tout au long de l&rsquo;année 2024 à travers
                mes cours et mes projets. Comme la majorité des gens, je trouvais
                l&rsquo;outil incroyable, mais je me limitais aux fonctionnalités basiques.
                Le vrai déclic a eu lieu pendant mon stage chez Pixmania. J&rsquo;ai commencé
                à réellement apprendre : les prompts, les fonctionnalités avancées, et
                surtout les GPTs personnalisés. Le potentiel de l&rsquo;IA pour transformer
                notre secteur est devenu une évidence.
              </p>
              <p>
                Puis est arrivée l&rsquo;année 2025. L&rsquo;IA s&rsquo;est invitée dans toutes
                les conversations, et souvent de la mauvaise manière. Le FOMO et la peur
                d&rsquo;être remplacé ont pris le dessus. LinkedIn a découvert que le mot
                «&nbsp;IA&nbsp;» générait de l&rsquo;engagement, ce qui a attiré une vague
                d&rsquo;infopreneurs et de gourous.
              </p>
              <p>
                En cherchant à me former et à monter en compétence, je me suis heurté à un
                mur. J&rsquo;interagissais avec différents contenus, mais les ressources
                étaient soit verrouillées derrière des formations payantes, soit beaucoup
                trop génériques pour être actionnables.
              </p>
              <p>
                J&rsquo;ai donc décidé de prendre les choses en main. L&rsquo;objectif :
                développer la solution dont j&rsquo;avais besoin. Une bibliothèque{" "}
                <em className="italic">gratuite</em>, <em className="italic">open-source</em>,
                pensée pour aider les marketeurs à vraiment exploiter l&rsquo;IA. Je l&rsquo;ai
                créée pour moi, mais aussi pour les connaissances de mon réseau qui ne
                savaient pas par où commencer.
              </p>
              <p>
                Nous sommes en 2026. Join Médicis est lancé. Vous découvrez ici ce projet et
                la personne derrière, qui essaie simplement d&rsquo;aider l&rsquo;écosystème à
                progresser.
              </p>
              <p>
                N&rsquo;hésitez pas à contribuer ou à me faire des retours. Ce projet est fait
                POUR vous et PAR vous. Je n&rsquo;en suis que le bâtisseur.
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
      <section className="px-6 md:px-10 py-24 border-t border-ink-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-semibold mb-10">
            La vision
          </p>

          <h2 className="font-sans tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 leading-[1.05] mb-10 max-w-4xl mx-auto text-balance">
            Rendre les fonctions avancées de l&rsquo;IA{" "}
            <em className="italic text-forest-900">accessibles aux marketeurs</em>.
          </h2>

          <div className="space-y-5 text-ink-900 leading-relaxed font-sans text-base md:text-lg max-w-3xl mx-auto text-left">
            <p>
              Vous entendez sûrement parler de Skills, de MCP, d&rsquo;automatisations
              ou d&rsquo;agents IA. Ces outils semblent incroyables, mais comment y
              accéder concrètement ?
            </p>
            <p>
              La majorité de ces briques existent déjà. Pourtant, leur accès reste
              verrouillé par la barrière de la langue, le jargon technique, ou
              simplement le brouillard de ne pas savoir par où commencer.
            </p>
            <p>
              Join Médicis partage des ressources et de la documentation.{" "}
              <em className="italic">Gratuitement.</em> En français. En{" "}
              <em className="italic">open-source.</em>
            </p>
            <p>
              L&rsquo;objectif est simple : permettre à chaque marketeur de déployer
              des Skills, des MCP, des agents ou des workflows en moins de trente
              minutes. Sans passer par un consultant. Sans formation payante. Sans
              terminal. Sans se perdre dans la dernière tendance technique qui sort
              toutes les deux semaines.
            </p>
            <p>
              C&rsquo;est mon objectif et ma vision des choses. Si elle vous parle,
              rejoignez le mouvement.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/contribuer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest-900 text-cream-50 text-sm md:text-base font-sans font-medium hover:bg-forest-700 transition-colors rounded-[18px]"
            >
              Je contribue
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INNOVATION QUOTE — Aurora green */}
      {/* ============================================================ */}
      <section className="relative px-6 md:px-10 py-28 bg-forest-900 text-cream-50 overflow-hidden">
        {/* CSS-only animated gradient (cheap substitute for Aurora WebGL) */}
        <AuroraGradient />

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
      <section className="relative px-6 md:px-10 py-28 overflow-hidden border-t border-ink-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-forest-900 font-sans font-semibold mb-4">
              Pourquoi l&rsquo;open source
            </p>
            <h2 className="font-sans tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 leading-[1.05] mb-5 text-balance">
              Vos ressources, <em className="italic text-forest-900">vos règles</em> !
            </h2>
            <p className="text-base md:text-lg text-ink-700 max-w-2xl mx-auto leading-relaxed font-sans">
              Le code du site, les Skills, les guides : tout est entièrement
              accessible et open-source. Je propose tout ça gratuitement pour
              permettre à chaque marketeur d&rsquo;accéder facilement à ces
              ressources, sans avoir à dépenser de l&rsquo;argent pour des
              fonctionnalités à la portée de tous.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-cream-50 border border-ink-100 rounded-[25px] p-8 md:p-10 hover:border-forest-900/30 transition-colors">
              <div className="flex items-baseline justify-between mb-6">
                <p className="text-xs tracking-[0.2em] uppercase text-ink-500 font-sans font-semibold">
                  Code
                </p>
                <span className="font-sans text-xl text-forest-900 font-bold">
                  MIT
                </span>
              </div>
              <h3 className="font-sans tracking-tight text-2xl md:text-3xl text-ink-900 font-bold leading-tight mb-4">
                Copiez, adaptez, réutilisez.
              </h3>
              <p className="text-base text-ink-700 leading-relaxed font-sans mb-6">
                Tout le code du site est publié sous licence MIT. Concrètement :
                vous pouvez le copier, le modifier et le réutiliser librement,
                même pour un projet commercial, sans demander la permission.
                La seule règle : conserver la petite mention de copyright.
                Pas de piège, pas de conditions cachées.
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
                  Ressources
                </p>
                <span className="font-sans text-xl text-forest-900 font-bold">
                  0&nbsp;€
                </span>
              </div>
              <h3 className="font-sans tracking-tight text-2xl md:text-3xl text-ink-900 font-bold leading-tight mb-4">
                Gratuit, et ça le restera.
              </h3>
              <p className="text-base text-ink-700 leading-relaxed font-sans mb-6">
                Skills, guides, documentation : tout est accessible gratuitement,
                sans paywall ni freemium déguisé. Join Médicis a pour objectif de
                rester gratuit. La meilleure façon de soutenir le projet, c&rsquo;est
                de le partager sur vos réseaux. Et je suis ouvert aux partenariats,
                à une condition : qu&rsquo;ils apportent une vraie valeur ajoutée
                aux utilisateurs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm text-forest-900 hover:text-forest-700 transition-colors font-sans font-medium"
              >
                Me contacter
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
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
