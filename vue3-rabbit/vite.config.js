import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// 1. 引入实现按需导入的插件
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),

    // 2. 配置 unplugin-auto-import 插件
    AutoImport({
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox
      resolvers: [ElementPlusResolver()],
    }),

    // 3. 配置 unplugin-vue-components 插件
    Components({
      // 自动导入 Element Plus 组件
      resolvers: [
        // 配置 Element Plus 组件库的解析器，并指定样式导入方式为 sass
        ElementPlusResolver({ importStyle: "sass" }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 4. 自动导入定制化样式文件，进行样式覆盖
        // additionalData 的值会被注入到每一个 scss 文件的开头
        additionalData: `
          @use "@/styles/element/index.scss" as *;
        `,
      },
    },
  },
});
