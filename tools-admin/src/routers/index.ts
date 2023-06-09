
import { createRouter, createWebHashHistory,RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
const routes = [
  {
    path: '/',
    component:Layout,
    redirect: '/dashbord',
    issubWrap:false,
    meta:{title:'首页',icon:'Histogram',id:1},
    children:[
      {
        path:'/dashbord',
        name:'dashbord',
        component:() => import('@/page/datashboard/index.vue')
      }
    ]
  },
  {
    path: '/canvas',
    component:Layout,
    redirect: '/canvas/base',
    issubWrap:true,
    meta:{title:'基础内容',icon:'Sunrise',id:2},
    children:[
      {
        path:'/canvas/base',
        name:'base',
        component:() => import('@/page/canvas/index.vue'),
        meta:{title:'canvas基础',id:20}
      },
      {
        path:'/canvas/Scratchcard',
        name:'Scratchcard',
        component:() => import('@/page/canvas/Scratchcard.vue'),
        meta:{title:'刮刮卡',id:22}
      },
      {
        path:'/canvas/fir',
        name:'fir',
        component:() => import('@/page/fir/index.vue'),
        meta:{title:'fir基础',id:21}
      },
      {
        path:'/canvas/canvashome',
        name:'canvashome',
        component:() => import('@/page/canvas/canvashome.vue'),
        meta:{title:'fcanvashome基础',id:23}
      }
    ]
  }
]

const route = createRouter({
  history: createWebHashHistory(),
  routes:[...routes] as RouteRecordRaw[]
})

export default route
