"use client";

import { useEffect, useState } from "react";

const POLL_INTERVAL_MS = 30000;

type Props = {
  slug: string;
  initialViews: number;
  initialDownloads: number;
};

export default function LiveSkillStats({ slug, initialViews, initialDownloads }: Props) {
  const [views, setViews] = useState(initialViews);
  const [downloads, setDownloads] = useState(initialDownloads);

  // Increment view once per session per slug
  useEffect(() => {
    const sessionKey = `jm-viewed:${slug}`;
    if (sessionStorage.getItem(sessionKey)) return;
    sessionStorage.setItem(sessionKey, "1");

    fetch(`/api/skills/${slug}/view`, { method: "POST" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && typeof data.views === "number") setViews(data.views);
      })
      .catch(() => {
        /* silent */
      });
  }, [slug]);

  // Poll for fresh counts (downloads/views can change from other visitors)
  useEffect(() => {
    let cancelled = false;
    const tick = async () => {
      try {
        const res = await fetch(`/api/skills/${slug}/stats`, { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (cancelled) return;
        if (typeof data.views === "number") setViews(data.views);
        if (typeof data.downloads === "number") setDownloads(data.downloads);
      } catch {
        /* silent */
      }
    };
    // La page est statique : on rafraîchit immédiatement au montage,
    // puis on poll pour suivre les compteurs des autres visiteurs.
    tick();
    const id = window.setInterval(tick, POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, [slug]);

  // Listen to local "skill-download" events fired by SkillDownloadButton
  useEffect(() => {
    function handler(event: Event) {
      const detail = (event as CustomEvent<{ slug: string; downloads?: number }>).detail;
      if (detail.slug !== slug) return;
      if (typeof detail.downloads === "number") setDownloads(detail.downloads);
    }
    window.addEventListener("jm-skill-download", handler as EventListener);
    return () => window.removeEventListener("jm-skill-download", handler as EventListener);
  }, [slug]);

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 text-xs text-ink-400 font-sans">
      <span>
        <span className="font-medium text-ink-700 tabular-nums">{views}</span> vues
      </span>
      <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
      <span>
        <span className="font-medium text-ink-700 tabular-nums">{downloads}</span>{" "}
        téléchargements
      </span>
      <span className="w-1 h-1 bg-ink-200 rounded-full" aria-hidden="true" />
      <span className="inline-flex items-center gap-1.5 text-forest-700">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-forest-700 opacity-60 animate-ping" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-forest-700" />
        </span>
        en direct
      </span>
    </div>
  );
}
