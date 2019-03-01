<template>
  <div id="app">
    <router-view/>
    <NavBottom v-show="shownav" />
  </div>
</template>
<script>
import NavBottom from './components/public/navBottom'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    NavBottom
  },
  computed: mapGetters(['shownav'])
}
</script>
