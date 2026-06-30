import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Autorise les images distantes (https) en plus des images locales dans /public.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  experimental: {
    // Anime les transitions de route en utilisant l'API View Transitions du navigateur.
    // Chromium-only pour l'instant ; Safari/Firefox font la navigation classique.
    viewTransition: true,
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
