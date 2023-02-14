import { createRouter, createWebHistory } from "vue-router";
import HomeUser from "../views/user/HomeUser.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeUser,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../components/FormLogin.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
  ],
});

export default router;
