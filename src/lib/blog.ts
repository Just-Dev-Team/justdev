import { getCollection, type CollectionEntry } from 'astro:content';
import { localeRoot, defaultLocale, isLocale, type Locale } from '../i18n';

export type Post = CollectionEntry<'blog'>;

/** Locale of a post, taken from its folder: src/content/blog/<locale>/<slug>.md */
export function postLocale(post: Post): Locale {
  const folder = post.id.slice(0, post.id.indexOf('/'));
  return isLocale(folder) ? folder : defaultLocale;
}

export function postSlug(post: Post): string {
  return post.id.slice(post.id.indexOf('/') + 1);
}

export function postPath(post: Post): string {
  return `${localeRoot(postLocale(post))}blog/${postSlug(post)}/`;
}

export async function getPosts(locale?: Locale): Promise<Post[]> {
  const posts = await getCollection('blog', (p) => !locale || postLocale(p) === locale);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Paths of this post in every language it exists in (itself included), keyed by locale. */
export async function postAlternates(post: Post): Promise<Partial<Record<Locale, string>>> {
  const all = await getCollection('blog', (p) => p.data.translationKey === post.data.translationKey);
  return Object.fromEntries(all.map((p) => [postLocale(p), postPath(p)]));
}
