# The Levant Review

Slow-journalism editorial site focused on Northern Cyprus (KKTC) — long-form
reporting on the economy & real estate, culture, and environment of the island.

**Live:** https://tolgaosman.github.io/news/

## Stack

Next.js 14 (App Router · static export) · TypeScript · Tailwind CSS ·
Framer Motion · lucide-react.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> out/
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds the static export and publishes it
to GitHub Pages. The repo's **Settings → Pages → Source** must be set to
**GitHub Actions**.
