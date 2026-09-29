import { pl } from './pl';
import { en } from './en';

export const locales = ['pl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pl';

const dictionaries = { pl, en };

export function t(locale: Locale) {
  return dictionaries[locale];
}

/** Root path of a locale: "/" for Polish, "/en/" for English. */
export function localeRoot(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(t(locale).dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Warsaw',
  }).format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
