// /llms.txt — plain-Markdown summary of the site for AI assistants and answer engines
// (https://llmstxt.org). Generated from the same data as the pages, so it stays in sync.
import type { APIRoute } from 'astro';
import { company } from '../site';
import { t } from '../i18n';
import { getPosts, postLocale, postPath } from '../lib/blog';

export const GET: APIRoute = async ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const en = t('en');
  const pl = t('pl');
  const posts = await getPosts();

  const lines = [
    '# JustDev',
    '',
    `> ${company.name} is a software engineering company based in ${company.city}, Poland, operating since ${company.foundingYear}. It designs, builds and runs highly scalable backends in Java, Kotlin and Python, together with the cloud infrastructure they run on. Experience: large-scale European e-commerce (as a subcontractor to software companies) and the Polish public sector. Client names are not published because of NDAs.`,
    '',
    'The website is available in Polish (default) and English.',
    '',
    '## Company facts',
    '',
    `- Legal name: ${company.name} (sole proprietorship registered in Poland, CEIDG)`,
    `- NIP (tax ID): ${company.nip}`,
    `- REGON: ${company.regon}`,
    `- EU VAT number: ${company.vatEu}`,
    `- Address: ${company.street}, ${company.postalCode} ${company.city}, Poland`,
    `- Email: ${company.email}`,
    `- Phone: ${company.phoneDisplay}`,
    `- Founded: ${company.foundingYear}`,
    `- Owner: ${company.owner} (${company.linkedin}), co-organiser of Kielce Java User Group (${company.kjug})`,
    '- Working languages: English, Polish',
    '- Works remotely with clients in Poland and across Europe',
    '',
    '## Services',
    '',
    ...en.services.items.map((s) => `- **${s.title}**: ${s.body}`),
    '',
    '## Experience',
    '',
    ...en.experience.sectors.map((s) => `- **${s.title}**: ${s.body}`),
    '',
    '## FAQ',
    '',
    ...en.faq.items.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
    '## Pages',
    '',
    `- [Home (English)](${abs('/en/')}): ${en.meta.homeDescription}`,
    `- [Strona główna (Polski)](${abs('/')}): ${pl.meta.homeDescription}`,
    `- [Blog (English)](${abs('/en/blog/')})`,
    `- [Blog (Polski)](${abs('/blog/')})`,
    ...posts.map((p) => `- [${p.data.title}](${abs(postPath(p))}) (${postLocale(p) === 'en' ? 'English' : 'Polski'}): ${p.data.description}`),
    '',
    '## Profiles',
    '',
    `- LinkedIn: ${company.linkedin}`,
    `- GitHub: ${company.github}`,
    `- Kielce Java User Group: ${company.kjug}`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
