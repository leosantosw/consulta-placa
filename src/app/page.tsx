import { metadata } from "./metadata";
import HomeSchema from "@/components/sections/home/HomeSchema";
import MarketingHeader from "@/components/sections/home/MarketingHeader";
import HeroSection from "@/components/sections/home/HeroSection";
import PlansSection from "@/components/sections/home/PlansSection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import FaqSection from "@/components/sections/home/FaqSection";
import FooterSection from "@/components/sections/home/FooterSection";
import ScrollToTopButton from "@/components/sections/home/ScrollToTopButton";

export { metadata };

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text">
      <HomeSchema />
      <MarketingHeader />
      <HeroSection />
      <PlansSection />
      <HowItWorksSection />
      <FaqSection />
      <FooterSection />
      <ScrollToTopButton />
    </main>
  );
}
