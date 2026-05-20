export type Difficulty = "debutant" | "intermediaire" | "avance";
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
  avatar?: string;
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
  category: Category;
  subcategory?: string;
  difficulty: Difficulty;
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
}

export interface Guide {
  slug: string;
  name: string;
  description: string;
  target: string;
  installTime: string;
  difficulty: Difficulty;
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
