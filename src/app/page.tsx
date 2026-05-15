import Hero from "@/components/sections/Hero";
import CategoryGrid from "@/components/sections/CategoryGrid";
import RecentSkills from "@/components/sections/RecentSkills";
import NewsletterCTA from "@/components/sections/NewsletterCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <RecentSkills />
      <NewsletterCTA />
    </>
  );
}
