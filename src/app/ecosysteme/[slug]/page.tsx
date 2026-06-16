import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ecosystem } from "@/lib/data";
import type { EcosystemCategory } from "@/types";
import EcosystemLogo from "@/components/ui/EcosystemLogo";

type Props = { params: Promise<{ slug: string }> };

const CATEGORY_LABELS: Record<EcosystemCategory, string> = {
  entreprises: "Entreprises",
  individus: "Individus",
  gouvernement: "Gouvernement",
  autres: "Autres",
};

export function generateStaticParams() {
  return ecosystem.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = ecosystem.find((r) => r.slug === slug);
  if (!resource) return {};
  return {
    title: `${resource.name} — Écosystème`,
    description: resource.tagline,
  };
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-8.5M15 3h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

/** Nom d'hôte lisible depuis une URL (pour afficher le domaine). */
function hostname(url?: string): string | null {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

export default async function EcosystemResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = ecosystem.find((r) => r.slug === slug);
  if (!resource) notFound();

  const related = ecosystem
    .filter((r) => r.slug !== resource.slug && r.category === resource.category)
    .slice(0, 3);

  const domain = hostname(resource.url);

  return (
    <div className="pt-16 min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-ink-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-xs text-ink-300 font-sans">
          <Link href="/" className="hover:text-ink-500 transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link href="/ecosysteme" className="hover:text-ink-500 transition-colors">
            Écosystème
          </Link>
          <span>/</span>
          <span className="text-ink-500">{resource.name}</span>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/ecosysteme"
            className="inline-flex items-center gap-1.5 text-xs text-ink-400 hover:text-ink-700 transition-colors font-sans mb-8"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Tous les écosystèmes
          </Link>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <EcosystemLogo resource={resource} size={72} />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs tracking-widest uppercase text-forest-700 bg-forest-50 border border-forest-100 px-2 py-0.5 font-sans">
                  {CATEGORY_LABELS[resource.category]}
                </span>
                {resource.type && (
                  <span className="text-xs bg-cream-200 text-ink-500 px-2 py-0.5 font-sans">
                    {resource.type}
                  </span>
                )}
                {resource.lang && (
                  <span className="text-xs bg-cream-200 text-ink-500 px-2 py-0.5 font-sans">
                    {resource.lang}
                  </span>
                )}
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-900 mb-2">
                {resource.name}
              </h1>
              <p className="text-sm tracking-widest uppercase text-ink-300 font-sans mb-5">
                {resource.org}
              </p>
              <p className="text-base text-ink-700 leading-relaxed font-sans max-w-2xl">
                {resource.tagline}
              </p>

              {resource.url && (
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-forest-900 text-cream-50 text-sm hover:bg-forest-700 transition-colors font-sans"
                >
                  Visiter la ressource
                  <ExternalIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-14">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-light text-ink-900 mb-4">À propos</h2>
            <p className="text-ink-700 leading-relaxed font-sans">{resource.description}</p>

            {resource.highlights && resource.highlights.length > 0 && (
              <div className="mt-10">
                <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
                  Points clés
                </p>
                <ul className="space-y-3">
                  {resource.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-ink-700 font-sans">
                      <svg className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Side card */}
          <aside className="self-start">
            <div className="border border-ink-100 bg-cream-50 p-6 space-y-4">
              <div>
                <p className="text-xs tracking-widest uppercase text-ink-300 mb-1 font-sans">
                  Catégorie
                </p>
                <p className="text-sm text-ink-700 font-sans">
                  {CATEGORY_LABELS[resource.category]}
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-ink-300 mb-1 font-sans">
                  Éditeur
                </p>
                <p className="text-sm text-ink-700 font-sans">{resource.org}</p>
              </div>
              {domain && (
                <div>
                  <p className="text-xs tracking-widest uppercase text-ink-300 mb-1 font-sans">
                    Site
                  </p>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-forest-900 hover:text-forest-700 transition-colors font-sans break-all underline underline-offset-4"
                  >
                    {domain}
                  </a>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="border-t border-ink-100 px-6 py-14">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-5 mb-8">
              <span className="text-xs tracking-widest uppercase text-ink-300 font-sans shrink-0">
                Dans la même catégorie
              </span>
              <div className="flex-1 h-px bg-ink-100" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/ecosysteme/${r.slug}`}
                  className="group bg-cream-100 border border-ink-100 p-5 hover:border-forest-600 transition-colors"
                >
                  <EcosystemLogo resource={r} size={40} className="mb-3" />
                  <h3 className="font-serif text-lg font-light text-ink-900 group-hover:text-forest-900 transition-colors leading-snug">
                    {r.name}
                  </h3>
                  <p className="text-xs text-ink-400 font-sans mt-1.5 line-clamp-2">
                    {r.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
