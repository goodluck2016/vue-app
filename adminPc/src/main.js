// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routers from './router/index'

Vue.config.productionTip = false
Vue.use(VueRouter)

const RouterConfig = {
  mode: 'hash',
  // mode: 'history',
  routes: Routers,
  linkActiveClass: 'menu-actived'
}

const router = new VueRouter(RouterConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
