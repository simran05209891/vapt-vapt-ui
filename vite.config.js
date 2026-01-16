import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/home": {
        target: "http://20.197.47.46",
        changeOrigin: true,
      },
      "/recon": {
        target: "http://20.197.47.46",
        changeOrigin: true,
      },
      "/scan": {
        target: "http://20.197.47.46",
        changeOrigin: true,
      },
      "/history": {
        target: "http://20.197.47.46",
        changeOrigin: true,
      },
      "/stats": {
        target: "http://20.197.47.46",
        changeOrigin: true,
      }
    }
  }
})


