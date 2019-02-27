<template>
  <div class="goods_detail">
    <topBar :titleName='titleName'/>
    <main class="detail_box">
      <section class="banner_box">
        <banner :imgDatas ='goodsImgs' v-if="flag"/>
      </section>
      <section class="product_info clearfix">
        <p class="p_name">小王子花梨木精装原木便携手机蓝牙音箱</p>
        <div class="product_pric">
          <span>￥</span>
          <span class="rel_price">666</span>
          <span>.00</span>
          <span>￥698.00</span>
          <div class="product_right">已售1152</div>
        </div>
      </section>
      <section class="product_intro">
        <p class="pro_det">商品详情</p>
        <div class="pro_c">
          <img src="../../assets/images/3.jpg" />
          <p>商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情</p>
        </div>
      </section>
      <footer class="cartFooter">
        <div class="m">
          <div class="cartFooterL">
            <div class="cartbox"></div>
            <div class="pricebox">
              <p class="priceNow"><b>￥</b>107.8</p>
              <p class="priceDeliver">另需配送费5元</p>
            </div>
          </div>
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
      goodsObj: []
    }
  },
  mounted () {
    this.$store.dispatch('hideNav')
    if (this.$route.params.id) {
      this.getData(this.$route.params.id)
    }
  },
  destroyed () {
    this.$store.dispatch('showNav')
  },
  methods: {
    getData (id) {
      let self = this
      let params = {
        mid: id
      }
      self.$http.get('/detail', params).then((res) => {
        // console.log('res', res)
        self.goodsObj = res.data
        // self.goodsObj = JSON.parse(JSON.stringify(res.data))
        console.log('goodsObj', self.goodsObj)
      })
    },
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
<style>
@import '../../assets/css/detail.css'
</style>
