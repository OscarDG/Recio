// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';
import { dev } from 'astro';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({ runtime: "nodejs"}),
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@prisma/client", "@prisma/adapter-pg"],
    },
    ssr: {
      external: ["@prisma/client", "@prisma/adapter-pg"],
    },
  },
  integrations: [react()]
});