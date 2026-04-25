import { createRouter, createWebHistory } from "vue-router";

// import các page
import Home from "../components/HelloWorld.vue";
import Store from "../components/shop.vue";
import Login from "../components/login.vue";
import Cart from "../components/cart.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/store", name: "store", component: Store },
  { path: "/login", name: "login", component: Login },
  { path: "/cart", name: "cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
