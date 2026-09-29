// schema.org structured data. Entities use stable @id URLs so pages reference
// the same Organization / Person / WebSite nodes instead of redefining them.
import { company } from '../site';
import { t, localeRoot, type Locale } from '../i18n';
import type { Post } from './blog';
import { postPath } from './blog';

const SITE = 'https://justdev.pl';
const abs = (path: string) => new URL(path, SITE).href;

export const ids = {
  org: `${SITE}/#organization`,
  person: `${SITE}/#artur-wegrzyn`,
  website: `${SITE}/#website`,
};

const inLanguage = (locale: Locale) => (locale === 'pl' ? 'pl-PL' : 'en');

function organization(locale: Locale) {
  const d = t(locale);
  return {
    '@type': 'ProfessionalService',
    '@id': ids.org,
    name: company.name,
    alternateName: company.brand,
    url: abs('/'),
    logo: { '@type': 'ImageObject', url: abs('/apple-touch-icon.png'), width: 180, height: 180 },
    image: abs(`/og-${locale}.png`),
    description: d.meta.homeDescription,
    email: company.email,
    telephone: company.phoneHref,
    foundingDate: String(company.foundingYear),
    founder: { '@id': ids.person },
    taxID: company.nip,
    vatID: company.vatEu,
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'NIP', value: company.nip },
      { '@type': 'PropertyValue', propertyID: 'REGON', value: company.regon },
    ],
    geo: { '@type': 'GeoCoordinates', latitude: company.geo.latitude, longitude: company.geo.longitude },
    hasMap: `https://www.google.com/maps?q=${company.geo.latitude},${company.geo.longitude}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      postalCode: company.postalCode,
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: company.countryCode,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: company.email,
      telephone: company.phoneHref,
      availableLanguage: ['Polish', 'English'],
    },
    areaServed: [
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'Place', name: 'Europe' },
    ],
    knowsLanguage: ['pl', 'en'],
    knowsAbout: [
      'Java',
      'Kotlin',
      'Python',
      'Backend development',
      'Scalable systems',
      'Distributed systems',
      'Cloud infrastructure',
      'Infrastructure as code',
      'CI/CD',
      'Application security',
      'E-commerce',
    ],
    makesOffer: d.services.items.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.body,
        provider: { '@id': ids.org },
        areaServed: { '@type': 'Place', name: 'Europe' },
      },
    })),
  };
}

function person() {
  return {
    '@type': 'Person',
    '@id': ids.person,
    name: company.owner,
    jobTitle: 'Owner, backend and cloud infrastructure engineer',
    worksFor: { '@id': ids.org },
    sameAs: [company.linkedin, company.github],
    memberOf: { '@type': 'Organization', name: 'Kielce Java User Group', alternateName: 'KJUG', url: company.kjug },
    address: { '@type': 'PostalAddress', addressLocality: company.city, addressCountry: company.countryCode },
  };
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: abs('/'),
    name: 'JustDev',
    inLanguage: ['pl-PL', 'en'],
    publisher: { '@id': ids.org },
  };
}

function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes });

export function homeSchema(locale: Locale) {
  const d = t(locale);
  const url = abs(localeRoot(locale));
  return graph(website(), organization(locale), person(), {
    '@type': ['WebPage', 'FAQPage'],
    '@id': `${url}#webpage`,
    url,
    name: d.meta.homeTitle,
    description: d.meta.homeDescription,
    inLanguage: inLanguage(locale),
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.org },
    mainEntity: d.faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });
}

export function blogIndexSchema(locale: Locale, posts: Post[]) {
  const d = t(locale);
  const root = localeRoot(locale);
  const url = abs(`${root}blog/`);
  return graph(
    {
      '@type': 'Blog',
      '@id': `${url}#blog`,
      url,
      name: d.meta.blogTitle,
      description: d.meta.blogDescription,
      inLanguage: inLanguage(locale),
      isPartOf: { '@id': ids.website },
      publisher: { '@id': ids.org },
      blogPost: posts.map((p) => ({ '@id': `${abs(postPath(p))}#article` })),
    },
    breadcrumbs([
      { name: d.blog.home, path: root },
      { name: d.blog.title, path: `${root}blog/` },
    ]),
  );
}

export function postSchema(post: Post, locale: Locale) {
  const d = t(locale);
  const root = localeRoot(locale);
  const url = abs(postPath(post));
  const published = post.data.date.toISOString();
  return graph(
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      mainEntityOfPage: url,
      url,
      headline: post.data.title,
      description: post.data.description,
      inLanguage: inLanguage(locale),
      datePublished: published,
      dateModified: (post.data.updated ?? post.data.date).toISOString(),
      image: abs(`/og-${locale}.png`),
      author: { '@id': ids.person },
      publisher: { '@id': ids.org },
      isPartOf: { '@id': `${abs(`${root}blog/`)}#blog` },
    },
    person(),
    { '@type': 'Organization', '@id': ids.org, name: company.name, url: abs('/'), logo: abs('/apple-touch-icon.png') },
    breadcrumbs([
      { name: d.blog.home, path: root },
      { name: d.blog.title, path: `${root}blog/` },
      { name: post.data.title, path: postPath(post) },
    ]),
  );
}
