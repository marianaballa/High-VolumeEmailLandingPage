import type { NextConfig } from 'next'

// GitHub Pages serves this project site from /<repository-name>/.
// Set BASE_PATH to '' (and SITE_URL to your domain) when using a custom domain.
const basePath = process.env.BASE_PATH ?? '/High-VolumeEmailLandingPage'
const siteUrl = process.env.SITE_URL ?? `https://marianaballa.github.io${basePath}`

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
}

export default nextConfig
