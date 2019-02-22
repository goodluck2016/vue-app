<template>
  <div class="product">
    <topBar :titleName='titleName'/>
    <div class="main">
      <banner :imgDatas='imgDatas' />
    </div>
  </div>
</template>
<script>
import topBar from '../public/topBar'
import banner from '../public/banner'
export default {
  titleName: 'product',
  data () {
    return {
      titleName: '产品',
      imgDatas: [require('../../assets/images/banner1.png'), require('../../assets/images/banner2.png')]
    }
  },
  components: {
    topBar,
    banner
  },
  methods: {
    goHome (event) {
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
</style>
