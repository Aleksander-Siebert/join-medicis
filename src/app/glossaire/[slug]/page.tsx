import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { glossary, tierLabels } from "@/lib/glossary";
import { getGlossaryArticle, getGlossaryArticleSlugs } from "@/lib/glossary-content";
import AuroraGradient from "@/components/effects/AuroraGradient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// Une page par article rédigé, et rien d'autre : les 82 termes du glossaire ne
// génèrent pas 82 pages. Un terme sans fichier .md renvoie un 404.
export function generateStaticParams() {
  const known = new Set(glossary.map((t) => t.slug));
  return getGlossaryArticleSlugs()
    .filter((slug) => known.has(slug))
    .map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const term = glossary.find((t) => t.slug === slug);
  const article = getGlossaryArticle(slug);
  if (!term || !article) return {};

  return {
    alternates: { canonical: `/glossaire/${slug}` },
    title: article.metaTitle ?? `${term.title} — Définition`,
    description: article.excerpt ?? term.description,
    // Brouillon : consultable en direct pour relecture, mais jamais indexé.
    ...(article.draft ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { slug } = await params;
  const term = glossary.find((t) => t.slug === slug);
  const article = getGlossaryArticle(slug);
  if (!term || !article) notFound();

  const heading = article.title ?? term.title;

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.title,
    description: article.excerpt ?? term.description,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `Glossaire IA — ${SITE_NAME}`,
      url: absoluteUrl("/glossaire"),
    },
    url: absoluteUrl(`/glossaire/${slug}`),
    ...(term.aliases?.length ? { alternateName: term.aliases } : {}),
    inLanguage: "fr-FR",
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <div className="relative pt-16 min-h-screen bg-forest-900">
      {/* Fond vert animé, comme les headers du site */}
      <AuroraGradient />

      <JsonLd
        data={[
          definedTermSchema,
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Glossaire", path: "/glossaire" },
            { name: term.title, path: `/glossaire/${slug}` },
          ]),
        ]}
      />

      <div className="relative px-4 sm:px-6 py-10 md:py-16">
        {/* Bandeau brouillon — visible seulement sur les pages draft: true */}
        {article.draft && (
          <div className="max-w-3xl mx-auto mb-4">
            <p className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-sans font-semibold bg-gold-300 text-ink-900 px-3 py-1.5 rounded-full">
              Brouillon · non indexé
            </p>
          </div>
        )}

        {/* Fil d'ariane */}
        <div className="max-w-3xl mx-auto mb-5">
          <Link
            href="/glossaire"
            className="inline-flex items-center gap-2 text-sm text-cream-50/75 hover:text-cream-50 transition-colors font-sans group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:-translate-x-0.5 transition-transform"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Glossaire IA
          </Link>
        </div>

        {/* ===================== CARTE BLANCHE (contenu) ===================== */}
        <article className="max-w-3xl mx-auto bg-white rounded-[20px] px-6 py-10 md:px-14 md:py-14 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
          <p className="text-xs tracking-[0.2em] uppercase text-forest-700 font-sans font-semibold mb-4">
            {tierLabels[term.tier]}
          </p>

          <h1 className="font-sans tracking-tight text-4xl md:text-5xl font-bold text-ink-900 leading-[1.05] mb-6">
            {heading}
          </h1>

          {term.aliases && term.aliases.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {term.aliases.map((a) => (
                <span
                  key={a}
                  className="text-xs font-sans bg-forest-50 text-forest-800 px-2.5 py-1 rounded-full"
                >
                  {a}
                </span>
              ))}
            </div>
          )}

          {article.excerpt && (
            <p className="font-sans text-lg text-ink-700 leading-relaxed mb-8">
              {article.excerpt}
            </p>
          )}

          {/* Corps Markdown. prose-glossaire : tout en Inter, texte noir. */}
          <div
            className="prose prose-editorial prose-glossaire max-w-none"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />

          {article.updatedAt && (
            <p className="mt-10 pt-6 border-t border-ink-100 text-xs text-ink-500 font-sans">
              Dernière mise à jour :{" "}
              {new Date(article.updatedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
        </article>

        {/* ===================== CTA DÉCOUVRIR JOIN MÉDICIS (sur le fond vert) ===================== */}
        <section className="max-w-3xl mx-auto mt-10 md:mt-14">
          <div className="rounded-[20px] border border-cream-50/15 bg-cream-50/[0.06] backdrop-blur-sm px-6 py-10 md:px-12 md:py-12">
            <h2 className="font-sans tracking-tight text-3xl md:text-4xl font-bold text-cream-50 leading-[1.05] mb-4">
              La bibliothèque IA gratuite et open-source
              <br className="hidden sm:block" />{" "}
              <em className="italic">pour les marketeurs</em>
            </h2>
            <p className="text-cream-50/80 font-sans leading-relaxed max-w-xl mb-8">
              Retrouvez facilement des ressources gratuites tels que des Skills, des
              MCP, des workflows et des agents IA. Fait pour les marketers par des
              marketers !
            </p>
            <ul className="space-y-2.5 mb-9">
              {[
                "Skills, MCP, workflows et agents IA prêts à l'emploi",
                "100 % gratuit, sans paywall ni conditions cachées",
                "Open-source : code MIT, contenu CC BY 4.0",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-cream-50/85 font-sans"
                >
                  <span
                    className="mt-0.5 w-4 h-4 rounded-[4px] bg-cream-50/15 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contribuer"
              className="inline-flex items-center px-7 py-3.5 bg-cream-50 text-forest-900 text-sm md:text-base font-sans font-semibold rounded-full hover:bg-cream-100 transition-colors"
            >
              Contribuer
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
