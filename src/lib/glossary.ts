export type GlossaryTier = 1 | 2 | 3;

export type GlossaryTerm = {
  slug: string;
  title: string;
  description: string;
  tier: GlossaryTier;
  aliases?: string[];
  /** Force a specific alphabet bucket (e.g. "#") instead of the first letter. */
  bucket?: string;
};

export const tierLabels: Record<GlossaryTier, string> = {
  1: "Fondamentaux IA",
  2: "Growth & Marketing IA",
  3: "Agentique & émergent",
};

export const glossary: GlossaryTerm[] = [
  // ====================== TIER 1 — FONDAMENTAUX IA ======================
  {
    slug: "intelligence-artificielle",
    title: "Intelligence artificielle",
    description:
      "Système informatique capable d'exécuter des tâches qui requièrent habituellement de l'intelligence humaine : raisonnement, apprentissage, perception, prise de décision.",
    tier: 1,
    aliases: ["IA"],
  },
  {
    slug: "modele-de-langage",
    title: "Modèle de langage (LLM)",
    description:
      "Système d'IA entraîné sur d'immenses corpus de texte pour comprendre et générer du langage naturel. Exemples : Claude, GPT, Gemini, Llama.",
    tier: 1,
    aliases: ["LLM"],
  },
  {
    slug: "token-tokenisation",
    title: "Token / Tokenisation",
    description:
      "Unité élémentaire qu'un LLM lit (souvent 3–4 caractères ou un mot court). La tokenisation découpe le texte en tokens avant traitement.",
    tier: 1,
  },
  {
    slug: "prompt",
    title: "Prompt",
    description:
      "Instruction ou message envoyé à un LLM pour déclencher une réponse.",
    tier: 1,
  },
  {
    slug: "prompt-engineering",
    title: "Prompt engineering",
    description:
      "Discipline consistant à concevoir, tester et itérer des prompts pour obtenir des réponses fiables et utiles d'un LLM.",
    tier: 1,
  },
  {
    slug: "hallucination-ia",
    title: "Hallucination IA",
    description:
      "Réponse d'un LLM qui semble plausible mais est factuellement fausse ou inventée.",
    tier: 1,
  },
  {
    slug: "fine-tuning",
    title: "Fine-tuning",
    description:
      "Réentraînement d'un modèle pré-existant sur un dataset spécifique pour spécialiser ses réponses sur un domaine métier.",
    tier: 1,
  },
  {
    slug: "rag",
    title: "RAG (Retrieval-Augmented Generation)",
    description:
      "Architecture où le LLM consulte d'abord une base de connaissances externe avant de générer sa réponse, pour ancrer ses outputs dans des données vérifiables.",
    tier: 1,
  },
  {
    slug: "embedding",
    title: "Embedding",
    description:
      "Représentation vectorielle d'un texte (ou autre donnée) qui capture son sens sous forme de chiffres, base de la recherche sémantique.",
    tier: 1,
  },
  {
    slug: "fenetre-de-contexte",
    title: "Fenêtre de contexte",
    description:
      "Volume maximal de tokens (input + output) qu'un LLM peut traiter en une seule requête.",
    tier: 1,
    aliases: ["context window"],
  },
  {
    slug: "temperature",
    title: "Température",
    description:
      "Paramètre qui contrôle l'aléatoire des réponses d'un LLM : 0 = déterministe, 1 = créatif.",
    tier: 1,
  },
  {
    slug: "zero-shot-few-shot",
    title: "Zero-shot / Few-shot learning",
    description:
      "Capacité d'un LLM à résoudre une tâche sans (zero-shot) ou avec quelques exemples (few-shot) dans le prompt.",
    tier: 1,
  },
  {
    slug: "chain-of-thought",
    title: "Chain-of-thought (chaîne de pensée)",
    description:
      "Technique de prompting où l'on demande au LLM de raisonner étape par étape avant de donner sa réponse finale.",
    tier: 1,
  },
  {
    slug: "ia-generative",
    title: "IA générative",
    description:
      "Famille de modèles d'IA qui produisent du contenu original (texte, image, code, audio) plutôt que classifier ou prédire.",
    tier: 1,
  },
  {
    slug: "modele-multimodal",
    title: "Modèle multimodal",
    description:
      "Modèle capable de traiter et générer plusieurs types de média : texte, image, audio, vidéo.",
    tier: 1,
  },
  {
    slug: "machine-learning",
    title: "Machine learning",
    description:
      "Branche de l'IA où les systèmes apprennent à partir de données plutôt que d'être programmés explicitement.",
    tier: 1,
  },
  {
    slug: "reseau-de-neurones",
    title: "Réseau de neurones",
    description:
      "Architecture inspirée du cerveau biologique, composée de couches de neurones interconnectés, à la base des LLM modernes.",
    tier: 1,
  },
  {
    slug: "transformer",
    title: "Transformer",
    description:
      "Architecture neuronale (2017) avec mécanisme d'attention qui a permis l'explosion des LLM modernes (GPT, Claude, Gemini).",
    tier: 1,
  },
  {
    slug: "inference",
    title: "Inférence",
    description:
      "Phase d'exécution d'un modèle entraîné : on lui pose une question, il répond. À distinguer de l'entraînement.",
    tier: 1,
  },
  {
    slug: "biais-algorithmique",
    title: "Biais algorithmique",
    description:
      "Tendance d'un modèle à produire des réponses systématiquement biaisées à cause de données d'entraînement déséquilibrées.",
    tier: 1,
  },
  {
    slug: "guardrails",
    title: "Garde-fou IA (guardrails)",
    description:
      "Mécanisme qui bloque ou redirige les requêtes problématiques avant qu'elles n'atteignent le modèle ou avant que sa réponse soit servie.",
    tier: 1,
  },
  {
    slug: "system-prompt",
    title: "System prompt",
    description:
      "Instructions cachées qui définissent le rôle, le ton et les règles d'un assistant IA avant la conversation utilisateur.",
    tier: 1,
  },
  {
    slug: "ia-open-source-proprietaire",
    title: "IA open source vs propriétaire",
    description:
      "Modèles dont les poids sont publiquement accessibles (Llama, Mistral, DeepSeek) versus modèles fermés accessibles via API uniquement (Claude, GPT, Gemini).",
    tier: 1,
  },
  {
    slug: "copilote-ia",
    title: "Copilote IA",
    description:
      "Assistant intégré à un outil métier (IDE, CRM, suite bureautique) qui suggère et exécute des actions en temps réel.",
    tier: 1,
  },
  {
    slug: "api-ia",
    title: "API (contexte IA)",
    description:
      "Interface programmatique pour appeler un modèle d'IA depuis votre propre application.",
    tier: 1,
  },

  // ====================== TIER 2 — GROWTH & MARKETING IA ======================
  {
    slug: "ai-seo",
    title: "AI SEO",
    description:
      "Optimisation d'un contenu pour les moteurs de recherche traditionnels assistée par IA (clusters, briefs, rédaction, audit).",
    tier: 2,
  },
  {
    slug: "aeo",
    title: "AEO (Answer Engine Optimization)",
    description:
      "Optimisation pour les moteurs de réponse (Perplexity, You.com) qui renvoient une réponse directe plutôt qu'une liste de liens.",
    tier: 2,
  },
  {
    slug: "geo",
    title: "GEO (Generative Engine Optimization)",
    description:
      "Optimisation pour apparaître dans les réponses générées par les LLM (ChatGPT, Claude, Gemini, Google AI Overviews).",
    tier: 2,
  },
  {
    slug: "llmo",
    title: "LLMO (LLM Optimization)",
    description:
      "Synonyme courant de GEO : pratiques pour maximiser la citation et la mention de votre marque dans les outputs de LLM.",
    tier: 2,
  },
  {
    slug: "share-of-model",
    title: "Share of Model",
    description:
      "Pourcentage du temps où un LLM cite ou recommande votre marque pour une catégorie de requêtes donnée. Équivalent IA du Share of Voice.",
    tier: 2,
  },
  {
    slug: "growth-hacking-ia",
    title: "Growth hacking IA",
    description:
      "Tactiques d'acquisition et d'activation accélérées par l'IA : génération de variantes, automatisation des tests, scoring rapide.",
    tier: 2,
  },
  {
    slug: "marketing-automation-ia",
    title: "Marketing automation IA",
    description:
      "Orchestration de campagnes multicanal pilotée par des LLM qui adaptent contenu, segmentation et timing en temps réel.",
    tier: 2,
  },
  {
    slug: "lead-scoring-ia",
    title: "Lead scoring IA",
    description:
      "Notation automatique des leads sur leur probabilité de conversion via un modèle entraîné sur l'historique CRM.",
    tier: 2,
  },
  {
    slug: "personnalisation-ia",
    title: "Personnalisation IA",
    description:
      "Adaptation du contenu, des recommandations et de l'UX à chaque utilisateur via des modèles prédictifs.",
    tier: 2,
  },
  {
    slug: "ia-generative-contenu",
    title: "IA générative pour le contenu",
    description:
      "Production assistée d'articles, emails, posts sociaux, scripts à partir de briefs structurés.",
    tier: 2,
  },
  {
    slug: "web-scraping-ia",
    title: "Web scraping IA",
    description:
      "Extraction automatisée de données du web où un LLM interprète des pages non structurées pour produire des datasets propres.",
    tier: 2,
  },
  {
    slug: "outbound-automation",
    title: "Outbound automation",
    description:
      "Orchestration end-to-end de campagnes de cold outreach : recherche, enrichissement, séquencement, qualification.",
    tier: 2,
  },
  {
    slug: "enrichissement-de-donnees",
    title: "Enrichissement de données",
    description:
      "Ajout d'attributs supplémentaires (firmographics, intent signals, scoring) à une base de contacts ou de comptes.",
    tier: 2,
    aliases: ["data enrichment"],
  },
  {
    slug: "cold-outreach-ia",
    title: "Cold outreach IA",
    description:
      "Personnalisation à l'échelle de messages outbound : une IA lit chaque profil et compose un message contextuel unique.",
    tier: 2,
  },
  {
    slug: "growth-loop",
    title: "Growth loop",
    description:
      "Mécanisme d'acquisition auto-entretenu où l'output d'un cycle alimente l'input du suivant (e.g. UGC → SEO → trafic → UGC).",
    tier: 2,
  },
  {
    slug: "north-star-metric",
    title: "North Star Metric",
    description:
      "Indicateur unique qui capture la valeur livrée par un produit et guide les décisions de croissance.",
    tier: 2,
  },
  {
    slug: "product-led-growth",
    title: "Product-led growth (PLG)",
    description:
      "Stratégie où le produit lui-même est le principal moteur d'acquisition, conversion et expansion.",
    tier: 2,
  },
  {
    slug: "ab-testing-ia",
    title: "A/B testing assisté par IA",
    description:
      "Génération automatique de variantes (copy, design) et analyse statistique accélérée par modèle prédictif.",
    tier: 2,
  },
  {
    slug: "analytics-predictif",
    title: "Analytics prédictif",
    description:
      "Modèles qui anticipent un comportement futur (churn, conversion, LTV) à partir des données historiques.",
    tier: 2,
  },
  {
    slug: "customer-journey-ia",
    title: "Customer journey augmenté par IA",
    description:
      "Cartographie et activation du parcours client où chaque étape est instrumentée par un modèle décisionnel.",
    tier: 2,
  },
  {
    slug: "chatbot-ia",
    title: "Chatbot IA / Assistant conversationnel",
    description:
      "Agent capable de tenir une conversation en langage naturel pour qualifier, supporter, vendre ou onboarder.",
    tier: 2,
  },
  {
    slug: "scoring-predictif",
    title: "Scoring prédictif",
    description:
      "Notation IA qui combine plusieurs signaux pour prédire un événement (achat, churn, fraude).",
    tier: 2,
  },
  {
    slug: "donnees-structurees-json-ld",
    title: "Données structurées (JSON-LD) pour l'IA",
    description:
      "Balisage sémantique de pages web (schema.org) que les LLM et search engines exploitent pour citer correctement.",
    tier: 2,
  },
  {
    slug: "citation-ia",
    title: "Citation IA",
    description:
      "Mention nominative de votre marque ou de votre contenu dans la réponse générée par un LLM. KPI central du GEO.",
    tier: 2,
    aliases: ["AI citation"],
  },

  // ====================== TIER 3 — AGENTIQUE & ÉMERGENT ======================
  {
    slug: "agent-ia",
    title: "Agent IA",
    description:
      "Système qui exécute plusieurs étapes de raisonnement et d'action pour atteindre un objectif, sans supervision continue.",
    tier: 3,
    aliases: ["AI agent"],
  },
  {
    slug: "workflow-agentique",
    title: "Workflow agentique",
    description:
      "Chaîne d'actions automatisées où des agents IA collaborent ou se relaient pour accomplir un processus métier.",
    tier: 3,
  },
  {
    slug: "mcp",
    title: "MCP (Model Context Protocol)",
    description:
      "Standard ouvert publié par Anthropic en 2024 qui permet à Claude de se connecter à des outils externes (CRM, bases de données, APIs).",
    tier: 3,
  },
  {
    slug: "skill",
    title: "Skill (Claude skill)",
    description:
      "Module .md qui ajoute des compétences spécialisées à Claude : instructions, exemples, ressources, scripts.",
    tier: 3,
  },
  {
    slug: "sous-agent",
    title: "Sous-agent (sub-agent)",
    description:
      "Agent spécialisé invoqué par un agent principal pour une sous-tâche (recherche, code, validation).",
    tier: 3,
  },
  {
    slug: "orchestration-multi-agents",
    title: "Orchestration multi-agents",
    description:
      "Coordination de plusieurs agents IA distincts qui se passent le contexte et se relaient sur une mission.",
    tier: 3,
  },
  {
    slug: "tool-use",
    title: "Tool use",
    description:
      "Capacité d'un LLM à invoquer des fonctions externes (API, base, calcul, scraping) pendant son raisonnement.",
    tier: 3,
  },
  {
    slug: "claude-code",
    title: "Claude Code",
    description:
      "Outil officiel d'Anthropic qui transforme Claude en assistant de coding agentique opérant dans le terminal et l'IDE.",
    tier: 3,
  },
  {
    slug: "agent-autonome",
    title: "Agent autonome",
    description:
      "Agent qui boucle sur observe → décide → agit jusqu'à atteindre un état cible, sans demander de validation à chaque étape.",
    tier: 3,
  },
  {
    slug: "ia-agentique",
    title: "IA agentique (agentic AI)",
    description:
      "Catégorie d'IA caractérisée par la capacité à planifier, choisir des outils et exécuter de manière autonome.",
    tier: 3,
  },
  {
    slug: "memoire-persistante-ia",
    title: "Mémoire persistante IA",
    description:
      "Système permettant à un agent IA de se souvenir d'informations entre les sessions et les conversations.",
    tier: 3,
  },
  {
    slug: "artifact",
    title: "Artifact (Claude)",
    description:
      "Contenu interactif (code, document, app) généré par Claude et affiché dans un panneau séparé pour itération.",
    tier: 3,
  },
  {
    slug: "modele-de-raisonnement",
    title: "Modèle de raisonnement",
    description:
      "LLM optimisé pour des chaînes de raisonnement longues et auto-correctives (o1, Claude Opus 4 thinking).",
    tier: 3,
    aliases: ["reasoning model"],
  },
  {
    slug: "computer-use",
    title: "Computer use",
    description:
      "Capacité d'un LLM à contrôler un ordinateur via mouvements de souris, clics et frappes au clavier.",
    tier: 3,
  },
  {
    slug: "human-in-the-loop",
    title: "Human-in-the-loop",
    description:
      "Pattern où un humain valide ou corrige les décisions critiques d'un agent IA avant exécution.",
    tier: 3,
  },
  {
    slug: "prompt-chaining",
    title: "Prompt chaining",
    description:
      "Décomposition d'une tâche complexe en plusieurs prompts séquentiels, où la sortie de l'un nourrit l'entrée du suivant.",
    tier: 3,
  },
  {
    slug: "agent-to-agent",
    title: "Agent-to-agent (A2A)",
    description:
      "Communication directe entre agents IA via un protocole standardisé pour collaborer sur une tâche.",
    tier: 3,
  },
  {
    slug: "no-code-low-code-ia",
    title: "Automatisation no-code / low-code IA",
    description:
      "Plateformes (n8n, Make, Zapier) qui permettent d'orchestrer des workflows incluant des appels IA sans coder.",
    tier: 3,
  },
  {
    slug: "ia-souveraine",
    title: "IA souveraine",
    description:
      "Modèles, infrastructures et données entièrement contrôlés par un État ou une organisation pour des raisons stratégiques et de conformité.",
    tier: 3,
    aliases: ["sovereign AI"],
  },
  {
    slug: "vibe-coding",
    title: "Vibe coding",
    description:
      "Pratique consistant à piloter un assistant IA par l'intention plutôt que par la syntaxe, en décrivant ce qu'on veut sans coder soi-même.",
    tier: 3,
  },
  {
    slug: "model-routing",
    title: "Model routing",
    description:
      "Mécanisme qui choisit dynamiquement quel LLM appeler selon le coût, la latence ou la complexité de la tâche.",
    tier: 3,
  },
  {
    slug: "context-engineering",
    title: "Context engineering",
    description:
      "Discipline consistant à structurer, hiérarchiser et compresser le contexte fourni à un LLM pour optimiser la qualité des réponses.",
    tier: 3,
  },

  // ============ LES IA DU MARCHÉ (regroupées dans la section #) ============
  {
    slug: "chatgpt",
    title: "ChatGPT",
    description:
      "Assistant IA conversationnel d'OpenAI, lancé fin 2022. Le plus connu du grand public, propulsé par les modèles GPT.",
    tier: 1,
    aliases: ["OpenAI", "GPT"],
    bucket: "#",
  },
  {
    slug: "claude-ia",
    title: "Claude",
    description:
      "Assistant IA d'Anthropic, réputé pour son raisonnement, sa rédaction longue et son usage agentique (Skills, MCP, Claude Code).",
    tier: 1,
    aliases: ["Anthropic"],
    bucket: "#",
  },
  {
    slug: "gemini",
    title: "Gemini",
    description:
      "Famille de modèles multimodaux de Google, intégrée à Workspace, Android et la recherche. Successeur de Bard.",
    tier: 1,
    aliases: ["Google", "Bard"],
    bucket: "#",
  },
  {
    slug: "perplexity",
    title: "Perplexity",
    description:
      "Moteur de réponse IA qui combine recherche web en temps réel et génération, avec citation des sources. Référence de l'AEO.",
    tier: 1,
    bucket: "#",
  },
  {
    slug: "mistral",
    title: "Mistral (Vibe)",
    description:
      "Laboratoire français d'IA. Ses modèles open-weight et son assistant Vibe (ex-« Le Chat », renommé fin mai 2026) sont la référence souveraine européenne.",
    tier: 1,
    aliases: ["Vibe", "Le Chat", "Mistral AI"],
    bucket: "#",
  },
  {
    slug: "deepseek",
    title: "DeepSeek",
    description:
      "Laboratoire chinois d'IA open-weight, connu pour ses modèles de raisonnement performants à très faible coût.",
    tier: 1,
    bucket: "#",
  },
  {
    slug: "grok",
    title: "Grok",
    description:
      "Assistant IA de xAI (Elon Musk), intégré à X, au ton plus provocateur et connecté au flux temps réel du réseau.",
    tier: 1,
    aliases: ["xAI"],
    bucket: "#",
  },
  {
    slug: "llama",
    title: "Llama",
    description:
      "Famille de modèles open-weight de Meta, parmi les plus téléchargés au monde, base de nombreux modèles dérivés.",
    tier: 1,
    aliases: ["Meta"],
    bucket: "#",
  },
  {
    slug: "ollama",
    title: "Ollama",
    description:
      "Outil open-source pour faire tourner des LLM (Llama, Mistral, DeepSeek...) en local sur sa propre machine, sans cloud.",
    tier: 1,
    bucket: "#",
  },
  {
    slug: "copilot",
    title: "Copilot",
    description:
      "Assistant IA de Microsoft intégré à Windows, Office 365 et GitHub. S'appuie principalement sur les modèles d'OpenAI.",
    tier: 1,
    aliases: ["Microsoft Copilot", "GitHub Copilot"],
    bucket: "#",
  },
];

/**
 * Returns the first character used to bucket a term in the alphabet nav.
 * Strips accents (é→e, à→a) and falls back to "#" for non-letter starts.
 */
export function getBucket(term: GlossaryTerm): string {
  if (term.bucket) return term.bucket;
  const first = term.title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .charAt(0)
    .toUpperCase();
  return /^[A-Z]$/.test(first) ? first : "#";
}

export const ALPHABET = [
  "#",
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
];
