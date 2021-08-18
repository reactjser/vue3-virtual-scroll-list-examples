import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteMarkdownPlugin from 'vite-plugin-vue-md';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteMarkdownPlugin()],
});
