<template>
  <div id="cate_left">
    <div class="category_left">
      <ul class="childbox">
        <li v-for="(item, index) in leftDatas" :key="index" :class="{'now': num === index}" @click="num = index">
          <router-link :to="'/category/'+ item.category_id">
          {{item.category_name}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      leftDatas: [
        {category_id: 34, category_name: '品牌官网'},
        {category_id: 33, category_name: '新零售'},
        {category_id: 32, category_name: '新餐饮'},
        {category_id: 31, category_name: '新美业'},
        {category_id: 30, category_name: '新电商'},
        {category_id: 29, category_name: '鲜花蛋糕'},
        {category_id: 28, category_name: '生鲜果蔬'},
        {category_id: 27, category_name: '服饰箱包'},
        {category_id: 26, category_name: '教育培训'},
        {category_id: 25, category_name: '汽车服务'},
        {category_id: 24, category_name: '装饰装修'},
        {category_id: 23, category_name: '生产制造'},
        {category_id: 22, category_name: '数码家电'},
        {category_id: 21, category_name: '家居家纺'},
        {category_id: 20, category_name: '日用百货'},
        {category_id: 19, category_name: '婚庆服务'},
        {category_id: 18, category_name: '婚纱摄影'},
        {category_id: 17, category_name: '旅游'},
        {category_id: 16, category_name: '房产'},
        {category_id: 15, category_name: '金融'},
        {category_id: 14, category_name: '医疗健康'},
        {category_id: 13, category_name: '健身运动'},
        {category_id: 12, category_name: '洗浴按摩'},
        {category_id: 11, category_name: '家政服务'},
        {category_id: 10, category_name: '票务'},
        {category_id: 9, category_name: '酒店'},
        {category_id: 8, category_name: 'KTV'},
        {category_id: 7, category_name: '酒水茶饮'},
        {category_id: 6, category_name: '广告设计'},
        {category_id: 5, category_name: '机械制造'}
      ],
      num: '',
      item: {}
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      let self = this
      self.$http.get('/category').then((res) => {
        // console.log('res.data', res.data)
        // self.leftDatas = res.data
      })
    }
  }
}
</script>
