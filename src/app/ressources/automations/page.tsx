import type { Metadata } from "next";
import ResourceComingSoon from "@/components/sections/ResourceComingSoon";

export const metadata: Metadata = {
  alternates: { canonical: "/ressources/automations" },
  title: "Automations",
  description:
    "Workflows n8n, Make et Zapier connectant les outils marketing et les LLMs, adaptés aux réels besoins des marketeurs.",
};

export default function AutomationsPage() {
  return (
    <ResourceComingSoon
      title="Automations"
      description="Retrouvez des workflows n8n, Make et Zapier connectant différents outils marketing et les LLMs. Ces workflows seront adaptés aux réels besoins des marketeurs."
    />
  );
}
