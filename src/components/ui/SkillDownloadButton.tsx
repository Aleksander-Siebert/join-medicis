"use client";

type Props = {
  slug: string;
  downloadUrl: string;
};

export default function SkillDownloadButton({ slug, downloadUrl }: Props) {
  const onClick = () => {
    // Fire-and-forget — the native <a download> still triggers the file download
    fetch(`/api/skills/${slug}/download`, { method: "POST" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && typeof data.downloads === "number") {
          window.dispatchEvent(
            new CustomEvent("jm-skill-download", {
              detail: { slug, downloads: data.downloads },
            }),
          );
        }
      })
      .catch(() => {
        /* silent */
      });
  };

  return (
    <a
      href={downloadUrl}
      download={`${slug}.md`}
      onClick={onClick}
      className="w-full px-4 py-3 bg-forest-900 text-cream-50 text-sm hover:bg-forest-700 transition-colors tracking-wide font-sans flex items-center justify-center gap-2"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
        />
      </svg>
      Télécharger .md
    </a>
  );
}
