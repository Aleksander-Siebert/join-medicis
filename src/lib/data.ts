import { Skill, Guide, CategoryItem } from "@/types";

export const skills: Skill[] = [
  {
    slug: "growth-context-fr",
    name: "Growth Context",
    description:
      "Le Skill fondation : donne à Claude le contexte complet de ton business (produit, ICP, canaux, stack). Prérequis recommandé pour tous les autres Skills.",
    category: "strategie",
    subcategory: "Fondation",
    difficulty: "debutant",
    llm: { claude: "full", chatgpt: "full", gemini: "full" },
    timeSaved: "30 min/usage",
    resultMetric: "Contexte mémorisé",
    testedBy: 31,
    version: "1.0.0",
    tags: ["fondation", "contexte", "b2b"],
  },
  {
    slug: "cold-email-b2b-fr",
    name: "Cold Email B2B France",
    description:
      "Rédige des cold emails B2B ultra-personnalisés pour le marché français. Adapte le ton, les codes culturels et les objets aux standards hexagonaux.",
    category: "prospection",
    subcategory: "Cold Email",
    difficulty: "debutant",
    llm: { claude: "full", chatgpt: "full", gemini: "partial" },
    timeSaved: "45 min/semaine",
    resultMetric: "+34% taux de réponse",
    testedBy: 23,
    version: "1.2.0",
    tags: ["prospection", "b2b", "email", "marche-fr"],
  },
  {
    slug: "seo-brief-fr",
    name: "Brief SEO Complet",
    description:
      "Génère un brief SEO structuré depuis une URL ou un mot-clé. Analyse l'intention, la structure, les angles, les mots-clés LSI et les questions associées.",
    category: "seo",
    subcategory: "Brief éditorial",
    difficulty: "intermediaire",
    llm: { claude: "full", chatgpt: "full", gemini: "full" },
    timeSaved: "1h30/brief",
    resultMetric: "Brief complet en 3 min",
    testedBy: 18,
    version: "1.1.0",
    tags: ["seo", "brief", "contenu"],
  },
  {
    slug: "content-cluster-seo-fr",
    name: "Cluster de Contenu SEO",
    description:
      "Construit une architecture de cluster éditorial depuis un topic central. Génère la pillar page, les pages secondaires, le maillage interne et les angles différenciants.",
    category: "seo",
    subcategory: "Architecture de contenu",
    difficulty: "intermediaire",
    llm: { claude: "full", chatgpt: "partial", gemini: "partial" },
    timeSaved: "3h/cluster",
    resultMetric: "Architecture complète en 10 min",
    testedBy: 14,
    version: "1.0.0",
    tags: ["seo", "cluster", "architecture-contenu"],
  },
  {
    slug: "landing-audit-cro-fr",
    name: "Audit Landing Page CRO",
    description:
      "Analyse une landing page en profondeur : UX, copywriting, structure, preuves sociales, CTA, objections. Produit 15+ recommandations priorisées.",
    category: "cro",
    subcategory: "Audit",
    difficulty: "avance",
    llm: { claude: "full", chatgpt: "partial", gemini: "partial" },
    timeSaved: "2h/audit",
    resultMetric: "+12% conversion moyenne",
    testedBy: 11,
    version: "1.0.0",
    tags: ["cro", "landing-page", "conversion", "ux"],
  },
];

export const guides: Guide[] = [
  {
    slug: "installer-un-skill-sur-claude-ai",
    name: "Installer un Skill sur Claude.ai",
    description:
      "Guide débutant pas à pas : télécharger un Skill Join Médicis et le configurer dans un Projet Claude en moins de 5 minutes.",
    target: "Claude.ai",
    installTime: "5 minutes",
    difficulty: "debutant",
    tags: ["debutant", "claude", "installation"],
  },
  {
    slug: "connecter-claude-google-search-console",
    name: "Connecter Claude à Google Search Console",
    description:
      "Installe le serveur MCP GSC et donne à Claude un accès direct à tes données de performance SEO. Fini les exports CSV manuels.",
    target: "Google Search Console",
    installTime: "12 minutes",
    difficulty: "intermediaire",
    tags: ["mcp", "seo", "google", "data"],
  },
  {
    slug: "connecter-claude-notion-mcp",
    name: "Connecter Claude à Notion",
    description:
      "Configure le serveur MCP Notion pour que Claude puisse lire et écrire dans tes bases de données Notion directement depuis une conversation.",
    target: "Notion",
    installTime: "10 minutes",
    difficulty: "intermediaire",
    tags: ["mcp", "notion", "workflow"],
  },
];

export const homeCategories: CategoryItem[] = [
  {
    id: "seo",
    label: "SEO & Contenu",
    description: "Briefs, clusters éditoriaux, optimisation on-page",
    count: 2,
    href: "/skills?category=seo",
  },
  {
    id: "prospection",
    label: "Prospection & Outbound",
    description: "Cold email, LinkedIn outreach, qualification de leads",
    count: 1,
    href: "/skills?category=prospection",
  },
  {
    id: "cro",
    label: "CRO & Conversion",
    description: "Audit landing page, A/B testing, copywriting",
    count: 1,
    href: "/skills?category=cro",
  },
  {
    id: "analytics",
    label: "Analytics & Reporting",
    description: "Analyse de données, reporting automatisé",
    count: 0,
    href: "/skills?category=analytics",
    comingSoon: true,
  },
  {
    id: "strategie",
    label: "Stratégie",
    description: "ICP Analysis, channel mix, positionnement",
    count: 1,
    href: "/skills?category=strategie",
  },
  {
    id: "guides",
    label: "Guides MCP",
    description: "Connecter Claude à vos outils favoris",
    count: 3,
    href: "/guides",
  },
];

export const siteStats = {
  skillsCount: skills.length,
  guidesCount: guides.length,
  membersCount: 47,
  projetsCount: 3,
};
