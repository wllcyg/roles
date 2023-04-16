
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue')
  }
]

const route = createRouter({
  history: createWebHashHistory(),
  routes
})

export default route
