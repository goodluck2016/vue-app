<template>
  <div class="goods_detail">
    <topBar :titleName='titleName'/>
    <main class="detail_box">
      <section class="banner_box">
        <banner :imgDatas ='goodsImgs' v-if="flag"/>
      </section>
      <section class="product_info clearfix">
        <div class="product_left">
          <p class="p_name">小程序</p>
          <div class="product_pric">
            <span>￥</span>
            <span class="rel_price">666</span>
            <span>.00</span>
          </div>
          <div class="product_right">降价通知</div>
        </div>
      </section>
      <section class="product_intro">
        <p class="pro_det">商品详情</p>
      </section>
      <footer class="cart_d_footer">
        <div class="m">
          <div class="btn_box clearfix" >
            <a href="javascript:void(0)" class="buy_now" @click="addToCart">加入购物车</a>
            <a href="javascript:void(0)" class="buybuy" @click="buyNow">立即购买</a>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>
<script>
import topBar from '../public/topBar'
import banner from '../detail/detailBanner.vue'
export default {
  name: 'detail',
  data () {
    return {
      titleName: '商品详情',
      num: 0,
      goodsImgs: [require('../../assets/images/1.jpg'), require('../../assets/images/2.jpg'), require('../../assets/images/3.jpg')],
      flag: true,
      goodsObj: {}
    }
  },
  mounted () {
    this.$store.dispatch('hideNav')
  },
  destroyed () {
    this.$store.dispatch('showNav')
  },
  methods: {
    addToCart () {
    },
    buyNow () {
    }
  },
  components: {
    topBar,
    banner
  }
}
</script>
<style scoped>
@import '../../assets/css/detail.css'
</style>
