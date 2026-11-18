# High-Volume Email Landing Page

Static landing page for the phpList **Pro Marketer VPS** plan, built with Next.js and Tailwind CSS and deployed to GitHub Pages.

## Local development

```sh
pnpm install
pnpm dev
```

## Deploy

Every push to `main` builds the site (`pnpm build` writes static files to `out/`) and deploys it with the workflow in `.github/workflows/deploy.yml`.

One-time setup: in the repository, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

The site is served at `https://marianaballa.github.io/High-VolumeEmailLandingPage/`. For a custom domain, set the `BASE_PATH` environment variable to an empty string and `SITE_URL` to your domain in the build step.

## Contact form (Mautic)

The contact section in `src/app/(frontend)/page.tsx` contains a sales card marked `MAUTIC FORM`. Replace it with your Mautic form when it is ready.
