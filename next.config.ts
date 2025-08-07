import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "http://localhost:4200/uploads/:path*", /// для картинок перезаписывание пути
      },
    ];
  },
};

export default nextConfig;
