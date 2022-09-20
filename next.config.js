/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: ''
  },
  basePath: "/degen-doge",
  assetPrefix: '/degen-doge'
}

module.exports = nextConfig
