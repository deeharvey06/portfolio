import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: if your GitHub repo name is NOT "portfolio",
// change base below to '/your-repo-name/'
// (find/replace in this file, or see README.md)
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
