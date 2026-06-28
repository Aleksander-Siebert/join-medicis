import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div
          className="w-px h-20 bg-gradient-to-b from-transparent via-ink-100 to-transparent mx-auto mb-12"
          aria-hidden="true"
        />
        <p className="font-serif text-8xl font-light text-ink-100 mb-4 select-none">
          404
        </p>
        <h1 className="font-serif text-3xl font-light text-ink-900 mb-4">
          Page introuvable
        </h1>
        <p className="text-ink-500 font-sans text-sm leading-relaxed mb-10">
          Cette page n&rsquo;existe pas ou a été déplacée. Retournez à la
          bibliothèque.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-forest-900 text-cream-50 text-sm font-sans hover:bg-forest-700 transition-colors"
          >
            Retour à l&rsquo;accueil
          </Link>
          <Link
            href="/ressources/skills"
            className="px-6 py-3 border border-ink-200 text-ink-700 text-sm font-sans hover:border-ink-400 transition-colors"
          >
            Explorer les Skills
          </Link>
        </div>
      </div>
    </div>
  );
}
