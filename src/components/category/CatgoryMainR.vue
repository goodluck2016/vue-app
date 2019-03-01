<template>
  <div id="cate_right">
    <div class="category_right">
      <div class="category_banner">
        <a href="#"><img src="../../assets/images/1.jpg" alt=""></a>
      </div>
      <div class="category_detail">
        <p class="category_n">热门小程序</p>
        <ul>
          <li class="category_detail_item" v-for="(item, index) in rightDatas" :key="index">
            <router-link :to="'/detail/'+item.product_id" class="category_detail_item_link">
                <img v-lazy="item.product_img_url" alt="" class="category_detail_item_pic">
                <p class="category_detail_item_name">{{item.product_name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      rightDatas: [
        // {product_id: 1, product_img_url: require('../../assets/images/1.jpg'), product_name: '新电商'},
        // {product_id: 2, product_img_url: require('../../assets/images/2.jpg'), product_name: '新零售'},
        // {product_id: 3, product_img_url: require('../../assets/images/3.jpg'), product_name: '新餐饮'},
        // {product_id: 4, product_img_url: require('../../assets/images/4.jpg'), product_name: '新美业'},
        // {product_id: 5, product_img_url: require('../../assets/images/5.jpg'), product_name: '鲜花蛋糕'}
      ],
      id: ''
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.id = this.$route.params.id
      this.getRight(this.id)
    }
    // console.log('this.id', this.id)
  },
  watch: {
    $route (to, from) {
      // console.log('to', to.params.id)
      if (to.params.id) {
        this.getRight(to.params.id)
      }
    }
  },
  methods: {
    getRight (id) {
      let self = this
      self.$http.get('/categorygoods', {params: {mId: id}}).then((res) => {
        // console.log('res.data', res.data)
        self.rightDatas = res.data
      })
    }
  }
}
</script>
