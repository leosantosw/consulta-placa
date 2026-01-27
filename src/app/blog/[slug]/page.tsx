import { notFound } from "next/navigation";
import BlogPostSection from "@/components/sections/blog/BlogPostSection";
import MarketingHeader from "@/components/sections/home/MarketingHeader";
import FooterSection from "@/components/sections/home/FooterSection";
import ScrollToTopButton from "@/components/sections/home/ScrollToTopButton";
import { getAllPosts, getPostBySlug } from "@/components/blog/blogData";
import BlogPostSchema from "@/components/blog/BlogPostSchema";
import { getBlogPostMetadata } from "@/components/blog/blogSeo";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  getAllPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({
  params,
}: BlogPageProps) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: "Post não encontrado | Olha Esse Carro",
    };
  }
  return getBlogPostMetadata(post);
};

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  return (
    <main className="min-h-screen bg-background text-text">
      <BlogPostSchema post={post} />
      <MarketingHeader />
      <BlogPostSection post={post} />
      <FooterSection />
      <ScrollToTopButton />
    </main>
  );
}
