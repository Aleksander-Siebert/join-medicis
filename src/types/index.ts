export type Category = "seo" | "prospection" | "cro" | "analytics" | "strategie" | "contenu" | "mcp";
export type LLMSupport = "full" | "partial" | "none";
export type LLMName = "claude" | "chatgpt" | "gemini" | "mistral";

export interface LLMCompatibility {
  claude: LLMSupport;
  chatgpt: LLMSupport;
  gemini: LLMSupport;
  mistral?: LLMSupport;
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  /** Photo de profil (chemin public, ex. "/team/aleksander-siebert.jpg"). À défaut : initiales. */
  avatar?: string;
  /** Bannière personnalisable (chemin public). À défaut : fond vert. */
  banner?: string;
  /** IA préférée affichée en badge (ex. "Claude"). */
  favoriteAI?: string;
  /** Masque l'auteur de la grille /auteurs et du sitemap (non-contributeur). */
  hidden?: boolean;
  /** Hashtags affichés sous le nom. À défaut, dérivés des Skills de l'auteur. */
  tags?: string[];
  /** Domaines d'expertise (pills). À défaut, dérivés des catégories de ses Skills. */
  expertise?: string[];
  /** Citation éditoriale affichée en exergue. */
  quote?: string;
  /** Localisation affichée dans l'en-tête (ex. « Basé en France »). */
  location?: string;
  /** Email de contact public affiché dans l'en-tête. */
  email?: string;
  /** Date d'arrivée affichée dans la carte de stats (ex. « Janvier 2025 »). */
  memberSince?: string;
  links?: {
    linkedin?: string;
    github?: string;
    website?: string;
    twitter?: string;
  };
}

export interface Skill {
  slug: string;
  name: string;
  description: string;
  /** Image de couverture (chemin local dans /public, ex. "/skill-images/x.webp", ou URL https). */
  image?: string;
  category: Category;
  subcategory?: string;
  llm: LLMCompatibility;
  timeSaved: string;
  resultMetric?: string;
  testedBy: number;
  version: string;
  tags: string[];
  authorSlug?: string;
  publishedAt?: string;
  downloads?: number;
  views?: number;
  /** FAQ spécifique au Skill. À défaut, 5 questions sont générées depuis ses données. */
  faq?: FAQItem[];
  /** Problème concret que le Skill résout (bloc « À propos »). À défaut, texte générique. */
  problem?: string;
  /** Ce que le Skill fait concrètement (bloc « À propos »). À défaut, texte générique. */
  solution?: string;
  /** Pourquoi il est recommandé (ex. « prérequis avant tous les autres Skills »). */
  whyRecommended?: string;
  /** Variantes sectorielles disponibles (e-commerce, SaaS B2B…). */
  variants?: { sector: string; name: string; slug?: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  name: string;
  description: string;
  target: string;
  installTime: string;
  tags: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  authorSlug: string;
  readingTime: string;
  tags: string[];
  comingSoon?: boolean;
}

export interface CategoryItem {
  id: string;
  label: string;
  description: string;
  count: number;
  href: string;
  comingSoon?: boolean;
}

export type EcosystemCategory =
  | "entreprises"
  | "individus"
  | "leaders"
  | "gouvernement"
  | "autres";

export interface EcosystemResource {
  slug: string;
  name: string;
  /** Organisation / éditeur (ex. "Lemlist"). */
  org: string;
  category: EcosystemCategory;
  /** Phrase courte affichée sur la carte. */
  tagline: string;
  /** Description longue affichée sur la page détail. */
  description: string;
  /** Logo : chemin local dans /public (ex. "/ecosystem-logos/lemlist.svg") ou URL https. */
  logo?: string;
  /** Bannière (chemin public, ex. "/ecosystem-banners/lemlist.jpg"). À défaut : fond vert + placeholder. */
  banner?: string;
  /** URL officielle de la ressource (CTA externe dofollow sur la page détail). */
  url?: string;
  /** Résumé court « En bref » pour situer rapidement l'entité (bloc entre le hero et « À propos »). */
  summary?: string;
  /** Réseaux / médias officiels de l'entité, affichés en boutons-icônes. */
  socials?: {
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    instagram?: string;
    website?: string;
    github?: string;
  };
  /** Ce qui est partagé (ex. ["Skills", "Guide", "Vidéo"]) — affiché en tags. À défaut : `type`. */
  shares?: string[];
  /** Étiquette de nature (ex. "Skills", "Outil", "MCP"). */
  type?: string;
  /** Langue(s) (ex. "FR", "EN", "EN + FR"). */
  lang?: string;
  /** Points clés listés sur la page détail. */
  highlights?: string[];
  /** "Ce qu'on y trouve" : contenu concret de la ressource. */
  whatYouGet?: { icon?: "skill" | "file" | "video" | "code" | "check"; title: string; desc: string }[];
  /** Forces, testées en conditions réelles. */
  strengths?: string[];
  /** Limites, en toute honnêteté. */
  limitations?: string[];
  /** URL YouTube (watch ou embed) d'une vidéo de présentation. */
  videoUrl?: string;
  /** Libellé de la vidéo (ex. "Vidéo de présentation"). */
  videoLabel?: string;
  /** Créateurs de la ressource. */
  creators?: { name: string; role: string; contribution: string }[];
  /** Questions fréquentes spécifiques à la ressource. */
  faq?: { q: string; a: string }[];
}
