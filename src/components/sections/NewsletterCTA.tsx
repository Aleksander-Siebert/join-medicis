const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function NewsletterCTA() {
  return (
    <section className="relative py-24 px-6 border-t border-ink-100 bg-forest-900 overflow-hidden">
      {/* Decorative top line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-forest-700"
      />

      {/* Decorative SVG */}
      <div
        aria-hidden="true"
        className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block"
      >
        <svg width="120" height="120" viewBox="0 0 60 60" fill="none" stroke="#FAF7F2" strokeWidth="0.6">
          <path d="M30 5 C40 10, 50 20, 45 30 C40 40, 20 45, 15 35 C10 25, 20 10, 30 15 C40 20, 50 30, 42 38 C34 46, 18 42, 14 32 C10 22, 22 8, 32 12" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-widest uppercase text-forest-600 mb-6 font-sans">
          Suivre le projet
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-cream-50 mb-5">
          Nouveaux Skills chaque semaine
        </h2>
        <p className="text-forest-600 text-base leading-relaxed mb-10 font-sans">
          Suivez les nouvelles ressources, tutoriels et actualités Growth IA
          directement sur LinkedIn.
        </p>
        <a
          href="https://www.linkedin.com/in/aleksander-siebert/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-cream-50 text-forest-900 text-sm tracking-wide hover:bg-cream-100 transition-colors font-sans"
        >
          <LinkedInIcon />
          Suivre sur LinkedIn
        </a>
        <p className="mt-6 text-xs text-forest-700 font-sans">
          Gratuit · Sans spam · Désabonnement en 1 clic
        </p>
      </div>
    </section>
  );
}
