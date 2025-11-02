import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/markets',
        destination: '/projects#market',
        permanent: false,
      },
      // Add more redirects if needed

    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bechtel.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com'
      },
      // ⭐ ADD THIS FOR SUPABASE PUBLIC URL
      {
        protocol: 'https',
        hostname: 'hdurfgtlqgpgjjnlbctu.supabase.co',
      }
    ],
  },
};

export default nextConfig;