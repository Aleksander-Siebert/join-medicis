export type CollectionPalette = {
  light: string;
  mid: string;
  dark: string;
  accent?: string;
};

export type BookCollection = {
  slug: string;
  label: string;
  shortLabel: string;
  description: string;
  longDescription: string;
  palette: CollectionPalette;
  shapeSeed: number;
};

export const collections: BookCollection[] = [
  {
    slug: "skills-mcp",
    label: "Skills & MCP",
    shortLabel: "Skills · MCP",
    description:
      "Compétences Claude prêtes à charger et serveurs Model Context Protocol pour connecter vos outils.",
    longDescription:
      "Une Skill Claude transforme un assistant générique en outil métier sur-mesure. Un serveur MCP connecte Claude à votre stack (HubSpot, Notion, Linear, Sheets...). Cette collection rassemble les Skills publiées, les serveurs MCP recommandés, et les guides pour construire les vôtres en partant de zéro.",
    palette: { light: "#E8F0F8", mid: "#5B8AB8", dark: "#1E3A5F", accent: "#9CC2E0" },
    shapeSeed: 1,
  },
  {
    slug: "agents-automation",
    label: "Agents IA & Automation",
    shortLabel: "Agents · Automation",
    description:
      "Agents autonomes et workflows n8n / Make orchestrés de bout en bout.",
    longDescription:
      "Un agent IA exécute des tâches multi-étapes sans supervision continue : enrichissement de leads, qualification de comptes, monitoring de marque. Les workflows n8n et Make orchestrent des chaînes d'actions multi-outils. Vous trouverez ici des architectures complètes, prêtes à dupliquer.",
    palette: { light: "#E8F1ED", mid: "#3E8E6F", dark: "#0E3F2D", accent: "#A8D4BD" },
    shapeSeed: 2,
  },
  {
    slug: "vibe-coding",
    label: "Vibe Coding",
    shortLabel: "Vibe coding",
    description:
      "Coder à l'instinct avec Claude Code, Cursor, et l'écosystème AI-native.",
    longDescription:
      "Le vibe coding, c'est piloter Claude Code ou Cursor à l'intention plutôt qu'à la syntaxe. Cette collection couvre les patterns, les pièges, les setups, et les retours d'expérience de marketers et builders francophones qui livrent des outils internes sans être devs au départ.",
    palette: { light: "#F2E8F0", mid: "#B889C4", dark: "#5A3A6B", accent: "#E8C2DE" },
    shapeSeed: 3,
  },
  {
    slug: "formations-certifications",
    label: "Formations & Certifications",
    shortLabel: "Formations",
    description:
      "Parcours d'apprentissage et certifications IA pour Growth Marketers.",
    longDescription:
      "Quelles formations valent le coup ? Quelles certifications signalent vraiment quelque chose ? Comparatifs, retours d'expérience, et parcours d'apprentissage curés — du gratuit au payant — pour devenir crédible en IA appliquée sans perdre 6 mois.",
    palette: { light: "#F5E8D4", mid: "#C9A96E", dark: "#6B4A1F", accent: "#E8D4A8" },
    shapeSeed: 4,
  },
  {
    slug: "data-protection",
    label: "Data & Protection des données",
    shortLabel: "Data · RGPD",
    description:
      "RGPD, sécurité, gouvernance des prompts et des données envoyées aux LLM.",
    longDescription:
      "Envoyer des données client à un LLM, c'est un acte juridique. Cette collection couvre le RGPD appliqué à l'IA, les contrats DPA des principaux fournisseurs, la gouvernance interne, et les patterns d'anonymisation à mettre en place avant la première Skill en production.",
    palette: { light: "#E8EBEF", mid: "#6B7B8C", dark: "#2A3845", accent: "#B5C2CE" },
    shapeSeed: 5,
  },
  {
    slug: "ai-growth-marketing",
    label: "AI × Growth & Marketing",
    shortLabel: "AI × Growth",
    description:
      "GEO, AI SEO, tendances et workflows IA pour les équipes Growth & Marketing.",
    longDescription:
      "Comment Claude et les autres LLM changent concrètement les workflows Growth & Marketing en 2026 ? GEO (Generative Engine Optimization), AI SEO, automation outbound, briefs de contenu, audits CRO assistés — les patterns observés sur le terrain, sans hype.",
    palette: { light: "#F5D9C2", mid: "#E89052", dark: "#8B4A1A", accent: "#F2B889" },
    shapeSeed: 6,
  },
  {
    slug: "join-medicis-news",
    label: "Join Médicis",
    shortLabel: "Le journal",
    description:
      "News, actualités, snapshots produit et coulisses de la bibliothèque.",
    longDescription:
      "Les annonces de nouvelles Skills, les snapshots produit, les coulisses, les analyses du marché Growth × IA francophone. Un journal éditorial pour suivre l'avancée du projet et la maturation de l'écosystème.",
    palette: { light: "#F2E5D8", mid: "#C77A6E", dark: "#6B2828", accent: "#E8B8AE" },
    shapeSeed: 7,
  },
];

export function getCollectionBySlug(slug: string): BookCollection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getAllCollectionSlugs(): string[] {
  return collections.map((c) => c.slug);
}
