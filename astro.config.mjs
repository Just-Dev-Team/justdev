// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://justdev.pl',
  output: 'static',
  trailingSlash: 'always',
  build: {
    // Keeps privacy-policy-garmin-connect-iq-apps.astro at its historical .html URL;
    // index.astro files still produce directory-style URLs.
    format: 'preserve',
  },
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
