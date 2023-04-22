
import { createRouter, createWebHashHistory,RouteRecordRaw  } from 'vue-router'
import Layout from '@/layout/index.vue'
const routes = [
  {
    path: '/',
    component:Layout,
    redirect: '/dashbord',
    children:[
      {
        path:'dashbord',
        name:'dashbord',
        component:() => import('@/page/datashboard/index.vue'),
        meta:{title:'首页'}
      }
    ]
  },
  {
    path: '/canvas',
    component:Layout,
    redirect: '/canvas/base',
    children:[
      {
        path:'/canvas/base',
        name:'base',
        component:() => import('@/page/canvas/index.vue'),
        meta:{title:'基础页面'}
      }
    ]
  }
]

const route = createRouter({
  history: createWebHashHistory(),
  routes:[...routes] as RouteRecordRaw[]
})

export default route
