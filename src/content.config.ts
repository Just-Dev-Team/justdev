import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Posts live in src/content/blog/<locale>/<slug>.md.
// `translationKey` pairs a post with its translation for hreflang and the language switch.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    translationKey: z.string(),
  }),
});

export const collections = { blog };
