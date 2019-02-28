<template>
  <div class="">
    <div class="mine_layout">
      <section class="mine_infos clearfix">
        <div class="mmm_info">
          <div class="user_icon"><img :src="user_icon" alt=""></div>
          <div class="user_detal">
            <p class="user_name">{{info}}</p>
            <div class="reg">
              <a href="#" class="reg_link">注册会员</a>
              <div class="vip">
                <span class="vip_icon"><img :src="vip_icon" alt=""></span>
                <a href="#">立享特权 ></a>
              </div>
            </div>
          </div>
          <div class="manage_account">
            <span>账户管理 ></span>
          </div>
        </div>
        <div class="yguanzhu_box">
          <ul class="gunzhuf">
            <li class="item">
              <a href="" class="item_link">
                <span>0</span>
                <span>关注的商品</span>
              </a>
            </li>
            <li class="item">
              <a href="" class="item_link">
                <span>0</span>
                <span>关注的店铺</span>
              </a>
            </li>
            <li class="item">
              <a href="" class="item_link">
                <span>8</span>
                <span>浏览记录</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
<!--       <section class="my_order_box">
        <div class="order_top_box">
          <div class="order_left">
            <img :src="my_order_icon" alt="">
            <span>我的订单</span>
          </div>
          <div class="order_right">
            <span>全部订单></span>
          </div>
        </div>
        <div class="order_bottom_box">
          <ul>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <img :src="waitpay" alt="" class="order_item_pic">
                <span class="order_item_pay">待付款</span>
              </a>
            </li>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <img :src="wuliu" alt="" class="order_item_pic">
                <span class="order_item_pay">待收货</span>
              </a>
            </li>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <img :src="tuihuan" alt="" class="order_item_pic">
                <span class="order_item_pay">退换/售后</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="my_order_box">
        <div class="order_top_box">
          <div class="order_left">
            <img :src="mypackage" alt="">
            <span>我的钱包</span>
          </div>
          <div class="order_right">
            <span>></span>
          </div>
        </div>
        <div class="order_bottom_box">
          <ul>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <span style="margin-top: -5px;display: block">0</span>
                <span class="order_item_pay">账户余额</span>
              </a>
            </li>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <span style="margin-top: -6px;display: block">0</span>
                <span class="order_item_pay">优惠券</span>
              </a>
            </li>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <span style="margin-top: -6px;display: block">0</span>
                <span class="order_item_pay">积分</span>
              </a>
            </li>
            <li class="order_item">
              <a href="#" class="order_item_link">
                <span style="margin-top: -6px;display: block">0</span>
                <span class="order_item_pay">E卡</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="my_order_box my_b_info">
        <div class="order_top_box">
          <div class="order_left">
              <img :src="baitiao1" alt="">
              <span>白条</span>
          </div>
          <div class="order_right">
              <span>白条还款、激活获礼包></span>
          </div>
          <div class="order_top_box">
              <div class="order_left">
                  <img :src="baitiao2" alt="">
                  <span>客户服务</span>
              </div>
              <div class="order_right">
                  <span>返修/退换货、在线客服></span>
              </div>
          </div>
          <div class="order_top_box">
              <div class="order_left">
                  <img :src="bai3" alt="">
                  <span>会员plus</span>
              </div>
              <div class="order_right">
                  <span>PLUS绝密攻略></span>
              </div>
          </div>
          <div class="order_top_box">
              <div class="order_left">
                  <img :src="bai4" alt="">
                  <span>会员</span>
              </div>
              <div class="order_right">
                  <span>会员俱乐部></span>
              </div>
          </div>
        </div>
      </section> -->
      <!-- <section class="my_order_box my_b_info">
          <div class="order_top_box">
              <div class="order_left">
                  <img :src="huo1" alt="">
                  <span>火车票</span>
              </div>
              <div class="order_right">
                  <span>轻松抢票></span>
              </div>
          </div>
          <div class="order_top_box">
              <div class="order_left">
                  <img :src="huo2" alt="">
                  <span>1元抢宝</span>
              </div>
              <div class="order_right">
                  <span>1元成就梦想></span>
              </div>
          </div>
          <div class="order_top_box">
              <div class="order_left">
                  <img :src="huo3" alt="">
                  <span>我的预约</span>
              </div>
              <div class="order_right">
                  <span>></span>
              </div>
          </div>
          <div class="order_top_box">
              <div class="order_left">
                  <img :src="huo4" alt="">
                  <span>我的必购码</span>
              </div>
              <div class="order_right">
                  <span>></span>
              </div>
          </div>
          <div class="order_top_box">
              <div class="order_left">
                  <img :src="huo5" alt="">
                  <span>应用推荐</span>
              </div>
              <div class="order_right">
                  <span>></span>
              </div>
          </div>
      </section> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: 'info',
      user_icon: require('../../assets/images/1.jpg'),
      vip_icon: require('../../assets/images/1.jpg'),
      my_order_icon: require('../../assets/images/1.jpg'),
      waitpay: require('../../assets/images/1.jpg'),
      wuliu: require('../../assets/images/1.jpg'),
      tuihuan: require('../../assets/images/1.jpg'),
      mypackage: require('../../assets/images/1.jpg'),
      baitiao1: require('../../assets/images/1.jpg'),
      baitiao2: require('../../assets/images/1.jpg'),
      bai3: require('../../assets/images/1.jpg'),
      bai4: require('../../assets/images/1.jpg'),
      huo1: require('../../assets/images/1.jpg'),
      huo2: require('../../assets/images/1.jpg'),
      huo3: require('../../assets/images/1.jpg'),
      huo4: require('../../assets/images/1.jpg'),
      huo5: require('../../assets/images/1.jpg')
    }
  },
  mounted () {
    // this.$store.dispatch('hideNav')
    this.getInfo()
  },
  destroyed () {
    // this.$store.dispatch('showNav')
  },
  methods: {
    getInfo () {
      if (window.sessionStorage.userInfo) {
        this.info = window.sessionStorage.userInfo
      } else {
        this.$router.push('/login')
      }
    }
  },
  components: {
  }
}
</script>
<style scoped>
</style>
