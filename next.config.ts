import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
} as NextConfig;

export default nextConfig;
