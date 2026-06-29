import Link from "next/link";
import { authors, skills } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auteurs",
  description:
    "Merci aux contributeurs de Join Médicis — Growth marketers, consultants SEO et experts IA qui font vivre la bibliothèque open-source.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AuthorsPage() {
  const totalSkills = skills.length;

  return (
    <div className="pt-16 min-h-screen bg-cream-100">
      {/* ===================== HEADER ===================== */}
      <section className="px-6 pt-20 pb-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-6xl md:text-7xl font-medium text-ink-900 leading-[0.95] mb-5">
            Les Auteurs
          </h1>
          <p className="text-ink-700 font-sans text-lg">
            <span className="text-forest-900 font-semibold">{authors.length}</span>{" "}
            contributeur{authors.length > 1 ? "s" : ""} font vivre{" "}
            <span className="text-forest-900 font-semibold">{totalSkills}</span>{" "}
            ressource{totalSkills > 1 ? "s" : ""} sur Join Médicis.
          </p>
        </div>
      </section>

      {/* ===================== THANK YOU ===================== */}
      <section className="px-6 pb-14">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[24px] p-8 md:p-10 text-cream-50"
          style={{ background: "linear-gradient(135deg, #0E3F2D 0%, #1F5B43 60%, #2D7259 120%)" }}
        >
          <span className="absolute -top-8 -right-4 text-[120px] leading-none font-serif text-cream-50/10 select-none" aria-hidden="true">
            ♥
          </span>
          <p className="relative font-serif text-2xl md:text-3xl font-medium leading-snug mb-3">
            Merci. Sincèrement.
          </p>
          <p className="relative text-cream-50/90 font-sans leading-relaxed max-w-2xl">
            Chaque Skill, chaque guide, chaque ligne de doc publiée ici existe
            grâce à des praticiens qui ont accepté de partager ce qui marche, gratuitement et
            en open-source. Sans eux, Join Médicis ne serait qu&rsquo;une page blanche.
          </p>
        </div>
      </section>

      {/* ===================== AUTHORS GRID ===================== */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {authors.map((author) => {
            const authorSkills = skills.filter((s) => s.authorSlug === author.slug);
            const count = authorSkills.length;
            const totalDownloads = authorSkills.reduce(
              (sum, s) => sum + (s.downloads ?? 0),
              0,
            );
            const expertise = (author.expertise ?? []).slice(0, 3);

            return (
              <Link
                key={author.slug}
                href={`/auteurs/${author.slug}`}
                className="group relative flex flex-col bg-cream-50 border border-ink-100 rounded-[20px] p-6 hover:border-forest-900/30 hover:-translate-y-0.5 transition-all"
              >
                {/* Identity */}
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="w-14 h-14 rounded-full bg-forest-900 text-cream-50 flex items-center justify-center font-sans font-bold text-lg shrink-0"
                    aria-hidden="true"
                  >
                    {initials(author.name)}
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-serif text-xl text-ink-900 font-medium leading-tight group-hover:text-forest-900 transition-colors truncate">
                      {author.name}
                    </h2>
                    <p className="text-xs text-ink-500 font-sans mt-0.5 line-clamp-1">
                      {author.role}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {author.location && (
                    <span className="text-xs font-sans font-medium bg-cream-200 text-ink-700 px-2.5 py-1 rounded-md">
                      {author.location}
                    </span>
                  )}
                  {expertise.map((x) => (
                    <span
                      key={x}
                      className="text-xs font-sans font-medium bg-forest-50 text-forest-800 px-2.5 py-1 rounded-md"
                    >
                      {x}
                    </span>
                  ))}
                </div>

                {/* Stats footer */}
                <div className="mt-auto pt-4 border-t border-ink-100 flex items-center gap-5 text-xs text-ink-500 font-sans">
                  <span>
                    <span className="font-bold text-forest-900">{count}</span>{" "}
                    ressource{count > 1 ? "s" : ""}
                  </span>
                  <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
                  <span>
                    <span className="font-bold text-forest-900">{totalDownloads}</span>{" "}
                    téléchargement{totalDownloads > 1 ? "s" : ""}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===================== JOIN CTA ===================== */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center border-t border-ink-100 pt-16">
          <h2 className="font-sans tracking-tight text-3xl md:text-4xl font-bold text-ink-900 mb-4">
            Envie de nous rejoindre ?
          </h2>
          <p className="text-ink-700 font-sans leading-relaxed max-w-xl mx-auto mb-8">
            Vous avez des connaissances et/ou compétences qui changent la donne
            dans votre quotidien ? Partagez-le. Votre nom rejoindra cette page et
            toute la communauté francophone vous en remerciera pour votre aide !
            <br />
            <br />
            Si besoin, vous pourrez personnaliser votre page auteur, il suffit
            juste de me contacter :)
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contribuer"
              className="px-7 py-3.5 bg-forest-900 text-cream-50 text-sm font-sans font-medium hover:bg-forest-700 transition-colors rounded-[12px]"
            >
              Contribuer →
            </Link>
            <Link
              href="/request"
              className="px-7 py-3.5 border border-ink-300 text-ink-900 text-sm font-sans font-medium hover:border-forest-900 hover:text-forest-900 transition-colors rounded-[12px]"
            >
              Demander un Skill
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
