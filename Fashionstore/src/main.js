import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router) // 👈 nếu thiếu là không render gì
  .mount("#app");
