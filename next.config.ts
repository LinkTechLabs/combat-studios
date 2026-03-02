import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for static export (no Next.js image server)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "combat-studios.com",
        pathname: "/assets/img/**",
      },
    ],
  },
};

export default nextConfig;
