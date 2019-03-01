<template>
  <div class="my">
    <topBar :titleName='titleName'/>
    <myMain/>
  </div>
</template>
<script>
import topBar from '../public/topBar'
import myMain from '../my/myMain'
export default {
  name: 'my',
  data () {
    return {
      titleName: '我的'
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
    topBar,
    myMain
  }
}
</script>
<style>
@import '../../assets/css/my.css'
</style>
