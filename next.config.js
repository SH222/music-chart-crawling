//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `https://www.melon.com/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
