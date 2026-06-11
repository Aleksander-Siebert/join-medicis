import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import HowItWorks from "@/components/sections/HowItWorks";
import CategoryGrid from "@/components/sections/CategoryGrid";
import RecentSkills from "@/components/sections/RecentSkills";
import FAQ from "@/components/sections/FAQ";
import SupportProject from "@/components/sections/SupportProject";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <HowItWorks />
      <CategoryGrid />
      <RecentSkills />
      <FAQ />
      <SupportProject />
    </>
  );
}
