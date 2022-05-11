import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import marked from 'marked';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
    },
  },
})
