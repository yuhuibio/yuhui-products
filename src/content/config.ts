import { defineCollection, z } from 'astro:content';

// 1. 你原有的产品集合定义
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

// 2. 新增的博客集合定义
const blogCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    // 在这里补上 img 字段定义：
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
// 3. 将两个集合都导出
export const collections = {
  'products': productsCollection,
  'blog': blogCollection,
};