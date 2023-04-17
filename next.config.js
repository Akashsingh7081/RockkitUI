/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['localhost',`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/graphql}`],
  },
}

 module.exports = nextConfig
