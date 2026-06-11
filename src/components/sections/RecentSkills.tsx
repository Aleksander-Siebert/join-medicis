import Link from "next/link";
import { skills } from "@/lib/data";
import SkillCard from "@/components/ui/SkillCard";

export default function RecentSkills() {
  const recent = skills.slice(0, 3);

  return (
    <section className="py-20 px-6 border-t border-ink-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-5">
            <span className="text-xs tracking-widest uppercase text-ink-300 font-sans shrink-0">
              Derniers ajouts
            </span>
            <div className="w-16 h-px bg-ink-100" aria-hidden="true" />
          </div>
          <Link
            href="/skills"
            className="text-sm text-ink-500 hover:text-ink-900 transition-colors flex items-center gap-1 font-sans"
          >
            Voir tout
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recent.map((skill) => (
            <div key={skill.slug} className="bg-cream-50 border border-ink-100 rounded-[25px] overflow-hidden hover:border-forest-900/30 transition-all">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors border-b border-ink-100 hover:border-ink-400 pb-0.5 font-sans"
          >
            Voir les {skills.length} Skills disponibles →
          </Link>
        </div>
      </div>
    </section>
  );
}
