import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import product from '@/components/product/product'
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
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/product',
      name: 'product',
      component: product
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
