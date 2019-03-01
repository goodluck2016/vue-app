<template>
  <div id="caregoty_head">
    <header class="topBar">
      <a @click="goBack()" class="icon_back"></a>
      <form action="" class="goods_search">
        <input type="search" class="goods_search_content" placeholder="输入关键字搜索" @click="goSearch($event)">
      </form>
      <a href="#" class="icon_menu" @click="goHome($event)"><i class="iconfont">&#xe60d;</i></a>
  </header>
  </div>
</template>
<script>
export default{
  methods: {
    goBack () {
      window.history.go(-1)
    },
    goSearch (event) {
      this.$router.push('/search')
    },
    goHome ($event) {
      this.$router.push('/home')
    }
  }
}
</script>
