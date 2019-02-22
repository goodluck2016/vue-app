<template>
  <div class="home">
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
  name: 'home',
  data () {
    return {
      titleName: '首页',
      imgDatas: [require('../../assets/images/banner1.png'), require('../../assets/images/banner2.png'), require('../../assets/images/banner3.png')]
    }
  },
  components: {
    topBar,
    banner
  },
  mounted: function () {
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
