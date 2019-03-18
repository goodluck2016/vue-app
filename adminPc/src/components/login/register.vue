<template>
  <div class="login">
    <div class="login-header">
      <div class="logo"></div>
    </div>
    <div class="login-main">
      <div class="login-l"></div>
      <div class="login-r">
        <div class="login-txt">注 册</div>
        <form class="login-form">
          <div class="form-item">
            <label>用户名</label>
            <input type="text" v-model="username" placeholder="请输入用户名">
          </div>
          <div class="form-item">
            <label>密码</label>
            <input type="password" v-model="password" placeholder="请输入密码">
          </div>
          <div class="form-item">
            <label>昵称</label>
            <input type="text" v-model="nickname" placeholder="请输入昵称">
          </div>
          <a class="loginBtn" @click="goRegister()">注 册</a>
          <router-link class="btnFb" to="/login">已有帐号,去登录</router-link>
        </form>
      </div>
    </div>
    <div class="footer">
      <p>Copyright © 2006 dd Inc. All Rights Reserved. 沪ICP备 06006666-1号</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: '',
      nickname: ''
    }
  },
  methods: {
    goRegister () {
      if (this.username === '' || this.password === '' || this.nickname === '') {
        alert('请输入注册信息!')
      } else {
        let self = this
        let data = {
          LoginName: this.username,
          Password: this.password,
          NickName: this.nickname
        }
        self.$http.post('/Account/RegisterAccount', {registerAccount: data}).then((res) => {
          console.log(res.data.Success)
          if (res.data.Success === true) {
            window.sessionStorage.userInfo = self.username
            self.$router.push('/main/index')
          } else {
            console.log(res.data.Message)
          }
        }, (error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>
<style scoped>
.login-header{
  width:100%;
  height:60px;
  background: #fff;
  border-bottom:1px solid #e0e0e0;
}
.login-main{
  margin:0 auto;
  padding:50px 0;
  width:1100px;
  min-height:560px;
}
.login-l{
  float:left;
  width:750px;
  height:400px;
  background: #fff;
}
.login-r{
  margin-right:0;
  padding-top:40px;
  float:right;
  width:320px;
  height:380px;
  background: #fff;
}
.login-txt{
  line-height: 30px;
  font-size: 16px;
  text-align: center;
  letter-spacing: 10px;
}
.login-form{
  padding: 30px 20px 20px;
}
.form-item{
  height:30px;
  line-height: 30px;
  margin-bottom: 20px;
}
.form-item label{
  float:left;
  width:72px;
  padding-right:6px;
}
.form-item input{
  height:30px;
  line-height:30px;
  border:1px solid #e0e0e0;
  font-size:14px;
  padding-left:5px;
  box-sizing: border-box;
}
.loginBtn,.btnFb{
  display:block;
  margin:10px 0 0 72px;
  width:177px;
  height:30px;
  line-height: 30px;
  box-sizing: border-box;
  font-size:16px;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
.loginBtn{
  background: #f60;
  color:#fff;
}
.btnFb{
  background: #fafafa;
  color:#999;
  border:1px solid #e0e0e0;
}
</style>
