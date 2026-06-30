import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { authors, skills, blogArticles } from "@/lib/data";
import SkillCard from "@/components/ui/SkillCard";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";

/** True if a /public asset actually exists (graceful image fallback at build). */
function publicFileExists(p?: string): boolean {
  if (!p) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", p.replace(/^\//, "")));
  } catch {
    return false;
  }
}

function relativeDays(iso?: string): string | null {
  if (!iso) return null;
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return null;
  const days = Math.floor((Date.now() - then) / 86_400_000);
  if (days <= 0) return "Aujourd'hui";
  if (days === 1) return "Hier";
  if (days < 30) return `Il y a ${days} jours`;
  const months = Math.floor(days / 30);
  if (months < 12) return `Il y a ${months} mois`;
  return `Il y a ${Math.floor(months / 12)} an(s)`;
}

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

  const hasAvatar = publicFileExists(author.avatar);
  const hasBanner = publicFileExists(author.banner);

  // Dernière contribution : skill le plus récent
  const lastPublished = authorSkills
    .map((s) => s.publishedAt)
    .filter(Boolean)
    .sort()
    .at(-1);
  const lastContribution = relativeDays(lastPublished);

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
      <section className="max-w-6xl mx-auto px-6 pt-10">
        {/* Banner */}
        <div className="relative h-28 md:h-36 rounded-t-[16px] overflow-hidden bg-forest-900">
          {hasBanner && (
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url('${author.banner}')` }}
              aria-hidden="true"
            />
          )}
          {!hasBanner && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 bg-cream-50/85 text-forest-900 text-[11px] px-2.5 py-1 rounded-md font-sans">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <circle cx="8.5" cy="10" r="1.5" />
                <path d="M21 16l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Bannière personnalisable
            </span>
          )}
        </div>

        {/* Identity card */}
        <div className="bg-cream-50 border border-ink-100 border-t-0 rounded-b-[16px] px-6 md:px-8 pb-8">
          {/* Avatar overlapping the banner */}
          {hasAvatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={author.avatar}
              alt={author.name}
              width={88}
              height={88}
              className="w-[88px] h-[88px] rounded-full object-cover ring-4 ring-cream-50 -mt-11 mb-4"
            />
          ) : (
            <div
              className="w-[88px] h-[88px] rounded-full bg-forest-900 text-cream-50 flex items-center justify-center font-sans font-bold text-2xl ring-4 ring-cream-50 -mt-11 mb-4"
              aria-hidden="true"
            >
              {initials}
            </div>
          )}

          {/* Name + favorite AI badge */}
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h1 className="font-serif text-2xl md:text-3xl font-semibold text-ink-900">
              {author.name}
            </h1>
            {author.favoriteAI && (
              <span className="inline-flex items-center gap-1.5 bg-cream-50 border border-ink-100 text-ink-500 text-xs px-2.5 py-1 rounded-full font-sans">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E3F2D" strokeWidth="1.8" aria-hidden="true">
                  <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" strokeLinejoin="round" />
                </svg>
                IA préférée · {author.favoriteAI}
              </span>
            )}
          </div>
          <p className="text-sm text-ink-500 font-sans mb-3">{author.role}</p>

          {/* Hashtags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-sans bg-forest-50 text-forest-800 px-2.5 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Location */}
          {author.location && (
            <p className="inline-flex items-center gap-1.5 text-xs text-ink-500 font-sans mb-5">
              <MapPinIcon /> {author.location}
            </p>
          )}

          {/* LinkedIn button + icon buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href={author.links?.linkedin ?? "https://www.linkedin.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-forest-900 text-cream-50 text-sm font-medium hover:bg-forest-700 transition-colors rounded-[8px] font-sans"
            >
              <LinkedInIcon className="w-[15px] h-[15px]" />
              Suivre sur LinkedIn
            </a>

            {author.links?.github && (
              <a
                href={author.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-[38px] h-[38px] rounded-[8px] border border-ink-100 bg-cream-50 flex items-center justify-center text-forest-900 hover:border-forest-900/40 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            )}
            {author.links?.website && (
              <a
                href={author.links.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site web"
                className="w-[38px] h-[38px] rounded-[8px] border border-ink-100 bg-cream-50 flex items-center justify-center text-forest-900 hover:border-forest-900/40 transition-colors"
              >
                <GlobeIcon className="w-4 h-4" />
              </a>
            )}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                absoluteUrl(`/auteurs/${author.slug}`),
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Partager ce profil"
              className="w-[38px] h-[38px] rounded-[8px] border border-ink-100 bg-cream-50 flex items-center justify-center text-forest-900 hover:border-forest-900/40 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" strokeLinecap="round" />
              </svg>
            </a>
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
              {lastContribution && (
                <div className="flex items-center justify-between">
                  <dt className="text-ink-500">Dernière contribution</dt>
                  <dd className="text-ink-900 font-medium">{lastContribution}</dd>
                </div>
              )}
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
              className="block text-center text-sm border border-forest-900 text-forest-900 py-2.5 hover:bg-forest-900 hover:text-cream-50 transition-colors font-sans rounded-[8px]"
            >
              Proposer un Skill
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
