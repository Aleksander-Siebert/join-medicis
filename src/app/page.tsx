import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import HowItWorks from "@/components/sections/HowItWorks";
import BeginnerPath from "@/components/sections/BeginnerPath";
import RecentSkills from "@/components/sections/RecentSkills";
import FAQ from "@/components/sections/FAQ";
import SupportProject from "@/components/sections/SupportProject";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <HowItWorks />
      <BeginnerPath />
      <RecentSkills />
      <FAQ />
      <SupportProject />
    </>
  );
}
