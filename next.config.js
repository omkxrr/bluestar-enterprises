/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bluestarenterprises.co.in',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
