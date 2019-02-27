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
          <span class="rel_price">{{goodsData.product_uprice}}</span>
          <span>.00</span>
          <span>￥{{goodsData.product_price}}</span>
          <div class="product_right">已售{{goodsData.product_num}}</div>
        </div>
      </section>
      <section class="product_intro">
        <p class="pro_det">商品详情</p>
        <div class="pro_c">
          <img src="../../assets/images/3.jpg" />
          <p>{{goodsData.product_detail}}</p>
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
            <a href="javascript:void(0)" class="buy_now" @click="addToCart()">加入购物车</a>
            <a href="javascript:void(0)" class="buybuy" @click="buyNow()">立即购买</a>
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
      goodsImgs: [
        require('../../assets/images/1.jpg'),
        require('../../assets/images/2.jpg'),
        require('../../assets/images/3.jpg')
      ],
      flag: true,
      goodsData: [
        {
          category_id: 3,
          product_comment_num: 317,
          product_detail: '小王子花梨木精装原木便携手机蓝牙音箱商品详情商品详情商品详情商品详情商品详情商品详情',
          product_hot: 1,
          product_id: 5,
          product_img_url: 'http://s.dodoca.com/whb/mobile/xcx/images/xcx/i-v-sxgs.jpg',
          product_name: '小程序',
          product_num: '100',
          product_price: 358,
          product_search_hot: 0,
          product_special: 1,
          product_uprice: 168,
          shop_id: 3
        }
      ]
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
        // self.goodsImgs = res.data[0]
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
