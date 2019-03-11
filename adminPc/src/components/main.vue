<template>
  <div>
    <div class="header-w">
      <div class="header">
        <div class="logo"></div>
        <div class="menu-wrap">
          <ul>
            <router-link to="/main/index" tag="li" active-class="menu-actived" exact>首页</router-link>
            <router-link to="/main/datas" tag="li">数据</router-link>
            <router-link to="/main/goods" tag="li">产品</router-link>
            <router-link to="/main/member" tag="li">会员</router-link>
            <router-link to="/main/order" tag="li">订单</router-link>
            <router-link to="/main/manager" tag="li">管理员</router-link>
            <router-link to="/main/setting" tag="li">设置</router-link>
          </ul>
        </div>
        <div class="header-info">
          <a class="login-out" @click="loginOut()" href="javascript:void(0)">退出</a>
          <!-- <router-link to="/login" class="login-out" @click="loginOut()">退出</router-link> -->
        </div>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <p>Copyright © 2006 dd Inc. All Rights Reserved. 沪ICP备 06006666-1号</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    loginOut () {
      this.$http.get('/account/LoginOut').then((res) => {
        // console.log('注销', res)
        if (res.data.Success === true) {
          console.log(res.data.Message)
          this.$router.push('/login')
        } else {
          console.log(res.data.Message)
        }
      }, (error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
.menu-actived{
  background: #f60;
  color:#fff;
  border-radius: 3px;
}
</style>
