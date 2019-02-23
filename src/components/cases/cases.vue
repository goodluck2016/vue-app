<template>
  <div class="case">
    <topBar :titleName='titleName'/>
    <div class="main"></div>
  </div>
</template>
<script>
import topBar from '../public/topBar'
export default {
  name: 'cases',
  data () {
    return {
      titleName: '案例'
    }
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
