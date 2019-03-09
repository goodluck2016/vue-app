// import Vue from 'vue'
// import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import loginRouter from '@/router/login.router'
import main from '@/components/main'
import index from '@/components/index'
import datasLayout from '@/components/datas/layout'
import datasList from '@/components/datas/datasList'
import datasAdd from '@/components/datas/datasAdd'
import member from '@/components/member/member'
import goods from '@/components/goods/goods'
import order from '@/components/order/order'
import managerLayout from '@/components/manager/layout'
import managerList from '@/components/manager/managerList'
import managerAdd from '@/components/manager/managerAdd'
import managerArea from '@/components/manager/managerArea'
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
        component: datasLayout,
        redirect: '/main/datas/datasList',
        children: [
          {
            path: 'datasList',
            component: datasList
          },
          {
            path: 'datasAdd',
            component: datasAdd
          }
        ]
      },
      {
        path: 'member',
        component: member
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
        component: managerLayout,
        redirect: '/main/manager/managerList',
        children: [
          {
            path: 'managerList',
            component: managerList
          },
          {
            path: 'managerAdd',
            component: managerAdd
          },
          {
            path: 'managerArea',
            component: managerArea
          }
        ]
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
