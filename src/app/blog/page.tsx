import MarketingHeader from "@/components/sections/home/MarketingHeader";
import BlogHeroSection from "@/components/sections/blog/BlogHeroSection";
import BlogListSection from "@/components/sections/blog/BlogListSection";
import FooterSection from "@/components/sections/home/FooterSection";
import ScrollToTopButton from "@/components/sections/home/ScrollToTopButton";
import { getBlogIndexMetadata } from "@/components/blog/blogSeo";
import BlogListSchema from "@/components/blog/BlogListSchema";

export const metadata = getBlogIndexMetadata();

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-text">
      <BlogListSchema />
      <MarketingHeader />
      <BlogHeroSection />
      <BlogListSection />
      <FooterSection />
      <ScrollToTopButton />
    </main>
  );
}
