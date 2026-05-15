import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'équipe Join Médicis.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="border-b border-ink-100 px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <div
            className="w-px h-16 bg-gradient-to-b from-transparent to-ink-100 mx-auto mb-12"
            aria-hidden="true"
          />
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
            Contact
          </p>
          <h1 className="font-serif text-5xl font-light text-ink-900 mb-6">
            Parlons-en
          </h1>
          <p className="text-ink-500 font-sans leading-relaxed">
            Une question sur un Skill, une proposition de partenariat, ou
            une idée de contribution ? Écrivez-nous.
          </p>
        </div>
      </div>

      <div className="px-6 py-20">
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans">
                  Prénom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-cream-200 border border-transparent focus:border-ink-200 focus:bg-cream-50 focus:outline-none text-ink-700 text-sm font-sans transition-colors"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-cream-200 border border-transparent focus:border-ink-200 focus:bg-cream-50 focus:outline-none text-ink-700 text-sm font-sans transition-colors"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-cream-200 border border-transparent focus:border-ink-200 focus:bg-cream-50 focus:outline-none text-ink-700 text-sm font-sans transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans">
                Sujet
              </label>
              <select className="w-full px-4 py-3 bg-cream-200 border border-transparent focus:border-ink-200 focus:bg-cream-50 focus:outline-none text-ink-700 text-sm font-sans transition-colors appearance-none">
                <option value="">Sélectionnez un sujet</option>
                <option value="skill">Question sur un Skill</option>
                <option value="contribution">Proposer une contribution</option>
                <option value="partenariat">Partenariat éditorial</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-cream-200 border border-transparent focus:border-ink-200 focus:bg-cream-50 focus:outline-none text-ink-700 text-sm font-sans transition-colors resize-none"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-forest-900 text-cream-50 text-sm tracking-wide hover:bg-forest-700 transition-colors font-sans"
            >
              Envoyer le message
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-ink-100">
            <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
              Ou directement
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/aleksander-siebert/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-700 hover:text-forest-900 transition-colors font-sans underline underline-offset-4"
              >
                LinkedIn — @aleksander-siebert
              </a>
              <a
                href="https://github.com/aleksander-siebert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-700 hover:text-forest-900 transition-colors font-sans underline underline-offset-4"
              >
                GitHub — @aleksander-siebert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
