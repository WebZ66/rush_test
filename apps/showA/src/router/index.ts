import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/', // 匹配根路径（包括空字符串 ""）
    redirect: '/home' // 方案1：重定向到首页（推荐）
  },
  { path: '/home', component: () => import('../views/Home/index.vue') },
  {
    name:'mircroList',
    path: '/micro',
    redirect:'/micro/list'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
