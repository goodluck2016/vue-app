<template>
  <div class="banner">
    <ul class="imgList">
      <li class="banner-item" v-for="(item, i) in imgDatas" :key="i" v-show="i === num">
        <img :src="item" alt="" class="banner-img">
      </li>
    </ul>
    <ul class="circleList">
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
  mounted: function () {
    this.play()
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
.banner {
    width: 100%;
    overflow: hidden;
    position: relative;
}
.banner ul:first-child {
    width: 1000%;
}
.banner ul:first-child li {
    width: 10%;
    float: left;
}
.banner ul:first-child li img {
    width: 100%;
    display: block;
}
.banner ul:last-child {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 90%;
    /*transform: translate(-50%, -50%); */
    bottom: -2px;
}
.banner ul:last-child li {
    color:#fff;
    width: 6px;
    height: 6px;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    display:inline-block;
    margin: 0 4px;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
}
.banner ul:last-child li:first-child {
    margin-left: 0;
}
.banner ul:last-child li.active,.active{
    color:#f60;
}
</style>
