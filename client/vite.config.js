import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/server": {
        target: "http://localhost:7171",
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
