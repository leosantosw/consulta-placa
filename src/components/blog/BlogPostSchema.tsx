import type { BlogPost } from "@/components/blog/blogData";
import {
  getBlogBaseUrl,
  getBlogDefaultImage,
  getBlogPostUrl,
} from "@/components/blog/blogSeo";

type BlogPostSchemaProps = {
  post: BlogPost;
};

export default function BlogPostSchema({ post }: BlogPostSchemaProps) {
  const baseUrl = getBlogBaseUrl();
  const url = getBlogPostUrl(post.slug);
  const authorName = post.author?.trim();
  const publishedDate = post.date;
  const modifiedDate = post.modified ?? post.date;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    headline: post.title,
    description: post.description,
    image: [getBlogDefaultImage()],
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: authorName
      ? {
          "@type": "Person",
          name: authorName,
        }
      : {
          "@type": "Organization",
          name: "Olha Esse Carro",
          url: baseUrl,
        },
    publisher: {
      "@type": "Organization",
      name: "Olha Esse Carro",
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  );
}
