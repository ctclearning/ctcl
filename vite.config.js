import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change '/ctcl/' to '/YOUR_REPO_NAME/' if different
export default defineConfig({
  plugins: [react()],
  base: '/ctcl/'
})
