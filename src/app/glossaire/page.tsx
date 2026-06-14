import type { Metadata } from "next";
import GlossaryClient from "@/components/glossary/GlossaryClient";

export const metadata: Metadata = {
  title: "Glossaire IA",
  description:
    "71 termes essentiels d'IA, Growth Marketing et systèmes agentiques, expliqués en une phrase. Curé par Join Médicis pour les marketers francophones.",
};

export default function GlossaryPage() {
  return (
    <div className="pt-16 min-h-screen bg-cream-100">
      <GlossaryClient />
    </div>
  );
}
