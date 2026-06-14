import HeroSection from "@/components/home/HeroSection";
import PopularPicks from "@/components/home/PopularPicks";
import ExperienceSection from "@/components/home/ExperienceSection";
import ReviewSection from "@/components/home/ReviewSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-background overflow-hidden">
      <HeroSection />
      <PopularPicks />
      {/* 
        This single component replaces both BrandStory & FeaturesSection.
        You can now safely delete those two old files.
      */}
      <ExperienceSection />
      <ReviewSection />
      <CtaSection />
    </main>
  );
}