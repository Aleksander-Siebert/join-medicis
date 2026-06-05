import {
  Skill,
  Guide,
  CategoryItem,
  Author,
  BlogArticle,
  EcosystemResource,
} from "@/types";

export const authors: Author[] = [
  {
    slug: "aleksander-siebert",
    name: "Aleksander Siebert",
    role: "Growth Marketer · Fondateur Join Médicis",
    bio: "Growth Marketer francophone obsédé par l'intersection IA & marketing. Fondateur de Join Médicis pour rendre l'IA accessible aux marketeurs sans compétences techniques.",
    tags: ["#Growth", "#IA", "#SEO", "#Claude", "#B2B", "#NoCode"],
    expertise: [
      "Growth Marketing",
      "IA & Automatisation",
      "SEO & Contenu",
      "CRO & Landing Pages",
      "Cold Outbound",
      "Stratégie B2B",
    ],
    quote:
      "Je crois que l'IA doit être accessible à tous les marketeurs — sans jargon, sans code, sans hype.",
    location: "Basé en France",
    memberSince: "Janvier 2025",
    links: {
      linkedin: "https://www.linkedin.com/in/aleksander-siebert/",
      github: "https://github.com/aleksander-siebert",
    },
  },
  {
    slug: "jeremy-goillot",
    name: "Jérémy Goillot",
    role: "Head of Growth · Spendesk",
    bio: "10+ ans en Growth B2B. Spécialiste cold outbound, content marketing et architecture de funnels.",
    tags: ["#Growth", "#Outbound", "#B2B", "#ColdEmail", "#Funnels"],
    expertise: [
      "Cold Outbound",
      "Content Marketing",
      "Architecture de Funnels",
      "Growth B2B",
    ],
    location: "Paris, France",
    memberSince: "Janvier 2025",
    links: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    slug: "claire-martin",
    name: "Claire Martin",
    role: "Senior SEO Consultant",
    bio: "Consultante SEO indépendante, ex-Doctolib. Spécialiste briefs éditoriaux et architectures de clusters pour le marché francophone.",
    tags: ["#SEO", "#Contenu", "#Clusters", "#Editorial"],
    expertise: [
      "SEO Éditorial",
      "Briefs de Contenu",
      "Clusters Thématiques",
      "Architecture de Contenu",
    ],
    location: "France",
    memberSince: "Janvier 2025",
    links: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    slug: "corey-haines",
    name: "Corey Haines",
    role: "Marketing Skills · marketingskills.io",
    bio: "Auteur de la bibliothèque open-source marketingskills (MIT). Spécialiste SEO programmatique et AI SEO. Ses Skills sont republiés ici avec attribution.",
    tags: ["#SEO", "#pSEO", "#AISEO", "#MIT", "#OpenSource"],
    expertise: [
      "Programmatic SEO",
      "AI SEO (AEO / GEO)",
      "Skills Open-Source",
      "SEO à grande échelle",
    ],
    location: "marketingskills.io",
    memberSince: "Janvier 2025",
    links: {
      github: "https://github.com/coreyhaines31/marketingskills",
      website: "https://marketingskills.io",
    },
  },
];

