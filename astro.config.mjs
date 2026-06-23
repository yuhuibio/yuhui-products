import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yuhui-products.pages.dev/', // 必须加上这一行
  base: '/',                                // 必须加上这一行
  integrations: [tailwind()]
});