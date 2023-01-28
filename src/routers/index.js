// import modules from libraries
import { createRouter, createWebHistory } from "vue-router";

// import components
import TheMain from "@/views/main/TheMain.vue";
import Login from "@/views/login/TheLogin.vue";
import PostView from "@/views/post/PostView.vue";
import PostList from "@/views/post/PostList.vue";
import Profile from "@/views/profile/profileView.vue";

// Define routers
const routes = [
  {
    path: "/",
    component: TheMain,
    children: [
      {
        path: "",
        name: "PostList",
        component: PostList,
      },
      { path: "users", name: "Profile", component: Profile },
      { path: "posts", name: "PostView", component: PostView },
    ],
  },
  { path: "/login", name: "Login", component: Login },
];

// Create a router instance
const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes,
});

export default router;
