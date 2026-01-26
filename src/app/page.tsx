import MarketingHeader from "@/components/sections/home/MarketingHeader";
import HeroSection from "@/components/sections/home/HeroSection";
import PlansSection from "@/components/sections/home/PlansSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text">
      <MarketingHeader />
      <HeroSection />
      <PlansSection />
    </main>
  );
}
