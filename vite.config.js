import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Tailwind plugin must run before others so its CSS import is handled
  plugins: [tailwindcss(), react()],
})
