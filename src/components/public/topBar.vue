<template>
  <div class="topBar">
    <a @click="goBack()" class="icon_back"></a>
    <h3 class="cartname" v-title :data-title="titleName">{{titleName}}</h3>
    <router-link class="icon_menu" to="/home"><i class="iconfont">&#xe60d;</i></router-link>
    <!-- <a href="#" class="icon_menu" @click="goHome($event)"><i class="iconfont">&#xe60d;</i></a> -->
  </div>
</template>
<script>
import title from '../../directive/titleName.js'
export default {
  data () {
    return {
    }
  },
  props: ['titleName'],
  mounted: function () {
  },
  methods: {
    goBack () {
      window.history.go(-1)
    }
    // goHome (event) {
    //   this.$router.push('/home')
    // }
  },
  directives: {
    title
  }
}
</script>
<style scoped>
</style>
