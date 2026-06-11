"use client";

import { useState } from "react";
import Aurora from "@/components/effects/Aurora";

const LINKEDIN_PROFILE = "https://www.linkedin.com/in/aleksander-siebert/";
// TODO: replace with the real LinkedIn newsletter URL once published
const NEWSLETTER_URL = "https://www.linkedin.com/in/aleksander-siebert/recent-activity/newsletter/";
const SITE_URL = "https://join-medicis.vercel.app";
const SHARE_TEXT =
  "Join Médicis — bibliothèque open-source Skills Claude, MCP & Growth IA pour marketers francophones.";

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

function ShareCard() {
  const [copied, setCopied] = useState(false);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SITE_URL)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* silently ignore */
    }
  };

  return (
    <article className="group flex flex-col h-full p-7 bg-forest-800/55 backdrop-blur-sm border border-forest-700/60 hover:border-cream-50/40 transition-colors rounded-[25px]">
      <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-cream-50/10 text-cream-50 mb-5">
        <ShareIcon />
      </span>
      <h3 className="font-serif text-2xl text-cream-50 font-medium mb-2">
        Partager le site
      </h3>
      <p className="text-sm text-cream-50/75 leading-relaxed font-sans mb-6 flex-1">
        Un partage = un marketer francophone gagné à la cause de l&rsquo;IA accessible.
      </p>

      <div className="flex flex-col gap-2">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-cream-50 text-forest-900 text-sm hover:bg-cream-100 transition-colors font-sans font-medium"
        >
          <TwitterIcon />
          Partager sur X
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-cream-50/10 text-cream-50 text-sm hover:bg-cream-50/20 transition-colors font-sans font-medium border border-cream-50/20"
        >
          <LinkedInIcon />
          Partager sur LinkedIn
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-cream-50/85 text-sm hover:text-cream-50 transition-colors font-sans"
        >
          {copied ? <CheckIcon /> : <LinkIcon />}
          {copied ? "Lien copié" : "Copier le lien"}
        </button>
      </div>
    </article>
  );
}

export default function SupportProject() {
  return (
    <section className="relative py-24 px-6 border-t border-ink-100 bg-forest-900 overflow-hidden">
      {/* Aurora background — reactbits.dev/backgrounds/aurora */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Aurora
          colorStops={["#0E3F2D", "#3E8E6F", "#B89253"]}
          blend={0.55}
          amplitude={1.1}
          speed={0.45}
        />
      </div>
      {/* Subtle dark overlay to keep card text readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-forest-900/55"
      />
      {/* Decorative top line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-forest-700"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-forest-500 mb-5 font-sans font-semibold">
            Soutenir le projet
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-cream-50 mb-4 leading-[1.05]">
            Trois manières <em className="italic text-forest-500">d&rsquo;aider.</em>
          </h2>
          <p className="font-serif italic text-lg text-cream-50/75 max-w-xl mx-auto">
            Join Médicis reste gratuit et open-source. Voilà comment vous pouvez contribuer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* LinkedIn follow */}
          <article className="group flex flex-col h-full p-7 bg-forest-800/55 backdrop-blur-sm border border-forest-700/60 hover:border-cream-50/40 transition-colors rounded-[25px]">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-cream-50/10 text-cream-50 mb-5">
              <LinkedInIcon />
            </span>
            <h3 className="font-serif text-2xl text-cream-50 font-medium mb-2">
              Me suivre sur LinkedIn
            </h3>
            <p className="text-sm text-cream-50/75 leading-relaxed font-sans mb-6 flex-1">
              Actualités du projet, ressources, retours d&rsquo;expérience Growth + IA en français.
            </p>
            <a
              href={LINKEDIN_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-cream-50 text-forest-900 text-sm hover:bg-cream-100 transition-colors font-sans font-medium"
            >
              <LinkedInIcon />
              Suivre Aleksander
            </a>
          </article>

          {/* Newsletter */}
          <article className="group flex flex-col h-full p-7 bg-forest-800/55 backdrop-blur-sm border border-forest-700/60 hover:border-cream-50/40 transition-colors rounded-[25px]">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-cream-50/10 text-cream-50 mb-5">
              <MailIcon />
            </span>
            <h3 className="font-serif text-2xl text-cream-50 font-medium mb-2">
              Growth with Claude
            </h3>
            <p className="text-sm text-cream-50/75 leading-relaxed font-sans mb-6 flex-1">
              Une newsletter hebdo : Skills à tester, workflows IA, et stratégies Growth qui marchent vraiment.
            </p>
            <a
              href={NEWSLETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-cream-50 text-forest-900 text-sm hover:bg-cream-100 transition-colors font-sans font-medium"
            >
              <MailIcon />
              S&rsquo;abonner gratuitement
            </a>
            <p className="mt-3 text-[11px] text-cream-50/55 text-center font-sans">
              Sans spam · Désabonnement en 1 clic
            </p>
          </article>

          {/* Share */}
          <ShareCard />
        </div>
      </div>
    </section>
  );
}
