import { configDefaults, defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        './src/router/**',
        './src/main.ts',
        './src/App.vue',
        './postcss.config.js',
        './eslint.config.js',
        './vite.config.ts',
        './vitest.config.ts',
        './tailwind.config.js',
      ],
    },
  },
  plugins: [vue()],
});
