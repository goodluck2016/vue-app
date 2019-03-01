<template>
  <div>
    <footer class="cart_footer">
      <div class="all_check_box">
        <input type ="checkbox" v-model="checkAllState" @change="checkAllChange()" :disabled="totalNum === 0" />
        <span>全选</span>
      </div>
      <div class="count_money_box">
        <div class="heji">
          <span>合计:</span>
          <span>￥</span><span>{{total.toFixed(2)}}</span>
        </div>
        <!-- <div class="total_money clearfix">
          <span>总额:</span>
          <i>￥</i>
          <span>{{total}}</span>
          <span>立减:</span>
          <i>￥</i>
          <span>0.00</span>
        </div> -->
        <a href="#" class="go_pay">
          <span>去结算(<i>{{totalNum}}</i>)</span>
        </a>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      // checkAllState: false,
      // total: '888.00',
      // totalNum: 0
    }
  },
  mounted () {
  },
  destroyed () {
  },
  computed: {
    ...mapGetters(['total', 'checkAllState', 'totalNum'])
  },
  methods: {
    checkAllChange () {
      this.$store.dispatch('checkAllChange')
    }
  },
  components: {
  }
}
</script>
<style scoped>
</style>
