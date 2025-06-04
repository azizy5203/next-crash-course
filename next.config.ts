import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'standalone',
  // output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
