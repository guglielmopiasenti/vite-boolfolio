import { createRouter, createWebHistory } from "vue-router";
// importing pages

import HomePage from "../pages/HomePage.vue";
import ContactPage from "../pages/ContactPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";

// create router
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/projects/:id", name: "project", component: ProjectDetailPage },
    { path: "/contact", name: "contact", component: ContactPage },
    { path: "/:not-found", name: "not-found", component: NotFoundPage },
  ],
});

export { router };
