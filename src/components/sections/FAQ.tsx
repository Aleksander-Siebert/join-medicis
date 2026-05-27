"use client";

import { useState } from "react";
import Link from "next/link";

export type FAQItem = { question: string; answer: string };

const defaultFaqs: FAQItem[] = [
  {
    question: "C'est quoi exactement un Skill Claude ?",
    answer:
      "Un Skill est un fichier .md (markdown) contenant un system prompt structuré. Tu le télécharges, tu le colles dans les instructions d'un projet Claude.ai (ou de tout autre LLM compatible), et la conversation utilise automatiquement ces instructions. C'est ce qui transforme Claude en spécialiste d'une tâche précise (cold email, brief SEO, audit CRO…).",
  },
  {
    question: "Je n'ai aucune compétence technique. C'est pour moi ?",
    answer:
      "Oui, et c'est même la cible principale. Aucun terminal, aucune clé API à manipuler, aucun code à toucher. Tu télécharges un fichier .md, tu le colles dans un projet Claude — c'est tout. Chaque Skill a des étapes d'installation détaillées.",
  },
  {
    question: "Tout est vraiment gratuit ?",
    answer:
      "Oui. Toutes les ressources sont en open-source (code MIT, contenu CC BY 4.0). Il n'y a aucun paywall, aucun freemium déguisé. Seul abonnement éventuel : ton accès à Claude.ai ou un autre LLM, mais ça ne dépend pas de nous.",
  },
  {
    question: "Quelle différence entre un Skill et un MCP ?",
    answer:
      "Un Skill configure le comportement de Claude (le prompt système). Un MCP (Model Context Protocol) connecte Claude à un outil externe (Notion, Search Console, HubSpot…) pour qu'il puisse y lire et y écrire. Les deux se complètent — par exemple, un Skill SEO + le MCP Search Console = Claude qui analyse tes vrais classements.",
  },
  {
    question: "Je peux modifier un Skill pour l'adapter à mon entreprise ?",
    answer:
      "Absolument. La licence CC BY 4.0 t'autorise à modifier, forker, adapter, redistribuer — y compris en interne ou pour tes clients — à condition de citer l'auteur original et Join Médicis. Forke, adapte, publie ta version.",
  },
  {
    question: "Comment proposer un nouveau Skill ?",
    answer:
      "Deux options. Si tu veux le coder toi-même : fais une PR sur le repo GitHub (lis la page Contribuer pour le process). Si tu veux juste suggérer une idée : remplis le formulaire sur la page « Demander un Skill ».",
  },
  {
    question: "Tu testes vraiment chaque Skill avant publication ?",
    answer:
      "Oui. Chaque Skill est testé par au moins 10 membres en conditions réelles avant publication, et la métrique de résultat (+34% reply rate, -2h/semaine…) est mesurée, pas inventée. Si un Skill ne tient pas ses promesses sur 3 cas d'usage, il n'est pas publié.",
  },
  {
    question: "Sur quels LLM ça fonctionne ?",
    answer:
      "Tous les Skills sont conçus pour Claude (Anthropic) qui est l'environnement de référence. La plupart fonctionnent aussi très bien avec ChatGPT, Gemini et Mistral — chaque fiche Skill indique précisément le niveau de compatibilité par modèle.",
  },
];

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 text-ink-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

type FAQProps = {
  items?: FAQItem[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export default function FAQ({
  items = defaultFaqs,
  eyebrow = "Foire aux questions",
  title = "Vos questions, sans détour",
  subtitle = "Ce qu'on nous demande le plus souvent — depuis le concept de Skill jusqu'à la licence.",
}: FAQProps = {}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-ink-100 px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
            {eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink-900 mb-4">
            {title}
          </h2>
          <p className="text-ink-500 font-sans leading-relaxed">{subtitle}</p>
        </div>

        <ul className="divide-y divide-ink-100 border-y border-ink-100">
          {items.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li key={faq.question}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                >
                  <span
                    className={`font-serif text-lg leading-snug transition-colors ${
                      isOpen ? "text-ink-900" : "text-ink-700 group-hover:text-ink-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown open={isOpen} />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-ink-500 leading-relaxed font-sans pr-10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="text-center text-sm text-ink-500 mt-12 font-sans">
          Tu as une autre question ?{" "}
          <Link
            href="/contact"
            className="text-forest-900 hover:text-forest-700 transition-colors underline underline-offset-4"
          >
            Contacte-nous directement
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
