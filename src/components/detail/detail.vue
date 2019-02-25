<template>
  <div class="cart">
    <topBar :titleName='titleName'/>
    <div class="main"></div>
  </div>
</template>
<script>
import topBar from '../public/topBar'
export default {
  name: 'detail',
  data () {
    return {
      titleName: '商品详情'
    }
  },
  mounted () {
    // this.$store.dispatch('hideNav')
  },
  destroyed () {
    // this.$store.dispatch('showNav')
  },
  methods: {
  },
  components: {
    topBar
  }
}
</script>
<style scoped>
</style>
