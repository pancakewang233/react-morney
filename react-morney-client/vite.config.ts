import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  plugins: [react()],
  server: {
    proxy:{
      // 选项写法
      '/api': {
        target: 'http://localhost:8080/user',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
