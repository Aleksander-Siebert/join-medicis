import { notFound } from "next/navigation";
import Link from "next/link";
import { skills, authors } from "@/lib/data";
import SkillCard from "@/components/ui/SkillCard";
import SkillTabs from "@/components/ui/SkillTabs";
import type { Metadata } from "next";
import type { LLMSupport } from "@/types";

const difficultyLabels = {
  debutant: "Débutant",
  intermediaire: "Intermédiaire",
  avance: "Avancé",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return skills.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const skill = skills.find((s) => s.slug === slug);
  if (!skill) return {};
  return {
    title: skill.name,
    description: skill.description,
  };
}

function LLMBadge({ name, support }: { name: string; support?: LLMSupport }) {
  if (!support || support === "none") return null;
  const isFull = support === "full";
  return (
    <span
      className={`text-xs px-2.5 py-1 font-sans ${
        isFull
          ? "bg-forest-50 text-forest-700 border border-forest-100"
          : "bg-cream-200 text-ink-500 border border-cream-300"
      }`}
    >
      {name} {isFull ? "✓" : "~"}
    </span>
  );
}

function formatDate(iso?: string) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function SkillPage({ params }: Props) {
  const { slug } = await params;
  const skill = skills.find((s) => s.slug === slug);
  if (!skill) notFound();

  const author = skill.authorSlug
    ? authors.find((a) => a.slug === skill.authorSlug)
    : null;

  const related = skills
    .filter((s) => s.slug !== skill.slug && s.category === skill.category)
    .slice(0, 3);

  const downloadUrl = `/skills/${skill.slug}.md`;
  const publishedDate = formatDate(skill.publishedAt);

  return (
    <div className="pt-16 min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-ink-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-xs text-ink-300 font-sans">
          <Link href="/" className="hover:text-ink-500 transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link href="/skills" className="hover:text-ink-500 transition-colors">
            Skills
          </Link>
          <span>/</span>
          <span className="text-ink-500">{skill.name}</span>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left — title & meta */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs tracking-widest uppercase text-ink-300 font-sans">
                {skill.category}
              </span>
              <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
              <span className="text-xs text-ink-300 font-sans">
                {difficultyLabels[skill.difficulty]}
              </span>
              <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
              <span className="text-xs text-ink-300 font-sans">v{skill.version}</span>
              {publishedDate && (
                <>
                  <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
                  <span className="text-xs text-ink-300 font-sans">
                    Publié le {publishedDate}
                  </span>
                </>
              )}
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-900 mb-5">
              {skill.name}
            </h1>

            {/* Author */}
            {author && (
              <Link
                href={`/authors/${author.slug}`}
                className="inline-flex items-center gap-3 mb-6 group"
              >
                <span
                  className="w-9 h-9 rounded-full bg-forest-900 text-cream-50 flex items-center justify-center font-serif text-sm shrink-0"
                  aria-hidden="true"
                >
                  {author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span>
                  <span className="block text-xs text-ink-300 font-sans">
                    Maintenu par
                  </span>
                  <span className="block text-sm text-ink-700 group-hover:text-forest-900 transition-colors font-sans font-medium">
                    {author.name}
                  </span>
                </span>
              </Link>
            )}

            <p className="text-ink-500 leading-relaxed text-base font-sans max-w-2xl">
              {skill.description}
            </p>

            {/* Stats line */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 text-xs text-ink-400 font-sans">
              {typeof skill.views === "number" && (
                <span>
                  <span className="font-medium text-ink-700">{skill.views}</span> vues
                </span>
              )}
              {typeof skill.downloads === "number" && (
                <>
                  <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
                  <span>
                    <span className="font-medium text-ink-700">{skill.downloads}</span>{" "}
                    téléchargements
                  </span>
                </>
              )}
            </div>

            {/* LLM badges */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-ink-300 mb-2.5 font-sans">
                LLM compatibles
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <LLMBadge name="Claude" support={skill.llm.claude} />
                <LLMBadge name="ChatGPT" support={skill.llm.chatgpt} />
                <LLMBadge name="Gemini" support={skill.llm.gemini} />
                <LLMBadge name="Mistral" support={skill.llm.mistral} />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-cream-200 text-ink-500 px-2.5 py-1 font-sans"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — meta card */}
          <div className="bg-cream-200 p-6 space-y-5 self-start">
            <div>
              <p className="text-xs tracking-widest uppercase text-ink-300 mb-1.5 font-sans">
                Temps économisé
              </p>
              <p className="font-serif text-xl text-ink-900">{skill.timeSaved}</p>
            </div>

            {skill.resultMetric && (
              <div>
                <p className="text-xs tracking-widest uppercase text-ink-300 mb-1.5 font-sans">
                  Résultat observé
                </p>
                <p className="font-serif text-xl text-forest-900">{skill.resultMetric}</p>
              </div>
            )}

            <div>
              <p className="text-xs tracking-widest uppercase text-ink-300 mb-1.5 font-sans">
                Testé par
              </p>
              <p className="font-serif text-xl text-ink-900">
                {skill.testedBy} membres
              </p>
            </div>

            <div className="pt-2 space-y-2.5">
              <a
                href={downloadUrl}
                download={`${skill.slug}.md`}
                className="w-full px-4 py-3 bg-forest-900 text-cream-50 text-sm hover:bg-forest-700 transition-colors tracking-wide font-sans flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                Télécharger .md
              </a>
              <a
                href="https://github.com/aleksander-siebert"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 border border-ink-200 text-ink-700 text-sm hover:border-ink-400 hover:text-ink-900 transition-colors tracking-wide flex items-center justify-center gap-2 font-sans"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Voir sur GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <SkillTabs skill={skill} />

      {/* Related skills */}
      {related.length > 0 && (
        <div className="px-6 py-16 border-t border-ink-100">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-5 mb-10">
              <span className="text-xs tracking-widest uppercase text-ink-300 font-sans shrink-0">
                Skills similaires
              </span>
              <div className="flex-1 h-px bg-ink-100" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-100">
              {related.map((s) => (
                <div key={s.slug} className="bg-cream-100">
                  <SkillCard skill={s} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
