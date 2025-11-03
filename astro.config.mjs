// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fnandoth.github.io',
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@styles': '/src/styles',
        '@layouts': '/src/layouts'
      }
    }
  }
});
