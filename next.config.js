/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_AEM_ENDPOINT: process.env.NEXT_PUBLIC_AEM_ENDPOINT || 'http://localhost:4502',
  },
};

module.exports = nextConfig;
