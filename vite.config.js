import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// User-site repository: publish the optimized homepage from /docs.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { outDir: 'docs' },
})
