import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

import App from "@/App.vue";

import Flint from "@/layouts/Flint.vue";

import Dashboard from "@/views/flint/Dashboard.vue";
import Configurations from "@/views/flint/Configurations.vue";
import Outputs from "@/views/flint/Outputs.vue";

import Landing from "@/views/Landing.vue";

const routes = [
  {
    path: "/flint",
    redirect: "/flint/dashboard",
    component: Flint,
    children: [
      {
        path: "/flint/dashboard",
        component: Dashboard,
      },
      {
        path: "/flint/configurations",
        component: Configurations,
      },
      {
        path: "/flint/outputs",
        component: Outputs,
      },
    ],
  },
  {
    path: "/gcbm",
    redirect: "/gcbm/dashboard",
    component: Flint,
    children: [
      {
        path: "/gcbm/dashboard",
        component: Dashboard,
      },
      {
        path: "/gcbm/configurations",
        component: Configurations,
      },
      {
        path: "/gcbm/outputs",
        component: Outputs,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/",
    component: Landing,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
