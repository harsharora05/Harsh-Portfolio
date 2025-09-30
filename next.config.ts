import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',       // must match the image URL
        hostname: 'cdn.sanity.io',
        port: '',                // usually empty
        pathname: '/images/**',  // allow all images in this path
      },
    ],
  },
};

export default nextConfig;
