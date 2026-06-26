import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yuhuibiotec.com',
  base: '/',
  integrations: [tailwind(), sitemap()],
  // 在这里添加重定向规则
  redirects: {
    '/grounding-api-redirect/[...path]': '/blog',
  }
});