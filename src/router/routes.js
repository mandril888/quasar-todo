const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "home", component: () => import("pages/ToDo.vue") },
      {
        path: "/add",
        name: "add",
        component: () => import("pages/AddTasks.vue"),
      },
      {
        path: "/help",
        name: "help",
        component: () => import("pages/HelpMe.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
