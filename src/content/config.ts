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

// 2. 新增的博客集合定义 (这是让 getCollection('blog') 生效的关键)
const blogCollection = defineCollection({
  type: 'content', // 博客用 content 类型
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
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