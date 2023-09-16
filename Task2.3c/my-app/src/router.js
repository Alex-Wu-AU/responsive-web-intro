import { createRouter, createWebHistory } from "vue-router";
import SingleFileConponent from "./components/SingleFileComponent.vue";
import About from "./components/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: SingleFileConponent,
    },
    {
      path: "./about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./components/About.vue"),
    },
  ],
});

export default router;
