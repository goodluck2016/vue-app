<template>
  <div class="login">
    <topBar :titleName='titleName'/>
    <div class="main">
      <div class="form-box">
          <p class="form-txt"></p>
          <form class="regForm">
            <div class="item-row">
              <span class="label">用户名</span>
              <input class="item-ipt" type="number" name="username" v-model="username" placeholder="请输入用户名">
            </div>
            <div class="item-row">
              <span class="label">密&nbsp;&nbsp;&nbsp;码</span>
              <input class="item-ipt item-psw" id="passwd" type="password" name="password" v-model="password" placeholder="长度6-20位">
            </div>
            <div class="center">
              <input type="button" @click="register();" class="subBtn" value="立即注册">
            </div>
            <router-link to="/login" class="tips">已有帐号，去登录</router-link>
          </form>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from '../public/topBar'
export default {
  name: 'register',
  data () {
    return {
      titleName: '注册',
      username: '',
      password: ''
    }
  },
  mounted () {
    this.$store.dispatch('hideNav')
  },
  destroyed () {
    this.$store.dispatch('showNav')
  },
  methods: {
    register () {
      if (this.username === '' || this.password === '') {
        alert('请输入信息')
      } else {
        let self = this
        let data = {
          username: self.username,
          password: self.password
        }
        self.$http.post('/reg', data).then((res) => {
          // console.log('status', res.status)
          // console.log('data.status', res.data.status)
          if (res.status === '200') {
            if (res.data.status === '1') {
              console('报告主银，注册成功！')
            }
          } else {
            // alert('请求失败！')
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
