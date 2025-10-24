import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/eslam-portfolio/', // لازم يكون نفس اسم الريبو بالظبط
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
  },
})



