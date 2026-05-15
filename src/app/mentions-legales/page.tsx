import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
            Légal
          </p>
          <h1 className="font-serif text-4xl font-light text-ink-900">
            Mentions légales
          </h1>
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="max-w-3xl mx-auto prose prose-sm text-ink-500 font-sans space-y-10">
          {[
            {
              title: "Éditeur du site",
              content:
                "Join Médicis est un projet open-source édité par Aleksander Siebert. Placeholder — Ajoutez ici vos informations légales complètes (nom, adresse, SIRET si applicable).",
            },
            {
              title: "Hébergement",
              content:
                "Le site est hébergé par Vercel Inc., 340 Pine Street, Suite 800, San Francisco, CA 94104, États-Unis.",
            },
            {
              title: "Propriété intellectuelle",
              content:
                "Les ressources publiées sur Join Médicis sont distribuées sous Licence MIT. Le code source est disponible sur GitHub. La marque « Join Médicis » et le contenu éditorial sont la propriété de leurs auteurs respectifs.",
            },
            {
              title: "Responsabilité",
              content:
                "Les Skills et ressources publiés sont fournis à titre informatif et éducatif. Join Médicis ne garantit pas les résultats obtenus lors de l'utilisation de ces ressources. L'utilisateur est seul responsable de l'usage qu'il en fait.",
            },
            {
              title: "Contact",
              content:
                "Pour toute question légale : via le formulaire de contact ou directement via LinkedIn.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl font-light text-ink-900 mb-3">
                {section.title}
              </h2>
              <p className="leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
