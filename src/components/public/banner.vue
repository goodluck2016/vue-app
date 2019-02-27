<template>
  <div class="banner">
    <ul class="imgList">
      <li class="banner-item" v-for="(item, i) in imgDatas" :key="i" v-show="i === num">
        <img :src="item" alt="" class="banner-img">
      </li>
    </ul>
    <ul class="circleList">
      <li v-for="(item, i) in imgDatas" :key="i" :class="{'active': i === num}"></li>
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
  mounted: function () {
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
