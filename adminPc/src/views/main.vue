<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'main',
  data () {
    return {
      msg: '主银，没有找到您要访问的页面，请检查输入的URL是否正确哦。'
    }
  }
}
</script>
<style scoped>
</style>
