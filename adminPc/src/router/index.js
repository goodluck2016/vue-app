// import Vue from 'vue'
// import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import loginRouter from '@/router/login.router'
import registerRouter from '@/router/register.router'
import forgetRouter from '@/router/forget.router'
import main from '@/components/main'
import index from '@/components/index'
import datasLayout from '@/components/datas/layout'
import datasList from '@/components/datas/datasList'
import datasAdd from '@/components/datas/datasAdd'
import member from '@/components/member/member'
import cartLayout from '@/components/cart/layout'
import cart from '@/components/cart/cart'
import goodsLayout from '@/components/goods/layout'
import goodsAdd from '@/components/goods/goodsAdd'
import goodsList from '@/components/goods/goods'
import detail from '@/components/detail/detail'
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
        component: goodsLayout,
        redirect: '/main/goods/goodsList',
        children: [
          {
            path: 'goodsAdd',
            component: goodsAdd
          },
          {
            path: 'goodsList',
            component: goodsList
          }
        ]
      },
      {
        path: 'cart',
        component: cartLayout,
        redirect: '/main/cart/cart',
        children: [
          {
            path: 'cart',
            component: cart
          }
        ]
      },
      {
        path: 'detail/:id',
        component: detail
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
routers.unshift(registerRouter)
routers.unshift(forgetRouter)
export default routers
