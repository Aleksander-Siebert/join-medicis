import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/confidentialite" },
  title: "Politique de confidentialité",
};

export default function ConfidentialitePage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
            RGPD
          </p>
          <h1 className="font-serif text-4xl font-light text-ink-900">
            Politique de confidentialité
          </h1>
        </div>
      </div>

      <div className="px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-10 text-ink-500 font-sans">
          {[
            {
              title: "Données collectées",
              content:
                "Join Médicis collecte uniquement les données strictement nécessaires : adresse email (si inscription à la newsletter), données d'usage anonymisées via Umami Analytics (sans cookies, RGPD-conforme).",
            },
            {
              title: "Analytics",
              content:
                "Nous utilisons Umami Analytics, un outil d'analyse sans cookies et sans tracking publicitaire. Aucune donnée personnelle n'est collectée via les analytics. Aucun consentement n'est requis.",
            },
            {
              title: "Newsletter",
              content:
                "Si vous vous abonnez à la newsletter, votre adresse email est stockée avec votre consentement explicite. Vous pouvez vous désabonner à tout moment via le lien présent dans chaque email. Vos données ne sont jamais vendues ni transmises à des tiers.",
            },
            {
              title: "Cookies",
              content:
                "Ce site n'utilise pas de cookies publicitaires. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.",
            },
            {
              title: "Vos droits",
              content:
                "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données. Pour exercer ces droits, contactez-nous via le formulaire de contact.",
            },
            {
              title: "Transfert de données",
              content:
                "Aucun transfert de données personnelles hors de l'Union Européenne, à l'exception de l'hébergement sur Vercel (encadré par des garanties contractuelles adéquates).",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl font-light text-ink-900 mb-3">
                {section.title}
              </h2>
              <p className="leading-relaxed">{section.content}</p>
            </div>
          ))}

          <p className="text-xs text-ink-300 pt-8 border-t border-ink-100">
            Dernière mise à jour : Mai 2025
          </p>
        </div>
      </div>
    </div>
  );
}
