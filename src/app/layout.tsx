import type { Metadata } from "next";
import { Fraunces, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContributePopup from "@/components/ui/ContributePopup";
import JsonLd from "@/components/seo/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  OG_IMAGE,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const roboto = Roboto({
  subsets: ["latin"],
  // Roboto n'a pas de graisse 600 : on charge celles réellement utilisées
  // (font-medium 500, font-semibold ≈ 500, font-bold 700).
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Join Médicis — Bibliothèque IA & Growth",
    template: "%s · Join Médicis",
  },
  description: SITE_DESCRIPTION,
  keywords: ["IA", "Growth Marketing", "Claude", "Skills", "MCP", "francophone", "automation"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Join Médicis — Bibliothèque IA & Growth",
    description: SITE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Médicis — Bibliothèque IA & Growth",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // Vérification Google Search Console (propriété « préfixe d'URL »).
  // La propriété « Domaine » se vérifie, elle, par un enregistrement DNS TXT.
  verification: {
    google: "ZXg_clZQwUqd5VXJ1j0nnI2MnVJStsql8ZxeafUaZME",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${roboto.variable}`}>
      <body className="bg-cream-100 text-ink-900 antialiased font-sans">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ContributePopup />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
