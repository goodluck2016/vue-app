<template>
  <div class="banner_box ">
    <ul class="banner_child_box">
      <li class="banner_item" v-for="(item, i) in imgDatas" :key="i" v-show="i === num">
        <img :src="item.image_url" alt="" class="banner_pic">
      </li>
    </ul>
    <ul class="banner_count">
      <li><span class="active">{{num+1}}</span>/{{imgDatas.length}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  props: ['imgDatas'],
  mounted () {
    this.play()
  },
  destroyed () {
    clearInterval(this.autoPlay)
  },
  methods: {
    autoPlay: function () {
      this.num++
      if (this.num === this.imgDatas.length) {
        this.num = 0
      }
    },
    play: function () {
      setInterval(this.autoPlay, 2000)
    }
  }
}
</script>
<style scoped>
</style>
