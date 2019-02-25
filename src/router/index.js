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
      path: '/',
      redirect: '/home'
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/agent',
      name: 'agent',
      component: agent
    },
    {
      path: '/cases',
      name: 'cases',
      component: cases
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '*',
      component: home
    }
  ]
})
