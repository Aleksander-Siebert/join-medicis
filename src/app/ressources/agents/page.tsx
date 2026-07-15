import type { Metadata } from "next";
import ResourceComingSoon from "@/components/sections/ResourceComingSoon";

export const metadata: Metadata = {
  alternates: { canonical: "/ressources/agents" },
  title: "Agents IA",
  description:
    "Les configurations essentielles pour paramétrer vos futurs agents autonomes : Claude, LangGraph, CrewAI, Dust et autres.",
};

export default function AgentsPage() {
  return (
    <ResourceComingSoon
      title="Agents IA"
      description="Découvrez les configurations essentielles pour paramétrer vos futurs agents autonomes que ça soit via Claude, LangGraph, CrewAI, Dust ou autres !"
    />
  );
}
