import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/', // Since this is a .github.io repo, deploy to root
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
});