export const skills: Skill[] = [
  {
    slug: "growth-context-fr",
    name: "Growth Context",
    description:
      "Le Skill fondation : donne à Claude le contexte complet de ton business (produit, ICP, canaux, stack). Prérequis recommandé pour tous les autres Skills.",
    image: "/skill-images/demo-growth-context.webp",
    category: "strategie",
    subcategory: "Fondation",
    llm: { claude: "full", chatgpt: "full", gemini: "full", mistral: "partial" },
    timeSaved: "30 min/usage",
    resultMetric: "Contexte mémorisé",
    testedBy: 31,
    version: "1.0.0",
    tags: ["fondation", "contexte", "b2b"],
    authorSlug: "aleksander-siebert",
    publishedAt: "2026-03-12",
    downloads: 342,
    views: 1820,
  },
  {
    slug: "cold-email-b2b-fr",
    name: "Cold Email B2B France",
    description:
      "Rédige des cold emails B2B ultra-personnalisés pour le marché français. Adapte le ton, les codes culturels et les objets aux standards hexagonaux.",
    category: "prospection",
    subcategory: "Cold Email",
    llm: { claude: "full", chatgpt: "full", gemini: "partial", mistral: "partial" },
    timeSaved: "45 min/semaine",
    resultMetric: "+34% taux de réponse",
    testedBy: 23,
    version: "1.2.0",
    tags: ["prospection", "b2b", "email", "marche-fr"],
    authorSlug: "jeremy-goillot",
    publishedAt: "2026-04-02",
    downloads: 287,
    views: 1450,
  },
  {
    slug: "seo-brief-fr",
    name: "Brief SEO Complet",
    description:
      "Génère un brief SEO structuré depuis une URL ou un mot-clé. Analyse l'intention, la structure, les angles, les mots-clés LSI et les questions associées.",
    category: "seo",
    subcategory: "Brief éditorial",
    llm: { claude: "full", chatgpt: "full", gemini: "full", mistral: "partial" },
    timeSaved: "1h30/brief",
    resultMetric: "Brief complet en 3 min",
    testedBy: 18,
    version: "1.1.0",
    tags: ["seo", "brief", "contenu"],
    authorSlug: "claire-martin",
    publishedAt: "2026-04-15",
    downloads: 198,
    views: 980,
  },
  {
    slug: "content-cluster-seo-fr",
    name: "Cluster de Contenu SEO",
    description:
      "Construit une architecture de cluster éditorial depuis un topic central. Génère la pillar page, les pages secondaires, le maillage interne et les angles différenciants.",
    category: "seo",
    subcategory: "Architecture de contenu",
    llm: { claude: "full", chatgpt: "partial", gemini: "partial" },
    timeSaved: "3h/cluster",
    resultMetric: "Architecture complète en 10 min",
    testedBy: 14,
    version: "1.0.0",
    tags: ["seo", "cluster", "architecture-contenu"],
    authorSlug: "claire-martin",
    publishedAt: "2026-05-01",
    downloads: 156,
    views: 740,
  },
  {
    slug: "landing-audit-cro-fr",
    name: "Audit Landing Page CRO",
    description:
      "Analyse une landing page en profondeur : UX, copywriting, structure, preuves sociales, CTA, objections. Produit 15+ recommandations priorisées.",
    category: "cro",
    subcategory: "Audit",
    llm: { claude: "full", chatgpt: "partial", gemini: "partial" },
    timeSaved: "2h/audit",
    resultMetric: "+12% conversion moyenne",
    testedBy: 11,
    version: "1.0.0",
    tags: ["cro", "landing-page", "conversion", "ux"],
    authorSlug: "aleksander-siebert",
    publishedAt: "2026-05-08",
    downloads: 89,
    views: 510,
  },
  {
    slug: "programmatic-seo",
    name: "Programmatic SEO",
    description:
      "Construit des architectures de pages SEO à grande échelle (location pages, comparison pages, directory pages). Évite les pénalités thin content via une vraie valeur par page.",
    category: "seo",
    subcategory: "pSEO",
    llm: { claude: "full", chatgpt: "partial", gemini: "partial" },
    timeSaved: "8h/projet pSEO",
    resultMetric: "Stratégie pSEO complète en 15 min",
    testedBy: 24,
    version: "2.0.0",
    tags: ["seo", "pseo", "templates", "scale", "mit"],
    authorSlug: "corey-haines",
    publishedAt: "2026-05-20",
    downloads: 64,
    views: 380,
  },
  {
    slug: "ai-seo",
    name: "AI SEO (AEO / GEO)",
    description:
      "Optimise le contenu pour être cité par ChatGPT, Perplexity, Claude, Gemini et AI Overviews. Couvre l'AEO, le GEO, le LLMO et la visibilité dans les réponses génératives.",
    category: "seo",
    subcategory: "AEO / GEO",
    llm: { claude: "full", chatgpt: "full", gemini: "partial" },
    timeSaved: "3h/audit AI SEO",
    resultMetric: "Plan AI visibility en 20 min",
    testedBy: 18,
    version: "2.0.1",
    tags: ["seo", "aeo", "geo", "llmo", "chatgpt", "mit"],
    authorSlug: "corey-haines",
    publishedAt: "2026-05-22",
    downloads: 47,
    views: 290,
  },
];

export const guides: Guide[] = [
  {
    slug: "installer-un-skill-sur-claude-ai",
    name: "Installer un Skill sur Claude.ai",
    description:
      "Guide pas à pas : télécharger un Skill Join Médicis et le configurer dans un Projet Claude en moins de 5 minutes.",
    target: "Claude.ai",
    installTime: "5 minutes",
    tags: ["claude", "installation"],
  },
  {
    slug: "connecter-claude-google-search-console",
    name: "Connecter Claude à Google Search Console",
    description:
      "Installe le serveur MCP GSC et donne à Claude un accès direct à tes données de performance SEO. Fini les exports CSV manuels.",
    target: "Google Search Console",
    installTime: "12 minutes",
    tags: ["mcp", "seo", "google", "data"],
  },
  {
    slug: "connecter-claude-notion-mcp",
    name: "Connecter Claude à Notion",
    description:
      "Configure le serveur MCP Notion pour que Claude puisse lire et écrire dans tes bases de données Notion directement depuis une conversation.",
    target: "Notion",
    installTime: "10 minutes",
    tags: ["mcp", "notion", "workflow"],
  },
];

