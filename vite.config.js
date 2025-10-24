import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ إعداد Vite للنشر على GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/eslam-portfolio/', // <-- نفس اسم الريبو بالظبط
  build: {
    outDir: 'dist',
  },
})







