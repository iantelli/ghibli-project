/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'myLoader',
    path: 'https://image.tmdb.org',
  },
};

module.exports = nextConfig;
