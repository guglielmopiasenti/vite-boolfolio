import { createRouter, createWebHistory } from "vue-router";
// importing pages

import HomePage from "../pages/HomePage.vue";
import ContactsPage from "../pages/ContactsPage.vue";

// create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/contact", name: "contact", component: ContactsPage },
  ],
});
