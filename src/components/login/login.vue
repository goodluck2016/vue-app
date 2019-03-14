<template>
  <div class="login">
    <topBar :titleName='titleName'/>
    <div class="main">
      <div class="form-box">
          <p class="form-txt"></p>
          <form class="regForm">
            <div class="item-row">
              <span class="label">用户名</span>
              <input class="item-ipt" type="text" name="username" v-model="username" placeholder="请输入用户名">
            </div>
            <div class="item-row">
              <span class="label">密&nbsp;&nbsp;&nbsp;码</span>
              <input class="item-ipt item-psw" id="passwd" type="password" name="password" v-model="password" placeholder="长度6-20位">
            </div>
            <div class="center">
              <input type="button" @click="login();" class="subBtn" value="登 录">
            </div>
            <router-link to="/register" class="tips">快速注册</router-link>
          </form>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from '../public/topBar'
export default {
  name: 'login',
  data () {
    return {
      titleName: '登录',
      username: 'super',
      password: '123456'
    }
  },
  mounted () {
    this.$store.dispatch('hideNav')
  },
  destroyed () {
    this.$store.dispatch('showNav')
  },
  methods: {
    login () {
      if (this.username === '' || this.password === '') {
        alert('请输入登录信息')
      } else {
        let self = this
        let data = {
          loginname: this.username,
          password: this.password
        }
        self.$http.get('/account/loginin?loginname=' + data.loginname + '&password=' + data.password).then((res) => {
          if (res.data.Success === true) {
            // if (res.data.status === 1) {
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            console.log('localStorage', localStorage.userInfo)
            // window.sessionStorage.userInfo = res.data.user_name
            self.$router.push('/home')
            // }
          } else {
            alert(res.data.Message)
          }
        }, (error) => {
          console.log(error)
        })
      }
    }
  },
  components: {
    topBar
  }
}
</script>
<style scoped>
</style>
