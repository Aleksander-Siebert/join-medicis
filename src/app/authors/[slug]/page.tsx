import { notFound } from "next/navigation";
import Link from "next/link";
import { authors, skills } from "@/lib/data";
import SkillCard from "@/components/ui/SkillCard";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) return {};
  return {
    title: author.name,
    description: author.bio,
  };
}

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) notFound();

  const authorSkills = skills.filter((s) => s.authorSlug === author.slug);
  const totalDownloads = authorSkills.reduce((sum, s) => sum + (s.downloads ?? 0), 0);
  const totalViews = authorSkills.reduce((sum, s) => sum + (s.views ?? 0), 0);

  return (
    <div className="pt-16 min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-ink-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-xs text-ink-300 font-sans">
          <Link href="/" className="hover:text-ink-500 transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link href="/authors" className="hover:text-ink-500 transition-colors">
            Auteurs
          </Link>
          <span>/</span>
          <span className="text-ink-500">{author.name}</span>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-6 mb-6">
              <div
                className="w-20 h-20 rounded-full bg-forest-900 text-cream-50 flex items-center justify-center font-serif text-2xl shrink-0"
                aria-hidden="true"
              >
                {author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans">
                  Auteur
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-900 mb-2">
                  {author.name}
                </h1>
                <p className="text-sm text-ink-500 font-sans">{author.role}</p>
              </div>
            </div>

            <p className="text-base text-ink-700 leading-relaxed font-sans max-w-2xl mb-8">
              {author.bio}
            </p>

            {/* Social links */}
            {author.links && (
              <div className="flex items-center gap-3">
                {author.links.linkedin && (
                  <a
                    href={author.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-ink-200 text-ink-700 text-sm hover:border-ink-400 hover:text-ink-900 transition-colors font-sans"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                )}
                {author.links.github && (
                  <a
                    href={author.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-ink-200 text-ink-700 text-sm hover:border-ink-400 hover:text-ink-900 transition-colors font-sans"
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                )}
                {author.links.website && (
                  <a
                    href={author.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-ink-200 text-ink-700 text-sm hover:border-ink-400 hover:text-ink-900 transition-colors font-sans"
                  >
                    Site web
                  </a>
                )}
              </div>
            )}
          </div>

          {/* KPI card */}
          <div className="bg-cream-200 p-6 space-y-5 self-start">
            <div>
              <p className="text-xs tracking-widest uppercase text-ink-300 mb-1.5 font-sans">
                Skills publiés
              </p>
              <p className="font-serif text-3xl text-ink-900">{authorSkills.length}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-ink-300 mb-1.5 font-sans">
                Téléchargements
              </p>
              <p className="font-serif text-3xl text-forest-900">{totalDownloads}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-ink-300 mb-1.5 font-sans">
                Vues totales
              </p>
              <p className="font-serif text-3xl text-ink-900">{totalViews}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Author's skills */}
      {authorSkills.length > 0 && (
        <div className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-5 mb-10">
              <span className="text-xs tracking-widest uppercase text-ink-300 font-sans shrink-0">
                Skills publiés par {author.name.split(" ")[0]}
              </span>
              <div className="flex-1 h-px bg-ink-100" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100">
              {authorSkills.map((s) => (
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
