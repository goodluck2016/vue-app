import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/login/register'
import login from '@/components/login/login'
import home from '@/components/home/home'
import category from '@/components/category/category'
import search from '@/components/search/search'
import product from '@/components/product/product'
import detail from '@/components/detail/detail'
import cart from '@/components/cart/cart'
import agent from '@/components/agent/agent'
import cases from '@/components/cases/cases'
import about from '@/components/about/about'

Vue.use(Router)
export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/register',
      component: register
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/category/:id',
      component: category
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/product',
      component: product
    },
    {
      path: '/detail/:id',
      component: detail
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/agent',
      component: agent
    },
    {
      path: '/cases',
      component: cases
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '*',
      component: home
    }
  ]
})
