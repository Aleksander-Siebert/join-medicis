"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BookCover from "@/components/blog/BookCover";
import type { BookCollection } from "@/lib/collections";

type Props = {
  collections: BookCollection[];
  /** Pixels per second the strip translates. Lower = slower. */
  speed?: number;
};

export default function RotatingBookStrip({ collections, speed = 35 }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  // Duplicate the list so the marquee can loop seamlessly
  const items = [...collections, ...collections];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    let last = performance.now();
    let offset = 0;
    // Length of ONE pass of the original list (half of the duplicated track)
    const passLength = () => track.scrollWidth / 2;

    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused) {
        offset += dt * speed;
        const limit = passLength();
        if (limit > 0 && offset >= limit) offset -= limit;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);
  }, [paused, speed]);

  return (
    <div
      className="relative overflow-hidden -mx-2 px-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-label="Carrousel des autres collections"
    >
      {/* Fade gradients on the edges */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, rgba(15,14,12,0.95), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, rgba(15,14,12,0.95), transparent)" }}
      />

      <div
        ref={trackRef}
        className="flex gap-6 will-change-transform"
        style={{ width: "max-content" }}
      >
        {items.map((c, i) => (
          <Link
            key={`${c.slug}-${i}`}
            href={`/blog/collections/${c.slug}`}
            className="group shrink-0 w-[180px] focus:outline-none focus-visible:ring-2 focus-visible:ring-cream-50/40 rounded"
            aria-label={c.label}
          >
            <BookCover collection={c} size="sm" />
            <p className="mt-3 font-sans text-sm text-cream-50/90 group-hover:text-cream-50 leading-tight">
              {c.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
