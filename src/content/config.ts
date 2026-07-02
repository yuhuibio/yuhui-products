import { defineCollection, z } from 'astro:content';

// 1. 产品集合
const productsCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    name: z.string(),
    latin: z.string(),
    category: z.string(),
    method: z.string(),
    img: z.string().optional(),
  })),
});

// 2. 博客集合
const blogCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    img: z.string().optional(),
    category: z.enum([
      'Essential Oils 101', 
      'Health & Wellness', 
      'Beauty & Skincare', 
      'Essential Oils Business', 
      'DIY Projects & Recipes'
    ]),
  }),
});

// 3. 新闻集合 (合并进来了)
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    img: z.string(), // 确保 Markdown 里必须有 img 字段
    desc: z.string(),
  }),
});

// 4. 统一导出
export const collections = {
  'products': productsCollection,
  'blog': blogCollection,
  'news': newsCollection,
};