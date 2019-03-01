<template>
  <div class="cart">
    <topBar :titleName='titleName'/>
    <div class="cart_empty clearfix" v-if="cartDatas.length === 0">
      <div class="cart_cry"></div>
      <p>主银，购物车快饿瘪了</p>
      <router-link to="/home" tag="div" class="go_buy">去逛逛</router-link>
    </div>
    <div class="cart_has" v-if="cartDatas.length > 0">
      <div class="cart_content clearfix" v-for="item in cartDatas" :key="item.product_id" >
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
      <footer class="cart_footer">
        <div class="all_check_box">
          <!-- <input type ="checkbox" v-model="checkAllState" @change="checkAllChange()" :disabled="cartDatas.length === 0" /> -->
          <input type ="checkbox" v-model="checkAllState" @change="checkAllChange()" />
          <span>全选</span>
        </div>
        <div class="count_money_box">
          <div class="heji">
            <span>合计:</span>
            <span>￥</span><span>{{total.toFixed(2)}}</span>
          </div>
          <a href="#" class="go_pay">
            <span>去结算(<i>{{totalNum}}</i>)</span>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import topBar from '../public/topBar'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'cart',
  data () {
    return {
      titleName: '购物车',
      shop_icon: require('../../assets/images/1.jpg'),
      popStatus: false,
      curId: ''
    }
  },
  mounted () {
    this.$store.dispatch('hideNav')
    this.getData()
  },
  destroyed () {
    this.$store.dispatch('showNav')
  },
  computed: {
    ...mapGetters(['total', 'checkAllState', 'totalNum', 'cartDatas'])
  },
  methods: {
    ...mapActions(['incrementData', 'decrementData']),
    getData () {
      if (window.sessionStorage.cart.length > 0) {
        this.cartDatas2 = window.sessionStorage.cart
        console.log('cartDatas2', this.cartDatas2)
      }
    },
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
    },
    checkAllChange () {
      this.$store.dispatch('checkAllChange')
    }
  },
  watch: {
  },
  components: {
    topBar
  }
}
</script>
<style>
@import '../../assets/css/cart.css'
</style>
