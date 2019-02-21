<template>
  <div class="home">
    <div class="top_bar">
      <a onclick="window.history.go(-1)" class="icon_back"></a>
      <h3 class="cartname">首页</h3>
      <a href="#" class="icon_menu" @click="goHome($event)"></a>
    </div>
    <div class="main"></div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    goHome (event) {
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
