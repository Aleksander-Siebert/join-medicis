import type { Metadata } from "next";
import AuroraGradient from "@/components/effects/AuroraGradient";
import ContributeForm from "@/components/contribuer/ContributeForm";

export const metadata: Metadata = {
  alternates: { canonical: "/contribuer" },
  title: "Contribuer",
  description:
    "Proposez un Skill, un serveur MCP ou une ressource à Join Médicis. Chaque soumission est testée et validée manuellement, réponse sous 72 h.",
};

const heroChecks = [
  "5 critères de qualité",
  "Validation éditoriale manuelle",
  "Réponse sous 72 h",
];

const pipeline = [
  { n: "1", title: "Soumettez", desc: "Via le formulaire ci-dessous", active: false },
  { n: "2", title: "Je sélectionne", desc: "Validation éditoriale manuelle", active: true },
  { n: "3", title: "Vous recevez", desc: "Accepté ou refus motivé sous 72 h", active: false },
  { n: "4", title: "Publication", desc: "+ flair Contributeur sur votre profil", active: false },
];

const checklist = [
  "La ressource a été testée en conditions réelles par un humain.",
  "Elle apporte quelque chose qui n'existe pas encore dans l'écosystème.",
  "Des métriques de résultat ou cas d'usage concrets sont documentés.",
  "Aucun credential ou clé API exposé.",
  "Rédigé en français natif, pas une traduction automatique.",
];

function Check() {
  return (
    <span className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center shrink-0 mt-0.5">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0E3F2D" strokeWidth="3" aria-hidden="true">
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function ContributePage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* ===================== HERO (green banner) ===================== */}
      <div className="relative bg-forest-900 text-cream-50 px-6 py-20 overflow-hidden">
        <AuroraGradient />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block text-[11px] tracking-[0.15em] uppercase font-sans font-semibold bg-cream-50/10 text-cream-50 px-3 py-1 rounded-full mb-5">
            Open-source
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-6">
            Contribuer à Join Médicis
          </h1>
          <p className="text-cream-50/85 font-sans leading-relaxed text-base md:text-lg max-w-2xl mx-auto mb-8">
            Join Médicis ne publie pas tout — et c&rsquo;est voulu. Chaque ressource est
            testée, vérifiée et sélectionnée par le fondateur avant d&rsquo;apparaître sur le
            site. Soumettez votre ressource via le formulaire : vous recevrez une réponse
            sous 72&nbsp;h, acceptée ou non, avec une raison dans les deux cas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {heroChecks.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 text-sm text-cream-50/90 font-sans">
                <span className="w-5 h-5 rounded-full bg-cream-50/15 flex items-center justify-center shrink-0">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== CONTENT over the fresco ===================== */}
      <div className="relative px-6 py-20 overflow-hidden">
        {/* Background painting */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/michelangelo-creation-adam.webp')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% 30%, rgba(250,247,240,0.88) 0%, rgba(250,247,240,0.7) 55%, rgba(250,247,240,0.45) 100%)",
          }}
        />

        <div className="max-w-3xl mx-auto space-y-14">
          {/* Pipeline — comment ça marche */}
          <section>
            <p className="text-xs tracking-[0.15em] uppercase text-forest-900 font-sans font-semibold mb-5">
              Comment ça marche
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {pipeline.map((step) => (
                <div
                  key={step.n}
                  className={`rounded-[16px] p-5 text-center border ${
                    step.active
                      ? "bg-cream-100 border-forest-900/30"
                      : "bg-cream-50/95 border-ink-100"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-sans font-semibold ${
                      step.active ? "bg-forest-900 text-cream-50" : "bg-forest-100 text-forest-900"
                    }`}
                  >
                    {step.n}
                  </div>
                  <p className="text-sm font-sans font-semibold text-ink-900 mb-1">{step.title}</p>
                  <p className="text-xs text-ink-500 font-sans leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Submission form */}
          <section className="bg-cream-50/95 backdrop-blur-sm border border-ink-100 rounded-[24px] p-8 md:p-10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)]">
            <p className="text-xs tracking-[0.15em] uppercase text-forest-900 font-sans font-semibold mb-1.5">
              Formulaire de soumission
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink-900 mb-7">
              Proposer une ressource
            </h2>
            <ContributeForm />
          </section>

          {/* Quality checklist */}
          <section className="bg-cream-50/95 backdrop-blur-sm border border-ink-100 rounded-[24px] p-8 md:p-10">
            <p className="text-xs tracking-[0.15em] uppercase text-forest-900 font-sans font-semibold mb-1.5">
              Checklist qualité
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink-900 mb-6">
              Ce que je vérifie avant d&rsquo;accepter
            </h2>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check />
                  <span className="text-sm text-ink-900 font-sans leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* GitHub mention */}
          <p className="text-sm text-ink-700 font-sans leading-relaxed border-t border-ink-200/60 pt-8">
            Vous préférez contribuer directement via GitHub ?{" "}
            <a
              href="https://github.com/Aleksander-Siebert/join-medicis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest-900 font-medium underline underline-offset-4 hover:text-forest-700 transition-colors"
            >
              Le repo est ouvert
            </a>{" "}
            — lisez le CONTRIBUTING.md avant d&rsquo;ouvrir une PR.
          </p>
        </div>
      </div>
    </div>
  );
}
