# justdev.pl

Company website of JustDev Artur Węgrzyn — static site built with [Astro](https://astro.build), Polish (`/`), English (`/en/`), German (`/de/`) and French (`/fr/`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + static build to dist/
```

- Content: `src/i18n/{pl,en,de,fr}.ts` (homepage copy), `src/site.ts` (company data), `src/content/blog/{pl,en,de,fr}/*.md` (posts, paired by `translationKey`).
- Adding a language: dictionary in `src/i18n/`, entry in `locales` (`src/i18n/index.ts`) and `astro.config.mjs`, pages under `src/pages/<locale>/`, `public/og-<locale>.png`.
- Deploy: push to `master` → GitHub Actions (`.github/workflows/deploy.yml`) → GitHub Pages.
