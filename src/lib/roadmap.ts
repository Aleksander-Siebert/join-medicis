export type RoadmapColumn = {
  id: string;
  title: string;
  subtitle?: string;
  /** Accent color used for the dot + top border. */
  accent: string;
  items: string[];
};

export const roadmap: RoadmapColumn[] = [
  {
    id: "live",
    title: "En ligne",
    accent: "#2D7259",
    items: [
      "🌐 Le site de Join Médicis",
      "⚙️ Le répertoire GitHub open source et accessible",
      "🔴 La communauté Reddit r/JoinMedicis",
      "✉️ La Newsletter Growth with Claude 🐙",
      "📚 Les premières ressources disponibles",
    ],
  },
  {
    id: "short",
    title: "Court terme",
    subtitle: "1–3 mois",
    accent: "#B89253",
    items: [
      "🧠 De nouveaux Skills disponibles dans les différentes catégories",
      "⚡ Des guides d'installation concrets et accessibles",
      "✍️ Des articles utiles et pratiques publiés régulièrement",
      "🔗 Développement de la page Écosystème",
    ],
  },
  {
    id: "mid",
    title: "Moyen terme",
    subtitle: "3–9 mois",
    accent: "#5B8AB8",
    items: [
      "🔌 Page Plugins disponible + ressources associées",
      "⚙️ Page Automations : workflows n8n, Make et Zapier disponibles",
      "🤖 Page Agents IA : premiers agents prêts à déployer",
      "🧠 Nouveaux Skills et guides MCP",
      "📦 Skills Packs disponibles : ressources groupées pour simplifier la vie des équipes marketing",
    ],
  },
  {
    id: "long",
    title: "Long terme",
    subtitle: "12–18 mois",
    accent: "#8C6BB0",
    items: [
      "🌍 Version anglaise complète du site et des contenus",
      "🎓 Premiers événements et hackathons (étudiants, entreprises, associations)",
      "🎁 Surprise",
    ],
  },
];

export const roadmapFaq: { q: string; a: string }[] = [
  {
    q: "Comment voter pour une feature ?",
    a: "Rendez-vous sur r/JoinMedicis et trouvez le thread épinglé « 🗳 Vote Features ». Un upvote = une voix. Les idées les plus soutenues remontent dans les priorités du prochain cycle. Je tiens compte aussi de la complexité technique et de la cohérence avec la vision du projet.",
  },
  {
    q: "Comment contribuer une ressource au projet ?",
    a: "Join Médicis est open source et vit grâce aux contributions. Vous pouvez proposer un Skill, un template, un guide ou une correction via une Pull Request sur GitHub. Pour en savoir plus sur le processus, rendez-vous sur la page Contribuer : tout y est expliqué étape par étape.",
  },
  {
    q: "Comment suggérer une idée absente de la roadmap ?",
    a: "Créez un post sur r/JoinMedicis avec le flair [Feature Request]. Si l'idée n'existe pas encore, la communauté peut upvoter pour lui donner de la visibilité. Les suggestions les plus soutenues atterrissent dans la roadmap au cycle suivant.",
  },
  {
    q: "Comment soutenir le projet sans coder ?",
    a: "La meilleure façon d'aider : parlez de Join Médicis autour de vous. Partagez le site à un collègue marketer, mentionnez-le dans un post LinkedIn, ou partagez une ressource qui vous a aidé. La visibilité du projet dépend entièrement de la communauté.",
  },
];

export const REDDIT_URL = "https://www.reddit.com/r/JoinMedicis/";
