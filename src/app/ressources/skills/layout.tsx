import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills Claude",
  description:
    "La bibliothèque de Skills Claude prêtes à charger pour les marketeurs francophones : SEO, prospection, CRO, analytics, stratégie.",
  alternates: { canonical: "/ressources/skills" },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
