import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    // Vite路径别名配置
    alias: {
      "@": path.resolve("./src")
    }
  },
  build: {
    outDir: "my-sharing"
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/style/base.scss";`, // 此处全局的scss文件
        javascriptEnabled: true
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 3111,
    hmr: {
      overlay: true
    }
  }
})
