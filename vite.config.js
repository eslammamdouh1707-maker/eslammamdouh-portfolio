import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ⚠️ غيّر 'eslam-portfolio' لاسم الريبو عندك
  base: '/eslam-portfolio/',
})



