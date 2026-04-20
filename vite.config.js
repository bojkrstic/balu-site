import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        slanaSobaPirot: resolve(__dirname, 'slana-soba-pirot/index.html'),
        hidroterapijaZaBebePirot: resolve(__dirname, 'hidroterapija-za-bebe-pirot/index.html'),
        masazaBebaPirot: resolve(__dirname, 'masaza-beba-pirot/index.html'),
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
