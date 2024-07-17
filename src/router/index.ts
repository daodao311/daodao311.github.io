import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/Home.vue") // 首页
  },
  {
    path: "/ai",
    name: "AI",
    component: () => import("@/views/ai/AI.vue") // AI
  },
  {
    path: "/tool",
    name: "Tool",
    component: () => import("@/views/tool/Tool.vue") // Tool
  },
  {
    path: "/fun",
    name: "Fun",
    component: () => import("@/views/fun/Fun.vue") // Fun
  }
]

const router = createRouter({
  history: createWebHistory(), // 路由类型
  routes // short for `routes: routes`
})

export default router
