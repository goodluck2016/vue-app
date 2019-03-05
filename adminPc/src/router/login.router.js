const login = resolve => require(['../components/login/login.vue'], resolve)

const loginRouter = {
  name: 'login',
  path: '/login',
  component: login
}

export default loginRouter
