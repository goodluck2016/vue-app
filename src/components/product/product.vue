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
      imgDatas: [require('../../assets/images/1.jpg'), require('../../assets/images/2.jpg')]
    }
  },
  components: {
    topBar,
    banner
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
