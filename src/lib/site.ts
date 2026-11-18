// Values are injected by next.config.ts so links and assets work under the
// GitHub Pages sub-path (e.g. /High-VolumeEmailLandingPage).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

/** Prefix a public-folder path such as `/logo.svg` with the base path. */
export function asset(path: string) {
  return `${basePath}${path}`
}
