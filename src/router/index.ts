import { RouteRecordRaw, createWebHashHistory, createRouter } from "vue-router"

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
    path: "/work",
    name: "Work",
    component: () => import("@/views/work/Work.vue") // Work
  },
  {
    path: "/daily",
    name: "Daily",
    component: () => import("@/views/daily/Daily.vue") // Fun
  },
  {
    path: "/fun",
    name: "Fun",
    component: () => import("@/views/fun/Fun.vue") // Fun
  }
]

const router = createRouter({
  // 创建路由模式 history模式--createWebHistory 哈希模式--createWebHashHistory
  history: createWebHashHistory(), // 路由类型
  routes // short for `routes: routes`
})

export default router
