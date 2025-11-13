import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ac.goit.global',
      },
      // Тут можна додати інші домени, якщо аватари будуть з інших джерел
    ],
  },
};

export default nextConfig;