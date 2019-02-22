<template>
  <div class="topBar">
    <a onclick="window.history.go(-1)" class="icon_back"></a>
    <h3 class="cartname" v-title :data-title="titleName">{{titleName}}</h3>
    <a href="#" class="icon_menu" @click="goHome($event)"><i class="iconfont">&#xe60d;</i></a>
  </div>
</template>
<script>
import title from '../../directive/title'
export default {
  data () {
    return {
    }
  },
  props: ['titleName'],
  mounted: function () {
  },
  methods: {
  },
  directives: {
    title
  }
}
</script>
<style scoped>
</style>
