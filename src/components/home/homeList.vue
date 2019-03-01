<template>
  <div class="homeList">
    <router-link class="homeList-item" v-for="item in listDatas" :key="item.product_id" :to="'/detail/'+item.product_id" tag="div">
      <div class="imgBox">
        <img :src="item.product_img_url" />
      </div>
      <div class="item-r">
        <div class="proName">{{item.product_name}}</div>
        <div class="proPrice">
          <span class="oPrice"><i>￥</i>{{item.product_price}}</span> <span class="upPrice"><i>￥</i>{{item.product_uprice}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'homeList',
  data () {
    return {
      listDatas: []
      // imgDatas: [require('../../assets/images/1.jpg'), require('../../assets/images/2.jpg'), require('../../assets/images/3.jpg')]
    }
  },
  components: {
  },
  mounted () {
    this.getList()
  },
  // props: ['listDatas'],
  methods: {
    getList () {
      let self = this
      self.$http.get('home').then((res) => {
        // console.log('listDatas', res.data)
        self.listDatas = res.data
        // self.listDatas.push(res.data[0])
      })
    }
  }
}
</script>
<style scoped>
.homeList-item{
  padding:8px;
  background: #fff;
  height:76px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
.imgBox{
  float:left;
  width:60px;
  height:60px;
  margin-right: 6px;
}
.imgBox img{
  width:40px;
  height:40px;
  border-radius: 50%;
  margin:10px;
}
.item-r{
  text-align:left;
}
.proName{
  font-size:14px;
  color:#333;
  line-height:18px;
  max-height:36px;
  margin-bottom:6px;
  overflow: hidden;
}
.proPrice{
  font-size:12px;
  color:#999;
}
.oPrice{
  display:inline-block;
  text-decoration: line-through;
}
.oPrice i{
  font-size:10px;
  font-style: normal;
}
.upPrice{
  display:inline-block;
  font-size:14px;
  color:#f60;
  margin-left:10px;
}
.upPrice i{
  font-size:10px;
  font-style: normal;
}
</style>
