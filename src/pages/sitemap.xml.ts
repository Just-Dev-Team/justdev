import type { APIRoute } from 'astro';
import { getPosts, postAlternates, postPath } from '../lib/blog';
import { isoDate, localeAlternates, presentLocales, xDefault, type Locale } from '../i18n';
import { contentUpdated } from '../site';

interface Entry {
  loc: string;
  lastmod: string;
  alternates: Partial<Record<Locale, string>>;
}

export const GET: APIRoute = async ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const pages: Entry[] = [];

  const group = (alternates: Partial<Record<Locale, string>>, lastmod: string) => {
    for (const loc of Object.values(alternates)) pages.push({ loc, lastmod, alternates });
  };
  group(localeAlternates(), contentUpdated);

  const posts = await getPosts();
  const newest = posts[0] ? isoDate(posts[0].data.date) : contentUpdated;
  group(localeAlternates('blog/'), newest);

  for (const post of posts) {
    pages.push({ loc: postPath(post), lastmod: isoDate(post.data.date), alternates: await postAlternates(post) });
  }

  const body = pages
    .map((p) => {
      const langs = presentLocales(p.alternates);
      const links =
        langs.length > 1
          ? [
              ...langs.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(p.alternates[l]!)}"/>`),
              `<xhtml:link rel="alternate" hreflang="x-default" href="${abs(xDefault(p.alternates)!)}"/>`,
            ].join('')
          : '';
      return `<url><loc>${abs(p.loc)}</loc><lastmod>${p.lastmod}</lastmod>${links}</url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
