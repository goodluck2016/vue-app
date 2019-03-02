import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/404'
import login from '@/views/login/login'
import home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/',
      redirect: home
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
