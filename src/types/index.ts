export type Difficulty = "debutant" | "intermediaire" | "avance";
export type Category = "seo" | "prospection" | "cro" | "analytics" | "strategie" | "contenu" | "mcp";
export type LLMSupport = "full" | "partial" | "none";

export interface LLMCompatibility {
  claude: LLMSupport;
  chatgpt: LLMSupport;
  gemini: LLMSupport;
  mistral?: LLMSupport;
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

export interface CategoryItem {
  id: string;
  label: string;
  description: string;
  count: number;
  href: string;
  comingSoon?: boolean;
}
