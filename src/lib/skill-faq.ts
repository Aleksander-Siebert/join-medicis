import type { Skill, FAQItem, LLMSupport } from "@/types";

const LLM_LABELS: Record<string, string> = {
  claude: "Claude",
  chatgpt: "ChatGPT",
  gemini: "Gemini",
  mistral: "Mistral",
};

/** Décrit la compatibilité LLM du Skill en une phrase lisible. */
function compatSentence(skill: Skill): string {
  const entries = Object.entries(skill.llm) as [string, LLMSupport | undefined][];
  const full = entries
    .filter(([, s]) => s === "full")
    .map(([k]) => LLM_LABELS[k] ?? k);
  const partial = entries
    .filter(([, s]) => s === "partial")
    .map(([k]) => LLM_LABELS[k] ?? k);

  const join = (arr: string[]) =>
    arr.length <= 1
      ? arr.join("")
      : `${arr.slice(0, -1).join(", ")} et ${arr[arr.length - 1]}`;

  let phrase = full.length
    ? `Il est pleinement compatible avec ${join(full)}`
    : "Il est optimisé pour Claude";
  if (partial.length) {
    phrase += `, et partiellement avec ${join(partial)}`;
  }
  return phrase + ".";
}

/** Détecte la licence à partir des tags (MIT vs CC BY 4.0 par défaut). */
function license(skill: Skill): string {
  return skill.tags.includes("mit") ? "MIT" : "CC BY 4.0";
}

/**
 * Génère 5 questions/réponses contextualisées à partir des données du Skill.
 * Si le Skill définit son propre champ `faq`, celui-ci est prioritaire.
 */
export function buildSkillFaq(skill: Skill): FAQItem[] {
  if (skill.faq && skill.faq.length > 0) return skill.faq;

  const name = skill.name;
  const result = skill.resultMetric ?? skill.timeSaved;

  return [
    {
      question: `Comment installer le Skill « ${name} » ?`,
      answer: `En trois étapes, sans code : 1) Télécharge le fichier .md depuis le bouton « Télécharger le Skill » ci-dessus. 2) Ouvre Claude.ai → crée un Projet → colle le contenu dans les instructions du projet. 3) Commence à converser : « ${name} » s'active automatiquement.`,
    },
    {
      question: `« ${name} » fonctionne-t-il avec ChatGPT ou seulement Claude ?`,
      answer: `Tous nos Skills sont conçus et testés en priorité sur Claude (Anthropic), notre environnement de référence. ${compatSentence(
        skill,
      )} La section « LLM compatibles » en haut de page indique le niveau exact par modèle.`,
    },
    {
      question: `Qu'est-ce que « ${name} » me fait gagner concrètement ?`,
      answer: `Le Skill fait gagner ${skill.timeSaved} et vise un résultat mesuré : ${result}. Il a été testé par ${skill.testedBy} membres en conditions réelles avant publication — les métriques affichées sont mesurées, pas inventées.`,
    },
    {
      question: `Ai-je besoin de compétences techniques pour utiliser « ${name} » ?`,
      answer: `Non. Aucun terminal, aucune clé API, aucun code à manipuler. Si tu sais télécharger un fichier et le copier-coller dans un projet Claude, tu sais utiliser « ${name} ». C'est justement la cible : rendre l'IA accessible aux marketeurs non-techniques.`,
    },
    {
      question: `Puis-je modifier « ${name} » et l'utiliser pour mes clients ?`,
      answer: `Oui. « ${name} » est gratuit et open-source (licence ${license(
        skill,
      )}). Tu peux le forker, l'adapter à ton entreprise ou à tes clients, et redistribuer ta version — à condition de citer l'auteur original et Join Médicis.`,
    },
  ];
}
