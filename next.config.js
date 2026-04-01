/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_AEM_AUTHOR_URL: process.env.NEXT_PUBLIC_AEM_AUTHOR_URL,
    NEXT_PUBLIC_AEM_PUBLISH_URL: process.env.NEXT_PUBLIC_AEM_PUBLISH_URL,
    NEXT_PUBLIC_CF_FRAGMENT_PATH: process.env.NEXT_PUBLIC_CF_FRAGMENT_PATH,
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  },
};

module.exports = nextConfig;
