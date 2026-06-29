import { notFound } from "next/navigation";
import Link from "next/link";
import { authors, skills, blogArticles } from "@/lib/data";
import SkillCard from "@/components/ui/SkillCard";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) return {};
  return {
    alternates: { canonical: `/auteurs/${slug}` },
    title: author.name,
    description: author.bio,
  };
}

/* ---------- Icons ---------- */
const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GlobeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
    <path strokeWidth={1.5} d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
  </svg>
);

const MapPinIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" strokeWidth={1.5} />
  </svg>
);

const MailIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.5 7l8.5 6 8.5-6" />
  </svg>
);

/* Map des catégories de Skills vers des hashtags / domaines lisibles */
const CATEGORY_LABELS: Record<string, { tag: string; focus: string }> = {
  seo: { tag: "#SEO", focus: "SEO & Contenu" },
  prospection: { tag: "#Prospection", focus: "Prospection & Outbound" },
  cro: { tag: "#CRO", focus: "CRO & Conversion" },
  analytics: { tag: "#Analytics", focus: "Analytics & Data" },
  strategie: { tag: "#Stratégie", focus: "Stratégie Growth" },
  contenu: { tag: "#Contenu", focus: "Contenu Éditorial" },
  mcp: { tag: "#MCP", focus: "Serveurs MCP" },
};

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) notFound();

  const authorSkills = skills.filter((s) => s.authorSlug === author.slug);
  const authorArticles = blogArticles.filter((a) => a.authorSlug === author.slug);
  const totalDownloads = authorSkills.reduce((sum, s) => sum + (s.downloads ?? 0), 0);
  const totalViews = authorSkills.reduce((sum, s) => sum + (s.views ?? 0), 0);

  // Catégories distinctes couvertes par les Skills de l'auteur
  const categories = Array.from(new Set(authorSkills.map((s) => s.category)));

  // Hashtags : champ explicite, sinon dérivés des catégories
  const tags =
    author.tags && author.tags.length > 0
      ? author.tags
      : categories.map((c) => CATEGORY_LABELS[c]?.tag).filter(Boolean) as string[];

  // Domaines d'expertise : champ explicite, sinon dérivés des catégories
  const expertise =
    author.expertise && author.expertise.length > 0
      ? author.expertise
      : (categories.map((c) => CATEGORY_LABELS[c]?.focus).filter(Boolean) as string[]);

  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    description: author.bio,
    url: absoluteUrl(`/auteurs/${author.slug}`),
    jobTitle: author.role,
    knowsAbout: expertise,
    sameAs: [
      author.links?.linkedin,
      author.links?.github,
      author.links?.twitter,
      author.links?.website,
    ].filter(Boolean),
    worksFor: { "@type": "Organization", name: "Join Médicis", url: absoluteUrl("/") },
  };

  return (
    <div className="pt-16 min-h-screen bg-cream-100">
      <JsonLd
        data={[
          personSchema,
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Auteurs", path: "/auteurs" },
            { name: author.name, path: `/auteurs/${author.slug}` },
          ]),
        ]}
      />
      {/* ---------- Profile header ---------- */}
      <section className="border-b border-ink-100 bg-gradient-to-b from-cream-200/70 to-cream-100">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col sm:flex-row items-start gap-7">
            {/* Avatar */}
            <div
              className="w-24 h-24 rounded-full bg-forest-900 text-cream-50 flex items-center justify-center font-serif text-3xl shrink-0 ring-4 ring-cream-50"
              aria-hidden="true"
            >
              {initials}
            </div>

            <div className="min-w-0">
              <h1 className="font-serif text-3xl md:text-4xl font-light text-ink-900 mb-1.5">
                {author.name}
              </h1>
              <p className="text-sm text-ink-500 font-sans mb-4">{author.role}</p>

              {/* Hashtags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-sans bg-forest-100 text-forest-800 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Location + email */}
              {(author.location || author.email) && (
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-500 font-sans mb-5">
                  {author.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPinIcon /> {author.location}
                    </span>
                  )}
                  {author.email && (
                    <a
                      href={`mailto:${author.email}`}
                      className="inline-flex items-center gap-1.5 hover:text-ink-900 transition-colors"
                    >
                      <MailIcon /> {author.email}
                    </a>
                  )}
                </div>
              )}

              {/* Subscribe + social */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contribuer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest-900 text-cream-50 text-sm hover:bg-forest-700 transition-colors font-sans"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3M9 12a4 4 0 100-8 4 4 0 000 8zm0 0c-3.3 0-6 2-6 4.5V18h9" />
                  </svg>
                  S&rsquo;abonner à cet auteur
                </Link>

                {author.links && (
                  <div className="flex items-center gap-3 text-ink-300">
                    {author.links.linkedin && (
                      <a
                        href={author.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-forest-900 transition-colors"
                      >
                        <LinkedInIcon className="w-[18px] h-[18px]" />
                      </a>
                    )}
                    {author.links.twitter && (
                      <a
                        href={author.links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter / X"
                        className="hover:text-forest-900 transition-colors"
                      >
                        <TwitterIcon className="w-[18px] h-[18px]" />
                      </a>
                    )}
                    {author.links.github && (
                      <a
                        href={author.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-forest-900 transition-colors"
                      >
                        <GitHubIcon className="w-[18px] h-[18px]" />
                      </a>
                    )}
                    {author.links.website && (
                      <a
                        href={author.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Site web"
                        className="hover:text-forest-900 transition-colors"
                      >
                        <GlobeIcon className="w-[18px] h-[18px]" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Body ---------- */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main column */}
        <div className="lg:col-span-2 space-y-14">
          {/* About & Editorial Vision */}
          <section>
            <h2 className="font-serif text-2xl font-light text-ink-900 mb-4">
              À propos &amp; vision éditoriale
            </h2>
            <p className="text-base text-ink-700 leading-relaxed font-sans">{author.bio}</p>

            {author.quote && (
              <blockquote className="mt-6 border-l-2 border-forest-900 pl-5 italic text-ink-700 font-sans">
                &laquo;&nbsp;{author.quote}&nbsp;&raquo;
              </blockquote>
            )}
          </section>

          {/* Expertise & Focus Areas */}
          {expertise.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl font-light text-ink-900 mb-5">
                Expertise &amp; domaines de prédilection
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {expertise.map((e) => (
                  <span
                    key={e}
                    className="text-sm font-sans bg-forest-50 border border-forest-100 text-forest-800 px-3.5 py-2"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Appearances & Media (articles de blog) */}
          {authorArticles.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl font-light text-ink-900 mb-5">
                Articles &amp; publications
              </h2>
              <div className="divide-y divide-ink-100 border-t border-b border-ink-100">
                {authorArticles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    className="flex items-start justify-between gap-4 py-4 group"
                  >
                    <div className="min-w-0">
                      <h3 className="font-sans text-sm text-ink-900 group-hover:text-forest-900 transition-colors">
                        {a.title}
                      </h3>
                      <p className="text-xs text-ink-400 font-sans mt-1 line-clamp-1">
                        {a.excerpt}
                      </p>
                    </div>
                    <span className="text-xs text-ink-300 font-sans whitespace-nowrap shrink-0 pt-0.5">
                      {a.readingTime}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Skills publiés */}
          {authorSkills.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl font-light text-ink-900 mb-5">
                Skills publiés par {author.name.split(" ")[0]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-100 border border-ink-100">
                {authorSkills.map((s) => (
                  <div key={s.slug} className="bg-cream-100">
                    <SkillCard skill={s} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 self-start lg:sticky lg:top-24">
          {/* Author stats */}
          <div className="border border-ink-100 bg-cream-50 p-6">
            <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
              Statistiques auteur
            </p>
            <dl className="space-y-3.5 text-sm font-sans">
              <div className="flex items-center justify-between">
                <dt className="text-ink-500">Skills publiés</dt>
                <dd className="text-ink-900 font-medium">{authorSkills.length}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink-500">Téléchargements</dt>
                <dd className="text-forest-900 font-medium">{totalDownloads}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink-500">Vues totales</dt>
                <dd className="text-ink-900 font-medium">{totalViews}</dd>
              </div>
              {author.memberSince && (
                <div className="flex items-center justify-between">
                  <dt className="text-ink-500">Membre depuis</dt>
                  <dd className="text-ink-900 font-medium">{author.memberSince}</dd>
                </div>
              )}
            </dl>
          </div>

          {/* Write for us */}
          <div className="border border-ink-100 bg-cream-50 p-6">
            <p className="text-xs tracking-widest uppercase text-ink-300 mb-2 font-sans">
              Écrire pour Join Médicis
            </p>
            <p className="text-sm text-ink-500 leading-relaxed font-sans mb-5">
              Partagez votre expertise avec la communauté Growth &amp; IA francophone.
            </p>
            <Link
              href="/contribuer"
              className="block text-center text-sm border border-forest-900 text-forest-900 py-2.5 hover:bg-forest-900 hover:text-cream-50 transition-colors font-sans"
            >
              Proposer un Skill
            </Link>
          </div>

          {/* Partner slot */}
          <div className="border border-dashed border-ink-100 p-6 text-center">
            <p className="text-[10px] tracking-widest uppercase text-ink-300 mb-3 font-sans">
              Partenaire
            </p>
            <p className="text-xs text-ink-400 font-sans">
              Cet emplacement met en avant les partenaires de Join Médicis.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
