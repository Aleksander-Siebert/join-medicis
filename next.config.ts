import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Autorise les images distantes (https) en plus des images locales dans /public.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
