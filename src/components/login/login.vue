<template>
  <div class="login">
    <topBar :titleName='titleName'/>
    <div class="main">
      <div class="form-box">
          <p class="form-txt"></p>
          <form class="regForm">
            <div class="item-row">
              <span class="label">用户名</span>
              <input class="item-ipt" type="number" name="username" v-model="username" placeholder="请输入手机号">
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
    login () {
      if (this.username === '' || this.password === '') {
        alert('请输入登录信息')
      } else {
        let self = this
        let data = {
          username: self.username,
          password: self.password
        }
        self.$http.post('login', data).then((res) => {
          if (res.status === '200') {
            if (res.data.status === '1') {
              window.sessionStorage.userInfo = res.data.user_name
            }
          } else {
            alert('报告主银，请求失败！')
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
.tips{
  margin-top:.6rem;
  display:block;
  font-size:.6rem;
  color:#999;
  display: inline-block;
  background: #fff;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border-radius: .25rem;
  border: 1px solid #e0e0e0;
  font-size: .6rem;
  line-height: 2rem;
}
.form-box{
  width: 100%;
  padding: 2rem 0;
}
.form-txt {
    color: #fff;
    font-size: .8rem;
    text-align: center;
    line-height: 2rem;
    padding-top: 1rem;
}
.regForm {
    width: 14rem;
    margin: .5rem auto;
}
.label{
  display:inline-block;
  width: 3rem;
  padding: 0 .6rem 0 0;
  color: #666;
  font-size: .6rem;
  line-height: 2rem;
  text-align: left;
}
.item-row {
    width: 100%;
    height: 2rem;
    border-radius: .25rem;
    margin-bottom: .8rem;
}
.item-txt, .item-ipt {
    display: inline-block;
    height:2rem;
    line-height: 2rem;
    background: #fff;
    text-indent: .5rem;
    border: 1px solid #eee;
}
.item-row .item-txt {
    padding: 0 .6rem 0 .5rem;
    color: #666;
    font-size: .6rem;
    line-height: 2rem;
}
.item-row .item-txt {
    font-size: .6rem;
}
.psw-sty .number {
    position: absolute;
    top: 0;
    right: .5rem;
    color: #666;
    font-size: .6rem;
    line-height: 1.8rem;
}
.psw-sty .abled {
    border: 1px solid #3059b0;
    color: #3059b0;
    line-height: inherit;
    padding: .1rem .2rem;
    border-radius: .25rem;
    top: 50%;
    margin-top: -.55rem;
}
.center {
    text-align: center;
    padding-top:.6rem;
}
.subBtn {
    display: inline-block;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-radius: .25rem;
    background: #f60;
    color: #fff;
    font-size: .8rem;
    line-height: 2rem;
}
</style>
