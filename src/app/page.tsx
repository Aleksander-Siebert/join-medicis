import Hero from "@/components/sections/Hero";
import CategoryGrid from "@/components/sections/CategoryGrid";
import RecentSkills from "@/components/sections/RecentSkills";
import FAQ from "@/components/sections/FAQ";
import NewsletterCTA from "@/components/sections/NewsletterCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <RecentSkills />
      <FAQ />
      <NewsletterCTA />
    </>
  );
}
