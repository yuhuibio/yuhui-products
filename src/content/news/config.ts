import { defineCollection, z } from "astro:content";

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    img: z.string(),
    desc: z.string(),
  }),
});

export const collections = {
  news,
};