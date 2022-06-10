import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 10086, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理，根据项目实际情况配置
    // proxy: {
    //   "/api": {
    //     target: "https://nest-api.buqiyuan.site/api/admin/",
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace("/api/", "/"),
    //   },
    // },
  },
});
