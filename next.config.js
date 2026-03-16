/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    AEM_ENDPOINT_URL: process.env.AEM_ENDPOINT_URL,
    AEM_AUTH_TOKEN: process.env.AEM_AUTH_TOKEN,
  },
};

module.exports = nextConfig;
