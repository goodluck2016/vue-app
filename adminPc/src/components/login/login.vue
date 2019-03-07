<template>
  <div class="login">
    <div class="login-header">
      <div class="logo"></div>
    </div>
    <div class="login-main">
      <div class="login-l"></div>
      <div class="login-r">
        <div class="login-txt">登录</div>
        <form class="login-form">
          <div class="form-item">
            <label>用户名</label>
            <input type="text" v-model="form.username" placeholder="请输入用户名">
          </div>
          <div class="form-item">
            <label>密码</label>
            <input type="text" v-model="form.password" placeholder="请输入密码">
          </div>
          <!-- <router-link to="/main/index" class="loginBtn" @click="goLogin()">登 录</router-link> -->
          <a class="loginBtn" @click="goLogin()">登 录</a>
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
  name: 'login',
  data () {
    return {
      username: 'super',
      password: '123456'
    }
  },
  methods: {
    goLogin () {
      if (this.username === '' || this.password === '') {
        alert('请输入登录信息!')
      } else {
        let self = this
        let data = {
          loginname: this.username,
          password: this.password
        }
        self.$http.post('/account/loginin', data).then((res) => {
          console.log(res.data)
          console.log('登录成功')
          this.$router.push('/main/index')
        }, (error) => {
          console.log(error)
        })
        // this.$router.push('/main/index')
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
  padding-top:50px;
  float:right;
  width:320px;
  height:350px;
  background: #fff;
}
.login-txt{
  line-height: 30px;
  font-size: 16px;
  text-align: center;
  letter-spacing: 10px;
}
.login-form{
  padding: 50px 30px 20px;
}
.form-item{
  height:30px;
  line-height: 30px;
  margin-bottom: 20px;
}
.form-item label{
  float:left;
  width:50px;
  padding-right:10px;
}
.form-item input{
  height:30px;
  line-height:30px;
  border:1px solid #e0e0e0;
  font-size:14px;
  padding-left:5px;
  box-sizing: border-box;
}
.loginBtn{
  display:block;
  margin:20px 0 0 60px;
  width:180px;
  height:30px;
  line-height: 30px;
  background: #f60;
  color:#fff;
  font-size:16px;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
</style>
