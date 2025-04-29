import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/mncdetails' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mncdetails/' : '',
};

export default nextConfig;
