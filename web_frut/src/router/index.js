import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog.vue"),
  },
  {
    path: "/blog_second",
    name: "Blog second",
    component: () =>
      import(/* webpackChunkName: "blogSecond" */ "../views/BlogSecond.vue"),
  },
  {
    path: "/blog_faq",
    name: "Blog faq",
    component: () =>
      import(/* webpackChunkName: "blogFaq" */ "../views/BlogFaq.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
