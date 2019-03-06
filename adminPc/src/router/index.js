// import Vue from 'vue'
// import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import loginRouter from '@/router/login.router'
import main from '@/components/main'
import index from '@/components/index'
import datas from '@/components/datas/datas'
import marketing from '@/components/marketing/marketing'
import member from '@/components/member/member'
import user from '@/components/user/user'
import points from '@/components/points/points'
import goods from '@/components/goods/goods'
import order from '@/components/order/order'
import manager from '@/components/manager/manager'
import setting from '@/components/setting/setting'
// Vue.use(Router)

const routers = [
  {
    path: '/',
    // component: index,
    // redirect: '/main/index'
    redirect: '/login'
  },
  {
    name: 'main',
    path: '/main',
    component: main,
    redirect: '/main/index',
    children: [
      {
        path: 'index',
        component: index
      },
      {
        path: 'datas',
        component: datas
      },
      {
        path: 'marketing',
        component: marketing
      },
      {
        path: 'member',
        component: member
      },
      {
        path: 'user',
        component: user
      },
      {
        path: 'points',
        component: points
      },
      {
        path: 'goods',
        component: goods
      },
      {
        path: 'order',
        component: order
      },
      {
        path: 'manager',
        component: manager
      },
      {
        path: 'setting',
        component: setting
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
]
routers.unshift(loginRouter)
export default routers
