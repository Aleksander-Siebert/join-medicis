import type { Metadata } from "next";
import GlossaryClient from "@/components/glossary/GlossaryClient";
import JsonLd from "@/components/seo/JsonLd";
import { glossary } from "@/lib/glossary";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/glossaire" },
  title: "Glossaire IA",
  description:
    "Chaque terme important de l'IA, expliqué. Glossaire IA, Growth Marketing et systèmes agentiques, curé par Join Médicis pour les marketeurs francophones.",
};

const GLOSSARY_URL = `${SITE_URL}/glossaire`;

const definedTermSet = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": GLOSSARY_URL,
  name: "Glossaire IA — Join Médicis",
  description:
    "Glossaire des termes d'IA, de Growth Marketing et des systèmes agentiques, en français.",
  url: GLOSSARY_URL,
  inLanguage: "fr-FR",
  hasDefinedTerm: glossary.map((term) => ({
    "@type": "DefinedTerm",
    name: term.title,
    description: term.description,
    inDefinedTermSet: GLOSSARY_URL,
  })),
};

export default function GlossaryPage() {
  return (
    <div className="pt-16 min-h-screen bg-cream-100">
      <JsonLd
        data={[
          definedTermSet,
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Glossaire IA", path: "/glossaire" },
          ]),
        ]}
      />
      <GlossaryClient />
    </div>
  );
}
