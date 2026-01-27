import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard",
          "/recuperar-senha",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: ["/blog", "/blog/"],
        disallow: [
          "/dashboard",
          "/recuperar-senha",
        ],
      },
    ],
    sitemap: "https://olhaessecarro.com.br/sitemap.xml",
    host: "https://olhaessecarro.com.br",
  };
}
