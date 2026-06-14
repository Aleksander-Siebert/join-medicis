"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import BookCover from "@/components/blog/BookCover";
import type { BookCollection } from "@/lib/collections";

type Props = {
  collections: BookCollection[];
};

export default function BookCarousel({ collections }: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateButtons();
    const onScroll = () => updateButtons();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex gap-7 overflow-x-auto pb-4 pt-2 -mx-6 px-6 snap-x snap-mandatory scroll-smooth scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {collections.map((c) => (
          <Link
            key={c.slug}
            href={`/blog/collections/${c.slug}`}
            className="group/book shrink-0 snap-start focus:outline-none focus-visible:ring-2 focus-visible:ring-cream-50/40 rounded"
            aria-label={c.label}
          >
            <BookCover collection={c} size="md" transitionName={`book-${c.slug}`} />
          </Link>
        ))}
      </div>

      {/* Right arrow — always visible if scrollable */}
      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Suivant"
        className={`absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ink-900/60 backdrop-blur-sm border border-cream-50/15 text-cream-50 flex items-center justify-center transition-opacity hover:bg-ink-900/80 ${
          canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Left arrow — visible only when scrolled */}
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Précédent"
        className={`absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ink-900/60 backdrop-blur-sm border border-cream-50/15 text-cream-50 flex items-center justify-center transition-opacity hover:bg-ink-900/80 ${
          canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
