import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Για GitHub Pages, άλλαξε το base στο repo name σου
  // π.χ. base: '/dimitrisantoniou99.github.io/'
  base: '/',
})
