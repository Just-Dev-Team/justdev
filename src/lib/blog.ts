import { getCollection, type CollectionEntry } from 'astro:content';
import { localeRoot, type Locale } from '../i18n';

export type Post = CollectionEntry<'blog'>;

export function postLocale(post: Post): Locale {
  return post.id.startsWith('en/') ? 'en' : 'pl';
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

export async function getTranslation(post: Post): Promise<Post | undefined> {
  const all = await getCollection('blog');
  return all.find((p) => p.data.translationKey === post.data.translationKey && p.id !== post.id);
}
