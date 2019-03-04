<template>
<!--   <div id="app">
    <router-view/>
  </div> -->
  <div class="wrap">
    <div class="header">
      <div class="logo"></div>
      <div class="menu-wrap">
        <ul>
          <router-link to="/main/data" tag="li">数据统计</router-link>
          <router-link to="/main/marketing" tag="li">营销</router-link>
          <router-link to="/main/merchant" tag="li">商户</router-link>
          <router-link to="/main/member" tag="li">会员</router-link>
          <router-link to="/main/user" tag="li">用户</router-link>
          <router-link to="/main/points" tag="li">积分</router-link>
          <router-link to="/main/goods" tag="li">商品</router-link>
          <router-link to="/main/order" tag="li">订单</router-link>
          <router-link to="/main/marketing" tag="li">交易</router-link>
          <router-link to="/main/manager" tag="li">管理员</router-link>
          <router-link to="/main/setting" tag="li">商城设置</router-link>
          <router-link to="/main/notice" tag="li">公告</router-link>
        </ul>
      </div>
      <div class="header-info">
        <router-link to="/login" class="login-out">退出</router-link>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <p>Copyright © 2006 dd Inc. All Rights Reserved. 沪ICP备 08006176-1号</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
@import './assets/css/common.css'
</style>
