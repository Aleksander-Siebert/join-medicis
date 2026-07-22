import Link from "next/link";
import Image from "next/image";
import { Skill } from "@/types";

const categoryLabels: Record<string, string> = {
  fondation: "Fondation",
  seo: "SEO & Contenu",
  prospection: "Prospection",
  cro: "CRO & Conversion",
  analytics: "Analytics",
  strategie: "Stratégie",
  contenu: "Contenu",
  mcp: "MCP",
};

function LLMTag({
  label,
  support,
}: {
  label: string;
  support: "full" | "partial" | "none";
}) {
  if (support === "none") return null;
  return (
    <span
      className={`text-xs px-2 py-0.5 font-sans ${
        support === "full"
          ? "bg-forest-50 text-forest-700 border border-forest-100"
          : "bg-cream-200 text-ink-300 border border-cream-300"
      }`}
    >
      {support === "partial" ? `${label} ~` : `${label} ✓`}
    </span>
  );
}

export default function SkillCard({ skill }: { skill: Skill }) {
  // Skill annoncé mais pas encore publié : carte compacte, non cliquable.
  // On masque les stats (temps gagné, testeurs, LLM) qui n'ont pas encore de sens.
  if (skill.comingSoon) {
    return (
      <article className="border border-dashed border-ink-200 bg-cream-100 h-full flex flex-col p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <span className="text-xs tracking-widest uppercase text-ink-300 font-sans">
            {categoryLabels[skill.category] ?? skill.category}
          </span>
          <span className="text-xs bg-cream-200 text-ink-500 px-2 py-0.5 rounded font-sans shrink-0">
            Bientôt
          </span>
        </div>

        <h3 className="font-mono text-base text-ink-900 mb-2 leading-snug break-words">
          {skill.name}
        </h3>

        <p className="text-sm text-ink-500 leading-relaxed font-sans flex-1">
          {skill.description}
        </p>
      </article>
    );
  }

  return (
    <Link href={`/ressources/skills/${skill.slug}`} className="group block h-full">
      <article className="border border-ink-100 bg-cream-100 hover:bg-cream-50 hover:border-ink-200 transition-all duration-200 h-full flex flex-col overflow-hidden">
        {/* Cover image */}
        {skill.image && (
          <div className="relative aspect-[16/9] bg-cream-200 overflow-hidden">
            <Image
              src={skill.image}
              alt={skill.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              quality={65}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
        {/* Category */}
        <div className="mb-4">
          <span className="text-xs tracking-widest uppercase text-ink-300 font-sans">
            {categoryLabels[skill.category] ?? skill.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-light text-ink-900 group-hover:text-forest-900 transition-colors mb-2 leading-snug">
          {skill.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-ink-500 leading-relaxed mb-6 flex-1 line-clamp-3 font-sans">
          {skill.description}
        </p>

        {/* LLM compatibility */}
        <div className="flex items-center gap-1.5 mb-4">
          <LLMTag label="Claude" support={skill.llm.claude} />
          <LLMTag label="ChatGPT" support={skill.llm.chatgpt} />
          <LLMTag label="Gemini" support={skill.llm.gemini} />
        </div>

        {/* Stats */}
        <div className="pt-4 border-t border-ink-100 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-ink-500 font-sans">
              <span className="font-medium text-ink-700">{skill.timeSaved}</span> économisées
            </span>
            {skill.resultMetric && (
              <span className="text-xs text-forest-700 font-medium font-sans">
                {skill.resultMetric}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-ink-300 font-sans">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Testé par {skill.testedBy} membres
          </div>
        </div>
        </div>
      </article>
    </Link>
  );
}
