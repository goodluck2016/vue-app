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
      imgDatas: [require('../../assets/images/1.jpg'), require('../../assets/images/2.jpg'), require('../../assets/images/3.jpg')]
    }
  },
  components: {
    topBar,
    banner
  },
  mounted: function () {
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
