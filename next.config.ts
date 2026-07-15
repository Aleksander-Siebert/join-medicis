import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Toutes les images du site sont locales (/public). Ne PAS ajouter
  // remotePatterns avec un wildcard : cela transforme /_next/image en
  // proxy ouvert vers n'importe quelle image du web.
  experimental: {
    // Anime les transitions de route en utilisant l'API View Transitions du navigateur.
    // Chromium-only pour l'instant ; Safari/Firefox font la navigation classique.
    viewTransition: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Empêche le sniffing MIME des réponses.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Interdit l'embarquement du site en iframe (clickjacking).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // N'envoie que l'origine aux sites tiers.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Le site n'utilise ni caméra, ni micro, ni géolocalisation.
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // /skills → /ressources/skills
      // Le :slug([^.]+) exclut volontairement les segments avec un point
      // (ex. /skills/cold-email.md) pour ne PAS rediriger les fichiers
      // statiques téléchargeables servis depuis public/skills/.
      { source: "/skills", destination: "/ressources/skills", permanent: true },
      {
        source: "/skills/:slug([^.]+)",
        destination: "/ressources/skills/:slug",
        permanent: true,
      },

      // /authors → /auteurs
      // :slug([^.]+) exclut les segments avec un point (assets) pour ne pas
      // intercepter d'éventuels fichiers servis sous /authors/.
      { source: "/authors", destination: "/auteurs", permanent: true },
      { source: "/authors/:slug([^.]+)", destination: "/auteurs/:slug", permanent: true },

      // /request (page « Demander un Skill » supprimée) → /contribuer
      { source: "/request", destination: "/contribuer", permanent: true },

      // /ressources/ecosysteme → /ecosysteme
      { source: "/ressources/ecosysteme", destination: "/ecosysteme", permanent: true },
      {
        source: "/ressources/ecosysteme/:slug*",
        destination: "/ecosysteme/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
