import type { Metadata } from "next";
import AuroraGradient from "@/components/effects/AuroraGradient";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description: "Contactez l'équipe Join Médicis.",
};

const FIELD =
  "w-full px-4 py-3 bg-cream-50 border border-ink-200 rounded-[12px] text-ink-900 text-sm font-sans placeholder:text-ink-400 focus:border-forest-900 focus:outline-none focus:ring-2 focus:ring-forest-900/15 transition-colors";
const LABEL =
  "block text-xs tracking-widest uppercase text-ink-700 mb-2 font-sans font-semibold";

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* HERO */}
      <div className="relative bg-forest-900 text-cream-50 px-6 py-24 overflow-hidden">
        <AuroraGradient />
        <div className="relative max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-cream-50/70 mb-4 font-sans font-semibold">
            Contact
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-cream-50 mb-6 leading-[1.05]">
            Parlons-en !
          </h1>
          <p className="text-cream-50/85 font-sans leading-relaxed text-base md:text-lg">
            Une question sur un Skill, une proposition de partenariat, ou une
            idée de contribution ? Écrivez-nous !
          </p>
        </div>
      </div>

      {/* FORM over the fresco */}
      <div className="relative px-6 py-20 overflow-hidden">
        {/* Background image — Michelangelo, same as the homepage hero */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/michelangelo-creation-adam.webp')" }}
        />
        {/* Soft wash so the fresco stays subtle behind the card */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(250,247,240,0.85) 0%, rgba(250,247,240,0.6) 55%, rgba(250,247,240,0.35) 100%)",
          }}
        />

        <div className="max-w-lg mx-auto bg-cream-50/95 backdrop-blur-sm border border-ink-100 rounded-[24px] p-8 md:p-10 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={LABEL}>Prénom</label>
                <input type="text" className={FIELD} placeholder="Votre prénom" />
              </div>
              <div>
                <label className={LABEL}>Nom</label>
                <input type="text" className={FIELD} placeholder="Votre nom" />
              </div>
            </div>

            <div>
              <label className={LABEL}>Email</label>
              <input type="email" className={FIELD} placeholder="votre@email.com" />
            </div>

            <div>
              <label className={LABEL}>Sujet</label>
              <select className={`${FIELD} appearance-none`}>
                <option value="">Sélectionnez un sujet</option>
                <option value="skill">Question sur un Skill</option>
                <option value="contribution">Proposer une contribution</option>
                <option value="partenariat">Partenariat</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className={LABEL}>Message</label>
              <textarea
                rows={5}
                className={`${FIELD} resize-none`}
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-forest-900 text-cream-50 text-sm tracking-wide hover:bg-forest-700 transition-colors font-sans font-medium rounded-[12px]"
            >
              Envoyer le message
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-ink-100">
            <p className="text-xs tracking-widest uppercase text-ink-700 mb-4 font-sans font-semibold">
              Ou directement
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/aleksander-siebert/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-900 hover:text-forest-900 transition-colors font-sans underline underline-offset-4"
              >
                LinkedIn · @aleksander-siebert
              </a>
              <a
                href="https://github.com/aleksander-siebert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-900 hover:text-forest-900 transition-colors font-sans underline underline-offset-4"
              >
                GitHub · @aleksander-siebert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
