import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Join Médicis — Bibliothèque IA & Growth",
    template: "%s · Join Médicis",
  },
  description:
    "La bibliothèque open-source de l'IA & de l'automatisation pour les Growth & Digital Marketers francophones. Skills Claude, guides MCP, projets prêts à l'emploi.",
  keywords: ["IA", "Growth Marketing", "Claude", "Skills", "MCP", "francophone", "automation"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Join Médicis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-cream-100 text-ink-900 antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
