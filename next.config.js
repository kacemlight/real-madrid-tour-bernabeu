/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'publish-*.adobeaemcloud.com' },
      { protocol: 'https', hostname: 'www.realmadrid.com' },
    ],
  },
};
module.exports = nextConfig;