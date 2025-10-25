import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',     // ✳️ خليه كده بالضبط
  build: {
    outDir: 'dist'
  },
  server: {
    host: true
  }
})




