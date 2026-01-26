import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://olhaessecarro.com.br/sitemap.xml",
    host: "https://olhaessecarro.com.br",
  };
}
