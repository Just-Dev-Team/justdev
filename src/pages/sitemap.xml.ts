import type { APIRoute } from 'astro';
import { getPosts, getTranslation, postLocale, postPath } from '../lib/blog';
import { isoDate, type Locale } from '../i18n';
import { contentUpdated } from '../site';

interface Entry {
  loc: string;
  lastmod: string;
  alternates?: Partial<Record<Locale, string>>;
}

export const GET: APIRoute = async ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const pages: Entry[] = [];

  const pair = (pl: string, en: string, lastmod: string) => {
    for (const loc of [pl, en]) pages.push({ loc, lastmod, alternates: { pl, en } });
  };
  pair('/', '/en/', contentUpdated);

  const posts = await getPosts();
  const newest = posts[0] ? isoDate(posts[0].data.date) : contentUpdated;
  pair('/blog/', '/en/blog/', newest);

  for (const post of posts) {
    const translation = await getTranslation(post);
    const alternates: Partial<Record<Locale, string>> = { [postLocale(post)]: postPath(post) };
    if (translation) alternates[postLocale(translation)] = postPath(translation);
    pages.push({ loc: postPath(post), lastmod: isoDate(post.data.date), alternates });
  }

  const body = pages
    .map((p) => {
      const links =
        p.alternates?.pl && p.alternates?.en
          ? [
              `<xhtml:link rel="alternate" hreflang="pl" href="${abs(p.alternates.pl)}"/>`,
              `<xhtml:link rel="alternate" hreflang="en" href="${abs(p.alternates.en)}"/>`,
              `<xhtml:link rel="alternate" hreflang="x-default" href="${abs(p.alternates.pl)}"/>`,
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
