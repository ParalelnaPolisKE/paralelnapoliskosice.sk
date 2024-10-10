import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      cover: z.string(),
      tags: z.array(z.string()),
      author: z.string(),
      // pubDate: z.date(),
    }),
  }),
  news: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
    }),
  }),
  'join-us': defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
    }),
  }),
};
