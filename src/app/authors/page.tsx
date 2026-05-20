import Link from "next/link";
import { authors, skills } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auteurs",
  description:
    "Les contributeurs de Join Médicis — Growth marketers, consultants SEO, experts CRO qui maintiennent la bibliothèque.",
};

export default function AuthorsPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="border-b border-ink-100 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-5 font-sans">
            Auteurs
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink-900 mb-5">
            Les contributeurs de Join Médicis
          </h1>
          <p className="text-ink-500 leading-relaxed font-sans max-w-2xl">
            Growth marketers, consultants SEO, experts CRO. Chaque Skill publié
            est maintenu par un praticien qui l&rsquo;utilise sur ses propres
            projets.
          </p>
        </div>
      </div>

      {/* Authors grid */}
      <div className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-100">
          {authors.map((author) => {
            const count = skills.filter((s) => s.authorSlug === author.slug).length;
            const totalDownloads = skills
              .filter((s) => s.authorSlug === author.slug)
              .reduce((sum, s) => sum + (s.downloads ?? 0), 0);

            return (
              <Link
                key={author.slug}
                href={`/authors/${author.slug}`}
                className="bg-cream-100 p-8 hover:bg-cream-200 transition-colors group"
              >
                <div className="flex items-start gap-5">
                  {/* Avatar placeholder */}
                  <div
                    className="w-16 h-16 rounded-full bg-forest-900 text-cream-50 flex items-center justify-center font-serif text-xl shrink-0"
                    aria-hidden="true"
                  >
                    {author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="font-serif text-2xl font-light text-ink-900 mb-1 group-hover:text-forest-900 transition-colors">
                      {author.name}
                    </h2>
                    <p className="text-xs tracking-widest uppercase text-ink-300 mb-3 font-sans">
                      {author.role}
                    </p>
                    <p className="text-sm text-ink-500 leading-relaxed font-sans line-clamp-3">
                      {author.bio}
                    </p>

                    <div className="mt-5 flex items-center gap-5 text-xs text-ink-400 font-sans">
                      <span>
                        <span className="font-medium text-ink-700">{count}</span>{" "}
                        skill{count > 1 ? "s" : ""}
                      </span>
                      <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
                      <span>
                        <span className="font-medium text-ink-700">{totalDownloads}</span>{" "}
                        téléchargements
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
