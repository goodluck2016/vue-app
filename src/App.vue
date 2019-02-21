<template>
  <div id="app">
    <router-view/>
    <NavBottom />
  </div>
</template>

<script>
import NavBottom from './components/public/navBottom'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    NavBottom
  }
}
</script>
