import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/index.vue'
// 异步

export const routes = [{ path: '/', component: Home }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
