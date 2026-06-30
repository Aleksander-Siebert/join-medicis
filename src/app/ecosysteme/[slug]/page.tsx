import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ecosystem } from "@/lib/data";
import type { EcosystemCategory } from "@/types";
import EcosystemLogo from "@/components/ui/EcosystemLogo";
import JsonLd from "@/components/seo/JsonLd";

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
    alternates: { canonical: `/ecosysteme/${slug}` },
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

const WHAT_ICONS: Record<NonNullable<NonNullable<Parameters<typeof WhatIcon>[0]>["name"]>, React.ReactNode> = {
  skill: <path d="M13 2L4.5 12.5h6L9 22l9-11h-6L13 2z" strokeLinecap="round" strokeLinejoin="round" />,
  file: (
    <>
      <path d="M6 3h9l4 4v14H6V3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 3v4h4M9 13h6M9 17h4" strokeLinecap="round" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  code: <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />,
  check: <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />,
};

function WhatIcon({ name }: { name?: "skill" | "file" | "video" | "code" | "check" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E3F2D" strokeWidth="1.8" aria-hidden="true">
      {WHAT_ICONS[name ?? "check"]}
    </svg>
  );
}

/** Extract a YouTube video id from a watch / youtu.be / embed URL. */
function youtubeId(url?: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1) || null;
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const m = u.pathname.match(/\/embed\/([^/?]+)/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default async function EcosystemResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = ecosystem.find((r) => r.slug === slug);
  if (!resource) notFound();

  const related = ecosystem
    .filter((r) => r.slug !== resource.slug && r.category === resource.category)
    .slice(0, 3);

  const videoId = youtubeId(resource.videoUrl);

  const faqJsonLd =
    resource.faq && resource.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: resource.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <div className="pt-16 min-h-screen bg-cream-100">
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      {/* Breadcrumb */}
      <div className="border-b border-ink-100 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-2 text-xs text-ink-300 font-sans">
          <Link href="/" className="hover:text-ink-500 transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/ecosysteme" className="hover:text-ink-500 transition-colors">Écosystème</Link>
          <span>/</span>
          <span className="text-ink-500">{resource.name}</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        {/* ===================== HERO ===================== */}
        <header className="flex flex-col sm:flex-row items-start gap-5 pb-10 border-b border-ink-100">
          <EcosystemLogo resource={resource} size={56} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="jm-pill">{CATEGORY_LABELS[resource.category]}</span>
              {resource.type && <span className="jm-pill">{resource.type}</span>}
              {resource.lang && <span className="jm-pill">{resource.lang}</span>}
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 mb-2">
              {resource.name}
            </h1>
            <p className="text-base text-ink-700 leading-relaxed font-sans mb-6 max-w-2xl">
              {resource.tagline}
            </p>
            {resource.url && (
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-forest-900 text-cream-50 text-sm hover:bg-forest-700 transition-colors font-sans rounded-[10px]"
              >
                Visiter la ressource
                <ExternalIcon />
              </a>
            )}
          </div>
        </header>

        {/* ===================== À PROPOS (conservé) ===================== */}
        <section>
          <p className="jm-eyebrow">À propos</p>
          <p className="text-ink-700 leading-relaxed font-sans">{resource.description}</p>

          {resource.highlights && resource.highlights.length > 0 && (
            <ul className="mt-6 space-y-3">
              {resource.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-ink-700 font-sans">
                  <svg className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* ===================== CE QU'ON Y TROUVE ===================== */}
        {resource.whatYouGet && resource.whatYouGet.length > 0 && (
          <section>
            <p className="jm-eyebrow">Ce qu&rsquo;on y trouve</p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink-900 mb-6">
              Concrètement, à l&rsquo;intérieur
            </h2>
            <div className="space-y-5">
              {resource.whatYouGet.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="w-9 h-9 rounded-[10px] bg-forest-100 flex items-center justify-center shrink-0">
                    <WhatIcon name={item.icon} />
                  </span>
                  <div>
                    <p className="text-sm font-sans font-semibold text-ink-900 mb-0.5">{item.title}</p>
                    <p className="text-sm text-ink-600 font-sans leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===================== FORCES & LIMITES ===================== */}
        {((resource.strengths && resource.strengths.length > 0) ||
          (resource.limitations && resource.limitations.length > 0)) && (
          <section>
            <p className="jm-eyebrow">Notre avis, testé en conditions réelles</p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink-900 mb-6">
              Forces &amp; limites
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {resource.strengths && resource.strengths.length > 0 && (
                <div className="rounded-[16px] p-5 border" style={{ background: "#F1F6EA", borderColor: "#CFE0BC" }}>
                  <p className="text-xs font-sans font-semibold uppercase tracking-wide mb-3" style={{ color: "#2F4A33" }}>
                    Forces
                  </p>
                  <ul className="space-y-2.5">
                    {resource.strengths.map((s) => (
                      <li key={s} className="flex gap-2.5 items-start text-sm text-ink-800 font-sans leading-relaxed">
                        <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#3B6D11" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {resource.limitations && resource.limitations.length > 0 && (
                <div className="rounded-[16px] p-5 border" style={{ background: "#F8EEE6", borderColor: "#E6CDB8" }}>
                  <p className="text-xs font-sans font-semibold uppercase tracking-wide mb-3" style={{ color: "#8C4A2F" }}>
                    Limites
                  </p>
                  <ul className="space-y-2.5">
                    {resource.limitations.map((l) => (
                      <li key={l} className="flex gap-2.5 items-start text-sm text-ink-800 font-sans leading-relaxed">
                        <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#9C3B2E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                        </svg>
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ===================== VIDÉO ===================== */}
        {videoId && (
          <section>
            <p className="jm-eyebrow">En vidéo</p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink-900 mb-6">
              {resource.videoLabel ?? "Vidéo de présentation"}
            </h2>
            <div className="relative w-full aspect-video rounded-[16px] overflow-hidden bg-ink-900">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title={resource.videoLabel ?? `Vidéo — ${resource.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        )}

        {/* ===================== CRÉATEURS ===================== */}
        {resource.creators && resource.creators.length > 0 && (
          <section>
            <p className="jm-eyebrow">Qui a créé cette ressource</p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink-900 mb-6">
              Les créateurs chez {resource.org}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {resource.creators.map((c) => (
                <div key={c.name} className="flex gap-3 items-start bg-cream-50 border border-ink-100 rounded-[16px] p-5">
                  <span className="w-11 h-11 rounded-full bg-forest-900 text-cream-50 flex items-center justify-center font-sans font-bold text-sm shrink-0">
                    {initials(c.name)}
                  </span>
                  <div>
                    <p className="text-sm font-sans font-semibold text-ink-900">{c.name}</p>
                    <p className="text-xs text-ink-500 font-sans mb-1.5">{c.role}</p>
                    <p className="text-sm text-ink-600 font-sans leading-relaxed">{c.contribution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===================== FAQ ===================== */}
        {resource.faq && resource.faq.length > 0 && (
          <section>
            <p className="jm-eyebrow">Questions fréquentes</p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink-900 mb-6">FAQ</h2>
            <div className="space-y-3">
              {resource.faq.map((f, i) => (
                <details
                  key={f.q}
                  open={i === 0}
                  className="group bg-cream-50 border border-ink-100 rounded-[14px] px-5 py-4"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-sm font-sans font-medium text-ink-900">
                    {f.q}
                    <svg className="w-4 h-4 text-ink-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p className="text-sm text-ink-600 font-sans leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* ===================== DANS LA MÊME CATÉGORIE (conservé) ===================== */}
        {related.length > 0 && (
          <section className="pt-2">
            <div className="flex items-center gap-5 mb-6">
              <span className="text-xs tracking-widest uppercase text-ink-300 font-sans shrink-0">
                Dans la même catégorie
              </span>
              <div className="flex-1 h-px bg-ink-100" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/ecosysteme/${r.slug}`}
                  className="group bg-cream-50 border border-ink-100 rounded-[14px] p-5 hover:border-forest-600 transition-colors"
                >
                  <EcosystemLogo resource={r} size={36} className="mb-3" />
                  <h3 className="font-serif text-lg font-medium text-ink-900 group-hover:text-forest-900 transition-colors leading-snug">
                    {r.name}
                  </h3>
                  <p className="text-xs text-ink-400 font-sans mt-1.5 line-clamp-2">{r.tagline}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ===================== HONNÊTETÉ + CTA contact ===================== */}
        <section className="rounded-[16px] border border-dashed border-ink-200 p-6 text-center">
          <p className="text-sm text-ink-600 font-sans leading-relaxed mb-4 max-w-xl mx-auto">
            Vous travaillez chez {resource.org}, ou un détail vous semble inexact ?
            L&rsquo;objectif n&rsquo;est jamais de dénigrer une ressource, juste de rester honnête.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest-900 text-cream-50 text-sm font-sans font-medium hover:bg-forest-700 transition-colors rounded-[10px]"
          >
            Me contacter
          </Link>
        </section>
      </div>
    </div>
  );
}
