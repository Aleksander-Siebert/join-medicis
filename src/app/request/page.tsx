import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/request" },
  title: "Demander un Skill",
  description:
    "Tu cherches un Skill qui n'existe pas encore dans la bibliothèque ? Fais une demande, on étudie chaque proposition.",
};

export default function RequestPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-5 font-sans">
            Demander un Skill
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-900 mb-5">
            Tu ne trouves pas le Skill dont tu as besoin ?
          </h1>
          <p className="text-ink-500 leading-relaxed font-sans">
            Décris ton besoin, on étudie chaque proposition. Les Skills les plus
            demandés passent en haut de la roadmap.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <form
            action="https://tally.so/r/placeholder"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans"
              >
                Ton email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="tu@entreprise.fr"
                className="w-full px-4 py-3 border border-ink-200 bg-cream-50 text-ink-900 placeholder-ink-300 font-sans text-sm focus:outline-none focus:border-forest-900 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans"
              >
                Ton rôle
              </label>
              <input
                type="text"
                id="role"
                name="role"
                placeholder="Growth Lead, SEO Consultant, CMO…"
                className="w-full px-4 py-3 border border-ink-200 bg-cream-50 text-ink-900 placeholder-ink-300 font-sans text-sm focus:outline-none focus:border-forest-900 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="skill-name"
                className="block text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans"
              >
                Nom suggéré du Skill
              </label>
              <input
                type="text"
                id="skill-name"
                name="skill-name"
                required
                placeholder="ex : Audit LinkedIn Ads B2B"
                className="w-full px-4 py-3 border border-ink-200 bg-cream-50 text-ink-900 placeholder-ink-300 font-sans text-sm focus:outline-none focus:border-forest-900 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans"
              >
                Que devrait faire ce Skill ?
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={6}
                placeholder="Décris le besoin concret : quel input tu donnerais, quel output tu attendrais, le cas d'usage où ça t'éviterait du travail."
                className="w-full px-4 py-3 border border-ink-200 bg-cream-50 text-ink-900 placeholder-ink-300 font-sans text-sm focus:outline-none focus:border-forest-900 transition-colors resize-none"
              />
            </div>

            <div>
              <label
                htmlFor="time-saved"
                className="block text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans"
              >
                Temps que tu y consacres aujourd&rsquo;hui (estimation)
              </label>
              <input
                type="text"
                id="time-saved"
                name="time-saved"
                placeholder="ex : 2h / semaine"
                className="w-full px-4 py-3 border border-ink-200 bg-cream-50 text-ink-900 placeholder-ink-300 font-sans text-sm focus:outline-none focus:border-forest-900 transition-colors"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-forest-900 text-cream-50 text-sm tracking-wide hover:bg-forest-700 transition-colors font-sans"
              >
                Envoyer ma demande →
              </button>
            </div>

            <p className="text-xs text-ink-300 font-sans">
              On répond à toutes les demandes sous 5 jours. En attendant, jette
              un œil aux{" "}
              <Link href="/ressources/skills" className="underline hover:text-ink-500">
                Skills déjà publiés
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
