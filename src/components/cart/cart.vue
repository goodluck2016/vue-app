<template>
  <div class="cart">
    <topBar :titleName='titleName'/>
    <cartMain />
    <cartFooter />
  </div>
</template>
<script>
import topBar from '../public/topBar'
import cartMain from '../cart/cartMain'
import cartFooter from '../cart/cartFooter'
export default {
  name: 'cart',
  data () {
    return {
      titleName: '购物车'
    }
  },
  mounted () {
    this.$store.dispatch('hideNav')
  },
  destroyed () {
    this.$store.dispatch('showNav')
  },
  methods: {
  },
  components: {
    topBar,
    cartMain,
    cartFooter
  }
}
</script>
<style>
@import '../../assets/css/cart.css'
</style>
