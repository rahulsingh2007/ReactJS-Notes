import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Forces file scanning if standard system notifications fail
    },
    hmr: {
      overlay: true,     // Displays compiling errors on screen immediately
    }
  }
})
