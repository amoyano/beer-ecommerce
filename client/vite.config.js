import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: `${process.env.VITE_API_URL || 'http://localhost:5010'}`,
        changeOrigin: true,
      },
      "/product-images": {
        target: `${process.env.VITE_API_URL || 'http://localhost:5010'}`,
        changeOrigin: true,
      },
    },
  },
})
