import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://edgi9.github.io/tv-show-app/',
  plugins: [vue()],
});
