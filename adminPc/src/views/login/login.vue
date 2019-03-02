<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <router-link class="loginBtn" to="/home">登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'login'
    }
  },
  method: {
  }
}
</script>
<style scoped>
.login{
  width:600px;
  height:400px;
  margin: 20px auto;
  padding:20px;
}
.loginBtn{
  display:block;
  margin:20px auto;
  width:120px;
  height:30px;
  line-height: 30px;
  background: #f60;
  color:#fff;
  font-size:16px;
  border-radius: 3px;
  text-align: center;
}
</style>
