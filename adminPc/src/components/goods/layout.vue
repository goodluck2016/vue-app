<template>
  <div class="">
    <div class="leftNav">
        <div class="leftNav-list">
            <a v-for="(item, index) in items" :key="index" class="leftNav-item" :class="{'now': num===index}" @click="checkNav(item, index)" >{{item.name}}</a>
        </div>
    </div>
    <div class="rightCont">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 0,
      items: [
        {path: '/main/goods/goodsList', name: '商品列表'},
        {path: '/main/goods/goodsAdd', name: '新增商品'},
        {path: '/main/cart/cart', name: '查看购物车'}
      ]
    }
  },
  methods: {
    checkNav (item, index) {
      this.num = index
      this.$router.push(item.path)
    }
  }
}
</script>
<style scoped>
</style>
