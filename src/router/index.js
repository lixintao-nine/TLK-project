import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  // 页面主路由导航
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mingzhetang/fengshui',
    name: 'MingzheTangFengshui',
    component: () => import(/* webpackChunkName: "about" */ '../views/sights/MingzheTang.vue')
  }
  ,
  {
    path: '/mingzhetang/jiegou',
    name: 'MingzheTangJiegou',
    component: () => import(/* webpackChunkName: "about" */ '../views/sights/MingzheTang2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
