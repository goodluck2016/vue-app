import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/404'
import login from '@/views/login/login'
import main from '@/views/main'
import home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main
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
