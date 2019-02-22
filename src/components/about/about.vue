<template>
  <div class="about">
    <topBar :titleName='titleName'/>
    <div class="main"></div>
  </div>
</template>
<script>
import topBar from '../public/topBar'
export default {
  name: 'about',
  data () {
    return {
      titleName: '我们'
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
