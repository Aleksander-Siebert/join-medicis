import Link from "next/link";
import type { FAQItem } from "@/types";

/**
 * FAQ en HTML natif <details>/<summary> : entièrement crawlable (le texte des
 * réponses est dans le DOM au chargement) et accordé au schema FAQPage JSON-LD
 * rendu par la page. Pas de state React, pas de « use client ».
 */
export default function SkillFaqDetails({
  items,
  eyebrow = "Questions fréquentes",
  title,
  subtitle,
}: {
  items: FAQItem[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-t border-ink-100 px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-ink-300 mb-4 font-sans">
            {eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-ink-500 font-sans leading-relaxed">{subtitle}</p>
          )}
        </div>

        <div className="divide-y divide-ink-100 border-y border-ink-100">
          {items.map((faq, i) => (
            <details key={faq.question} className="group py-1" open={i === 0}>
              <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-serif text-lg leading-snug text-ink-700 group-open:text-ink-900 transition-colors">
                  {faq.question}
                </span>
                <svg
                  className="w-4 h-4 text-ink-400 shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-sm text-ink-500 leading-relaxed font-sans pr-10 pb-6">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="text-center text-sm text-ink-500 mt-12 font-sans">
          Tu as une autre question ?{" "}
          <Link
            href="/contact"
            className="text-forest-900 hover:text-forest-700 transition-colors underline underline-offset-4"
          >
            Contacte-nous directement
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
