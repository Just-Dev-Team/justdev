import { pl, type Dict } from './pl';
import { en } from './en';
import { de } from './de';
import { fr } from './fr';

export const locales = ['pl', 'en', 'de', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pl';

/** Native language names, shown in the language switch. */
export const localeNames: Record<Locale, string> = {
  pl: 'Polski',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
};

const dictionaries: Record<Locale, Dict> = { pl, en, de, fr };

export function t(locale: Locale) {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Root path of a locale: "/" for the default (Polish), "/en/", "/de/", "/fr/" otherwise. */
export function localeRoot(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

/** The same page in every locale, e.g. localeAlternates('blog/') → { pl: '/blog/', en: '/en/blog/', … }. */
export function localeAlternates(subpath = ''): Record<Locale, string> {
  return Object.fromEntries(locales.map((l) => [l, `${localeRoot(l)}${subpath}`])) as Record<Locale, string>;
}

/** Locales present in an alternates map, in canonical order. */
export function presentLocales(alternates: Partial<Record<Locale, string>>): Locale[] {
  return locales.filter((l) => Boolean(alternates[l]));
}

/** The page hreflang="x-default" should point at: the default locale if available, else the first available. */
export function xDefault(alternates: Partial<Record<Locale, string>>): string | undefined {
  return alternates[defaultLocale] ?? presentLocales(alternates).map((l) => alternates[l])[0];
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
