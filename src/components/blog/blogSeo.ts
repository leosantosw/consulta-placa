import type { Metadata } from "next";
import type { BlogPost, BlogPostMeta } from "@/components/blog/blogData";

const baseUrl = "https://olhaessecarro.com.br";
const defaultImage = `${baseUrl}/images/blue-car.png`;

const buildOpenGraph = (url: string, title: string, description: string) => ({
  url,
  title,
  description,
  locale: "pt_BR",
  images: [
    {
      url: defaultImage,
      alt: title,
    },
  ],
});

const buildTwitter = (title: string, description: string) => ({
  card: "summary_large_image",
  title,
  description,
  images: [defaultImage],
});

export const getBlogIndexMetadata = (): Metadata => {
  const title = "Blog | Olha Esse Carro";
  const description =
    "Artigos e guias sobre consulta de placa, laudos completos e cuidados antes de comprar veículos.";
  const url = `${baseUrl}/blog`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      ...buildOpenGraph(url, title, description),
    },
    twitter: buildTwitter(title, description),
  };
};

export const getBlogPostMetadata = (post: BlogPost | BlogPostMeta): Metadata => {
  const title = `${post.title} | Olha Esse Carro`;
  const description = post.description;
  const url = `${baseUrl}/blog/${post.slug}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      ...buildOpenGraph(url, title, description),
    },
    twitter: buildTwitter(title, description),
  };
};

export const getBlogPostUrl = (slug: string) => `${baseUrl}/blog/${slug}`;

export const getBlogDefaultImage = () => defaultImage;

export const getBlogBaseUrl = () => baseUrl;
