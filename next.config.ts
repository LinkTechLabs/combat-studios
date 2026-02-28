import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
