import Link from "next/link";
import type { FAQItem } from "@/types";
import FleurDeLys from "@/components/ui/FleurDeLys";

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

        <div className="space-y-3">
          {items.map((faq, i) => (
            <details
              key={faq.question}
              className="group rounded-[18px] border border-forest-900 bg-forest-900 [&:not([open])]:hover:bg-forest-700 [&:not([open])]:hover:border-forest-700 transition-colors"
              open={i === 0}
            >
              <summary className="flex items-center justify-between gap-5 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-sans font-bold text-cream-50 text-base md:text-lg leading-snug">
                  {faq.question}
                </span>
                <FleurDeLys className="w-5 h-5 shrink-0 text-cream-50 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                <div className="border-t border-dashed border-cream-50/25 pt-4">
                  <p className="text-sm text-cream-50/80 leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              </div>
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
