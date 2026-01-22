import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apiplacas.com.br",
        pathname: "/logos/logosMarcas/**"
      }
    ]
  }
};

export default nextConfig;
