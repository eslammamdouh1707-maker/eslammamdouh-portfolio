import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 👇 مهم جداً: اكتب اسم الريبو اللي على GitHub
  base: '/eslam-portfolio/',
})
