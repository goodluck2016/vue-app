<template>
  <div class="agent">
    <topBar :titleName='titleName'/>
    <div class="main"></div>
  </div>
</template>
<script>
import topBar from '../public/topBar'
export default {
  name: 'agent',
  data () {
    return {
      titleName: '代理'
    }
  },
  methods: {
    goHome (event) {
      this.$router.push('/home')
    }
  },
  components: {
    topBar
  }
}
</script>
<style scoped>
</style>
