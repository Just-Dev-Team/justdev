# justdev.pl

Company website of JustDev Artur Węgrzyn — static site built with [Astro](https://astro.build), Polish (`/`) and English (`/en/`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + static build to dist/
```

- Content: `src/i18n/pl.ts`, `src/i18n/en.ts` (homepage copy), `src/site.ts` (company data), `src/content/blog/{pl,en}/*.md` (posts, paired by `translationKey`).
- Deploy: push to `master` → GitHub Actions (`.github/workflows/deploy.yml`) → GitHub Pages.
