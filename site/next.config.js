/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Young Security Kasm Registry',
    description: 'The Young Security store for Kasm supported workspaces.',
    icon: 'https://redlinejoes.github.io/kasm-registry/1.0/favicon.ico',
    listUrl: 'https://redlinejoes.github.io/kasm-registry/',
    contactUrl: 'https://github.com/redlinejoes/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
