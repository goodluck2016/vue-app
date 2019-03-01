<template>
  <div class="goods_detail">
    <topBar :titleName='titleName'/>
    <main class="detail_box">
      <section class="banner_box">
        <banner :imgDatas ="imgDatas" v-if="flag"/>
        <!-- <img src="../../assets/images/3.jpg" width="100%" /> -->
      </section>
      <section class="product_info clearfix">
        <p class="p_name">{{goodsData.product_name}}</p>
        <div class="product_pric">
          <span>￥</span>
          <span class="rel_price">{{goodsData.product_uprice}}</span>
          <span>.00</span>
          <span>￥{{goodsData.product_price}}</span>
          <div class="product_right">已售{{goodsData.product_num}}</div>
        </div>
      </section>
      <section class="product_intro">
        <p class="pro_det">商品详情</p>
        <div class="pro_c">
          <p>{{goodsData.product_detail}}</p>
        </div>
      </section>
      <div class="cartFooter">
        <div class="m">
          <div class="cartFooterL">
            <div class="cartbox"></div>
            <div class="pricebox">
              <p class="priceNow"><b>￥</b>{{goodsData.product_uprice}}</p>
              <p class="priceDeliver">另需配送费{{goodsData.priceDeliver}}元</p>
            </div>
          </div>
          <div class="btn_box clearfix" >
            <a href="javascript:void(0)" class="buy_now" @click="addToCart()">加入购物车</a>
            <a href="javascript:void(0)" class="buybuy" @click="buyNow()">立即购买</a>
          </div>
        </div>
      </div>
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
      imgDatas: [
        // {image_url: require('../../assets/images/1.jpg')},
        // {image_url: require('../../assets/images/2.jpg')},
        // {image_url: require('../../assets/images/3.jpg')}
      ],
      goodsData: [
        {
          category_id: 3,
          product_comment_num: 317,
          product_detail: '小王子花梨木精装原木便携手机蓝牙音箱商品详情商品详情商品详情商品详情商品详情商品详情',
          product_hot: 1,
          product_id: 5,
          product_img_url: 'http://s.dodoca.com/whb/mobile/xcx/images/xcx/i-v-sxgs.jpg',
          product_name: '小王子花梨木精装原木便携手机蓝牙音箱',
          product_num: '16',
          product_price: 358,
          product_search_hot: 0,
          product_special: 1,
          product_uprice: 168,
          shop_id: 3,
          priceDeliver: 5
        }
      ],
      flag: false
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
        mId: id
      }
      self.$http.get('/detail', {params}).then((res) => {
        self.imgDatas = res.data[0]
        self.flag = true
        self.goodsData = res.data[1][0]
        // self.goodsData = JSON.parse(JSON.stringify(res.data))
        // console.log('goodsData', self.goodsData)
      })
    },
    addToCart () {
      let data = JSON.parse(JSON.stringify(this.goodsData))
      // console.log('data', data)
      data.num = 1
      data.check = false
      this.$store.dispatch('addCart', data)
      this.$router.push('/cart')
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
