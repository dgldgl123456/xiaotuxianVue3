import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// --- 1. 添加 Element Plus 的导入 ---
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// ------------------------------------

const app = createApp(App);

app.use(createPinia());
app.use(router);

// --- 2. 在挂载前全局使用 Element Plus ---
app.use(ElementPlus);
// ------------------------------------

app.mount("#app");
