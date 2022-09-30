/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    unoptimized: true,
    path: 'https://image.tmdb.org',
  },
};

module.exports = nextConfig;
