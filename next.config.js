/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['s3-alpha-sig.figma.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        pathname: '/img/*',
      }
    ],
  },  
};

module.exports = nextConfig;
