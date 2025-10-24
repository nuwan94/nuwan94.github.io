// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nuwan.dev',

  // Update this to match your GitHub Pages URL if different
  // For GitHub Pages: https://username.github.io/repository-name/
  integrations: [mdx(), sitemap()],

  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },
});