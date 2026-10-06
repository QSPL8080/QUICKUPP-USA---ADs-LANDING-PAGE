/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'quickuppaistudio.us',
      },
    ],
  },
};

export default nextConfig;
