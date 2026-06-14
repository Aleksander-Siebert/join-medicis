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
};

export default nextConfig;
