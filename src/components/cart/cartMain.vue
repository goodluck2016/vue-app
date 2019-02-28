<template>
  <div class="cartMain">
    <div class="cart_empty clearfix" v-if="cartDatas.length === 0">
      <div class="cart_cry"></div>
      <p>主银，购物车快饿瘪了</p>
      <router-link to="/home" tag="div" class="go_buy">去逛逛</router-link>
    </div>
    <div v-if="cartDatas.length > 0">
      <div class="cart_content clearfix" v-for="item in cartDatas" :key="item.product_id" >
        <!-- <div class="cart_shop clearfix">
          <div class="shop_info clearfix">
            <input type ="checkbox" class="check_box" v-model="item.check" @change="curCheckChange()"/>
            <img :src="item.product_img_url" alt="" class="shop_icon">
            <span class="shop_name">{{item.shop_name}}</span>
          </div>
          <div class="cart_free clearfix"><span class="free_tip">领券</span></div>
        </div> -->
        <div class="cart_item">
          <div class="cart_detial_box clearfix">
            <a href="#" class="cart_product_link">
              <img v-lazy="item.product_img_url" alt="">
            </a>
            <div class="item_names">
              <a href="#">
                <span>{{item.product_name}}</span>
              </a>
            </div>
            <div class="cart_weight">
              <i class="my_weigth">等级:{{item.product_weight}}</i>
              <span class="my_color">版本:{{item.product_color}}</span>
            </div>
            <div class="cart_product_sell">
              <span class="product_money">￥<strong class="real_money">{{item.product_uprice}}</strong>.00</span>
              <div class="cart_add clearfix">
                <span class="my_add" @click="incrementData(item.product_id)">+</span>
                <input type="tel" class="my_count" v-model="item.num">
                <span class="my_jian" @click="decrementData(item.product_id)">-</span>
              </div>
            </div>
            <div class="cart_del clearfix" @click="delCart(item.product_id)"></div>
          </div>
          <input type ="checkbox" v-model="item.check" @change="curCheckChange()"/>
      </div>
      </div>
      <div class="pop" v-show="popStatus">
        <div class="pop_box">
          <div class="del_info">主银，确定要删除该商品吗？</div>
          <div class="del_cancel" @click="delCancel()">取消</div>
          <div class="del_ok" @click="delOk()">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      shop_icon: require('../../assets/images/1.jpg'),
      // cartDatas: [
      //   {
      //     check: false,
      //     shop_name: '小程序行业版A',
      //     product_img_url: require('../../assets/images/1.jpg'),
      //     product_name: '小程序基础版升级重磅来袭小程序基础版升级重磅来袭',
      //     product_weight: 'levelA',
      //     product_color: '基础',
      //     product_uprice: '188',
      //     product_id: '11',
      //     num: '5'
      //   },
      //   {
      //     check: false,
      //     shop_name: '小程序行业版B',
      //     product_img_url: require('../../assets/images/2.jpg'),
      //     product_name: '小程序基础版升级重磅来袭小程序基础版升级重磅来袭',
      //     product_weight: 'levelA',
      //     product_color: '豪华',
      //     product_uprice: '15888',
      //     product_id: '12',
      //     num: '1'
      //   },
      //   {
      //     check: false,
      //     shop_name: '小程序行业版C',
      //     product_img_url: require('../../assets/images/3.jpg'),
      //     product_name: '小程序基础版升级重磅来袭小程序基础版升级重磅来袭',
      //     product_weight: 'levelA',
      //     product_color: '基础+标准',
      //     product_uprice: '1188',
      //     product_id: '10',
      //     num: '3'
      //   },
      //   {
      //     check: false,
      //     shop_name: '小程序行业版D',
      //     product_img_url: require('../../assets/images/4.jpg'),
      //     product_name: '小程序基础版升级重磅来袭小程序基础版升级重磅来袭',
      //     product_weight: 'levelA',
      //     product_color: '标准',
      //     product_uprice: '1088',
      //     product_id: '9',
      //     num: '0'
      //   },
      //   {
      //     check: false,
      //     shop_name: '小程序行业版V',
      //     product_img_url: require('../../assets/images/5.jpg'),
      //     product_name: '小程序基础版升级重磅来袭小程序基础版升级重磅来袭',
      //     product_weight: 'levelA',
      //     product_color: '基础升级',
      //     product_uprice: '588',
      //     product_id: '8',
      //     num: '9'
      //   }
      // ],
      popStatus: false,
      curId: ''
    }
  },
  mounted () {
    this.$store.dispatch('hideNav')
  },
  destroyed () {
    this.$store.dispatch('showNav')
  },
  computed: mapGetters(['cartDatas', 'checkAllState']),
  methods: {
    ...mapActions(['incrementData', 'decrementData']),
    delCart (id) {
      this.popStatus = true
      this.curId = id
    },
    delCancel () {
      this.popStatus = false
    },
    delOk () {
      this.popStatus = false
      this.$store.dispatch('delCartData', this.curId)
    },
    curCheckChange () {
      this.$store.dispatch('curCheckChange')
    }
  },
  components: {
  }
}
</script>
<style scoped>
</style>
