<template>
  <div class="home">
    <topBar :titleName='titleName'/>
    <div class="main">
      <banner :imgDatas='imgDatas' />
      <homeList :listDatas='listDatas' />
    </div>
  </div>
</template>
<script>
import topBar from '../public/topBar'
import banner from '../public/banner'
import homeList from '../home/homeList'
export default {
  name: 'home',
  data () {
    return {
      titleName: '首页',
      imgDatas: [require('../../assets/images/1.jpg'), require('../../assets/images/2.jpg'), require('../../assets/images/3.jpg')],
      listDatas: []
    }
  },
  components: {
    topBar,
    banner,
    homeList
  },
  mounted: function () {
    this.getList()
  },
  methods: {
    getList () {
      let self = this
      self.$http.get('home').then((res) => {
        // self.listDatas = res.data
        self.listDatas.push(res.data[0])
        self.listDatas.push(res.data[1])
        self.listDatas.push(res.data[2])
        self.listDatas.push(res.data[3])
        self.listDatas.push(res.data[4])
        self.listDatas.push(res.data[5])
        self.listDatas.push(res.data[6])
        self.listDatas.push(res.data[7])
        self.listDatas.push(res.data[8])
        self.listDatas.push(res.data[9])
      })
    }
  }
}
</script>
<style scoped>
</style>
