import { getAllPosts } from "@/components/blog/blogData";
import { getBlogPostUrl } from "@/components/blog/blogSeo";

export default function BlogListSchema() {
  const posts = getAllPosts();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: getBlogPostUrl(post.slug),
    })),
  };

  return (
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  );
}
