import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ecosystem, ECOSYSTEM_CATEGORIES } from "@/lib/data";
import type { EcosystemCategory } from "@/types";
import EcosystemLogo from "@/components/ui/EcosystemLogo";
import JsonLd from "@/components/seo/JsonLd";

type Props = { params: Promise<{ slug: string }> };

// Libellés dérivés de la source unique (ECOSYSTEM_CATEGORIES dans data.ts).
const CATEGORY_LABELS = Object.fromEntries(
  ECOSYSTEM_CATEGORIES.map((c) => [c.id, c.label]),
) as Record<EcosystemCategory, string>;

// Forme du logo par catégorie (entreprises = carré arrondi, individus/leaders = rond).
const CATEGORY_SHAPE = Object.fromEntries(
  ECOSYSTEM_CATEGORIES.map((c) => [c.id, c.shape]),
) as Record<EcosystemCategory, "square" | "round">;

/** True si un asset /public existe réellement (fallback bannière au build). */
function publicFileExists(p?: string): boolean {
  if (!p) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", p.replace(/^\//, "")));
  } catch {
    return false;
  }
}

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

/* ---------- Icônes réseaux (couverture des médias de l'entité) ---------- */
const SOCIAL_ICONS = {
  linkedin: (
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  ),
  twitter: <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65z" />,
  youtube: <path d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 00.5 6.2C0 8.09 0 12 0 12s0 3.91.5 5.8a3.02 3.02 0 002.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 002.12-2.14C24 15.91 24 12 24 12s0-3.91-.5-5.8zM9.6 15.6V8.4l6.24 3.6-6.24 3.6z" />,
  instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.86 5.86 0 00.63 4.14c-.3.76-.5 1.64-.56 2.9C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 002.12-1.38 5.86 5.86 0 001.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.12A5.86 5.86 0 0019.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-10.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  ),
  github: (
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  ),
  website: null,
} as const;

const SOCIAL_LABELS: Record<keyof typeof SOCIAL_ICONS, string> = {
  linkedin: "LinkedIn",
  twitter: "X (Twitter)",
  youtube: "YouTube",
  instagram: "Instagram",
  github: "GitHub",
  website: "Site web",
};

function SocialButton({ kind, href }: { kind: keyof typeof SOCIAL_ICONS; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={SOCIAL_LABELS[kind]}
      title={SOCIAL_LABELS[kind]}
      className="w-[38px] h-[38px] rounded-[8px] border border-ink-100 bg-cream-50 flex items-center justify-center text-forest-900 hover:border-forest-900/40 hover:text-forest-700 transition-colors"
    >
      {kind === "website" ? (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" strokeLinecap="round" />
        </svg>
      ) : (
        <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {SOCIAL_ICONS[kind]}
        </svg>
      )}
    </a>
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
  const hasBanner = publicFileExists(resource.banner);

  // Tags « ce qui est partagé » (sans langue). À défaut : le type.
  const shareTags =
    resource.shares && resource.shares.length > 0
      ? resource.shares
      : resource.type
        ? [resource.type]
        : [];

  // Réseaux/médias renseignés, dans un ordre stable.
  const socialOrder = ["linkedin", "twitter", "youtube", "instagram", "github", "website"] as const;
  const socialEntries = socialOrder
    .map((k) => [k, resource.socials?.[k]] as const)
    .filter((e): e is readonly [(typeof socialOrder)[number], string] => Boolean(e[1]));

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

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-12">
        {/* ===================== HERO (bannière + logo superposé) ===================== */}
        <header>
          {/* Bannière */}
          <div className="relative h-28 md:h-40 rounded-t-[16px] overflow-hidden bg-forest-900">
            {hasBanner ? (
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url('${resource.banner}')` }}
                aria-hidden="true"
              />
            ) : (
              <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 bg-cream-50/85 text-forest-900 text-[11px] px-2.5 py-1 rounded-md font-sans">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <circle cx="8.5" cy="10" r="1.5" />
                  <path d="M21 16l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Bannière à venir
              </span>
            )}
          </div>

          {/* Carte identité */}
          <div className="bg-cream-50 border border-ink-100 border-t-0 rounded-b-[16px] px-6 md:px-8 pb-8">
            {/* Logo superposé à la bannière */}
            <div className="relative z-10 inline-block -mt-12 mb-4">
              <EcosystemLogo
                resource={resource}
                size={88}
                shape={CATEGORY_SHAPE[resource.category]}
                className="ring-4 ring-cream-50 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Catégorie + ce qui est partagé */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="jm-pill">{CATEGORY_LABELS[resource.category]}</span>
              {shareTags.map((s) => (
                <span key={s} className="jm-pill">{s}</span>
              ))}
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 mb-2">
              {resource.name}
            </h1>
            <p className="text-base text-ink-700 leading-relaxed font-sans mb-6 max-w-2xl">
              {resource.tagline}
            </p>

            {/* CTA dofollow + réseaux */}
            <div className="flex flex-wrap items-center gap-2.5">
              {resource.url && (
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-forest-900 text-cream-50 text-sm font-medium hover:bg-forest-700 transition-colors font-sans rounded-[10px]"
                >
                  Visiter la ressource
                  <ExternalIcon />
                </a>
              )}
              {socialEntries.map(([kind, href]) => (
                <SocialButton key={kind} kind={kind} href={href} />
              ))}
            </div>
          </div>
        </header>

        {/* ===================== EN BREF (résumé de l'entité) ===================== */}
        <section className="rounded-[16px] border border-ink-100 bg-cream-50 p-6">
          <p className="jm-eyebrow">En bref</p>
          <p className="text-ink-700 leading-relaxed font-sans">
            {resource.summary ?? resource.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-4 text-xs text-ink-500 font-sans">
            <span><span className="text-ink-400">Éditeur</span> · {resource.org}</span>
            <span aria-hidden="true" className="w-1 h-1 bg-ink-200 rounded-full" />
            <span><span className="text-ink-400">Catégorie</span> · {CATEGORY_LABELS[resource.category]}</span>
            {resource.type && (
              <>
                <span aria-hidden="true" className="w-1 h-1 bg-ink-200 rounded-full" />
                <span><span className="text-ink-400">Type</span> · {resource.type}</span>
              </>
            )}
          </div>
        </section>

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
