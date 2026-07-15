import type { Metadata } from "next";
import ResourceComingSoon from "@/components/sections/ResourceComingSoon";

export const metadata: Metadata = {
  alternates: { canonical: "/ressources/plugins" },
  title: "Plugins",
  description:
    "Les plugins étendent les IA avec des Skills, des agents, des hooks et des serveurs MCP.",
};

export default function PluginsPage() {
  return (
    <ResourceComingSoon
      title="Plugins"
      description="Les plugins étendent les IA avec des skills, des agents, des hooks et des serveurs MCP."
    />
  );
}
