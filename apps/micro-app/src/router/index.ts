import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/', // 匹配根路径（包括空字符串 ""）
    redirect: '/list' // 方案1：重定向到首页（推荐）
  },
  { path: '/list', component: () => import('../views/Home/index.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
