<template>
  <div class="category">
    <categoryHead />
    <categoryMain />
  </div>
</template>
<script>
import categoryHead from '../category/categoryHead'
import categoryMain from '../category/categoryMain'
export default {
  name: 'category',
  data () {
    return {
      titleName: '商品分类'
    }
  },
  mounted () {
    this.$store.dispatch('hideNav')
  },
  destroyed () {
    this.$store.dispatch('showNav')
  },
  methods: {
  },
  components: {
    categoryHead,
    categoryMain
  }
}
</script>
<style>
@import '../../assets/css/category.css'
</style>
