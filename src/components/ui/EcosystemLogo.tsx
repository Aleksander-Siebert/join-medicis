import Image from "next/image";
import type { EcosystemResource } from "@/types";

/** Initiales de l'organisation pour le monogramme de repli. */
function monogram(org: string): string {
  return org
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function EcosystemLogo({
  resource,
  size = 48,
  shape = "square",
  className = "",
}: {
  resource: EcosystemResource;
  size?: number;
  /** "square" = coins arrondis à ~25% (entreprises) · "round" = cercle (individus / leaders). */
  shape?: "square" | "round";
  className?: string;
}) {
  // Round → cercle ; Square → coins arrondis à 25% de la taille.
  const borderRadius = shape === "round" ? 9999 : Math.round(size * 0.25);

  if (resource.logo) {
    return (
      <div
        className={`relative shrink-0 overflow-hidden bg-cream-50 border border-ink-100 ${className}`}
        style={{ width: size, height: size, borderRadius }}
      >
        <Image
          src={resource.logo}
          alt={`Logo ${resource.org}`}
          fill
          sizes={`${size}px`}
          className="object-contain p-1.5"
        />
      </div>
    );
  }

  return (
    <div
      className={`shrink-0 flex items-center justify-center bg-forest-900 text-cream-50 font-serif ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.36, borderRadius }}
      aria-hidden="true"
    >
      {monogram(resource.org)}
    </div>
  );
}