export const blogArticles: BlogArticle[] = [
  {
    slug: "pourquoi-join-medicis",
    title: "Pourquoi Join Médicis ?",
    excerpt:
      "83 % des marketeurs francophones utilisent l'IA, mais seulement 17 % l'ont vraiment intégrée. On vous raconte comment on compte combler ce vide.",
    publishedAt: "2026-05-10",
    authorSlug: "aleksander-siebert",
    readingTime: "5 min",
    tags: ["manifesto", "growth", "ia"],
    comingSoon: true,
  },
  {
    slug: "anatomie-skill-claude",
    title: "Anatomie d'un Skill Claude bien construit",
    excerpt:
      "Frontmatter YAML, sections §0 à §3, dossier references — décortiqué étape par étape, avec les pièges à éviter.",
    publishedAt: "2026-05-15",
    authorSlug: "aleksander-siebert",
    readingTime: "8 min",
    tags: ["skills", "tutoriel", "claude"],
    comingSoon: true,
  },
  {
    slug: "growth-vs-ia",
    title: "Growth × IA : 5 workflows qui changent la donne en 2026",
    excerpt:
      "Outbound personnalisé, briefs SEO auto, audits CRO assistés — les patterns qui marchent vraiment, par ceux qui les utilisent au quotidien.",
    publishedAt: "2026-05-18",
    authorSlug: "jeremy-goillot",
    readingTime: "12 min",
    tags: ["workflows", "growth", "ia"],
    comingSoon: true,
  },
];

export const homeCategories: CategoryItem[] = [
  {
    id: "seo",
    label: "SEO & Contenu",
    description: "Briefs, clusters, programmatic SEO, AI SEO",
    count: 4,
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
  authorsCount: authors.length,
};

export const ecosystem: EcosystemResource[] = [
  {
    slug: "lemlist",
    name: "Skills Lemlist",
    org: "Lemlist",
    category: "entreprises",
    tagline:
      "Les Skills officiels de Lemlist pour personnaliser les séquences d'outreach avec Claude.",
    description:
      "Lemlist met à disposition des Skills officiels pour piloter ses séquences de cold outreach directement avec Claude. L'objectif : personnaliser à l'échelle sans perdre la voix de marque, et industrialiser la rédaction des emails et des relances.",
    url: "https://www.lemlist.com",
    type: "Skills",
    lang: "EN + FR",
    highlights: [
      "Personnalisation des séquences d'outreach assistée par IA",
      "Pensé pour les équipes Sales & Growth B2B",
      "Compatible avec les workflows lemlist existants",
    ],
  },
  {
    slug: "corey-haines",
    name: "Marketing Skills",
    org: "Corey Haines",
    category: "individus",
    tagline:
      "La collection de référence en anglais (17k★ GitHub). Base de travail de nombreux Skills Join Médicis.",
    description:
      "Marketing Skills est la bibliothèque open-source de Corey Haines, devenue une référence dans la communauté. Elle couvre le SEO programmatique, l'AI SEO et de nombreux workflows growth. Plusieurs Skills Join Médicis s'en inspirent et la créditent.",
    url: "https://github.com/coreyhaines31/marketingskills",
    type: "Skills",
    lang: "EN",
    highlights: [
      "17k★ sur GitHub, licence MIT",
      "Spécialisée SEO programmatique & AI SEO",
      "Source de plusieurs Skills republiés ici avec attribution",
    ],
  },
  {
    slug: "lawvable",
    name: "Skills Lawvable",
    org: "Lawvable",
    category: "entreprises",
    tagline:
      "Preuve de concept du modèle bibliothèque sectorielle : 70+ Skills juridiques, UX de référence.",
    description:
      "Lawvable applique le modèle de bibliothèque de Skills au secteur juridique, avec plus de 70 Skills spécialisés. C'est une excellente démonstration de ce qu'une bibliothèque sectorielle bien construite peut offrir, tant côté contenu que côté expérience utilisateur.",
    url: "https://lawvable.com",
    type: "Skills",
    lang: "FR",
    highlights: [
      "70+ Skills juridiques spécialisés",
      "Modèle de bibliothèque sectorielle",
      "Référence UX pour Join Médicis",
    ],
  },
  {
    slug: "anthropic",
    name: "Anthropic & Claude",
    org: "Anthropic",
    category: "entreprises",
    tagline:
      "L'éditeur de Claude : documentation officielle, Skills et bonnes pratiques pour construire avec l'IA.",
    description:
      "Anthropic est la société à l'origine de Claude, l'environnement de référence de tous les Skills Join Médicis. Sa documentation officielle, ses guides et ses ressources sur les Skills et les MCP sont la source primaire pour comprendre et exploiter le modèle.",
    url: "https://www.anthropic.com",
    type: "Plateforme",
    lang: "EN + FR",
    highlights: [
      "Créateur de Claude (modèles Opus, Sonnet, Haiku)",
      "Documentation officielle Skills & MCP",
      "Environnement de référence de Join Médicis",
    ],
  },
];
