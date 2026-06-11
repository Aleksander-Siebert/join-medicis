import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContributePopup from "@/components/ui/ContributePopup";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
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
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream-100 text-ink-900 antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ContributePopup />
      </body>
    </html>
  );
}
