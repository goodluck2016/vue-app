<template>
  <div v-title :data-title="titleName">
    <div class="search_page">
      <div class="h_layout">
        <div class="search_ma">
          <header class="topBar">
            <a @click="goBack()" class="icon_back"></a>
            <form  class="goods_search">
              <input type="search"
                class="goods_search_content"
                placeholder="输入关键字搜索"
                v-model="keyword"
                @input="goSearch()">
            </form>
            <router-link class="icon_menu" to="/home"><i class="iconfont">&#xe60d;</i></router-link>
          </header>
          <section class="search_condition">
            <ul>
              <li>
                <span class="all">全部</span>
                <em class="all_icon"></em>
              </li>
              <li>
                <span @click="goSearch('hot')">销量</span>
              </li>
              <li class="p_price">
                <span>价格</span>
                <em class="price_up" @click="getByPriceUp()"></em>
                <em class="price_down" @click="getByPriceDown()"></em>
              </li>
              <li>
                <span>筛选</span>
                <em class="saixuan"></em>
              </li>
            </ul>
          </section>
          <main class="main_goods_box">
            <p class="no-msg" v-if="searchData.length === 0">暂无搜索结果数据</p>
            <ul>
              <li class="goods_item" v-for="(item, index) in searchData" :key="index">
                <router-link to="" class="goods_item_link">
                  <img :src="item.product_img_url" alt="" class="goods_item_pic">
                  <div class="goods_right">
                    <div class="pp_name">
                      <span>{{item.product_name}}</span>
                    </div>
                    <div class="price_box">
                      <span>￥</span>
                      <span>{{item.product_uprice}}</span>
                      <span>.00</span>
                    </div>
                    <div class="pinglun_box">
                      <span>{{item.product_comment_num}}条评价</span>
                      <span>{{item.shop_name}}</span>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import title from '../../directive/titleName'
export default {
  name: 'search',
  data () {
    return {
      titleName: '商品搜索',
      keyword: '',
      searchData: [
        // {
        //   product_img_url: require('../../assets/images/1.jpg'),
        //   product_name: '小程序小程序小程序小程序小程序小程序小程序小程序小程序小程序小程序小程序小程序',
        //   product_uprice: '118',
        //   product_comment_num: 158,
        //   shop_name: '小米中国店'
        // },
        // {
        //   product_img_url: require('../../assets/images/2.jpg'),
        //   product_name: '小飞龙小程序小飞龙小程序小飞龙小程序小飞龙小程序小飞龙小程序小飞龙小程序',
        //   product_uprice: '998',
        //   product_comment_num: 6126,
        //   shop_name: '小飞龙'
        // },
        // {
        //   product_img_url: require('../../assets/images/3.jpg'),
        //   product_name: '百度一等小程序百度一等小程序百度一等小程序百度一等小程序百度一等小程序',
        //   product_uprice: '7118',
        //   product_comment_num: 287,
        //   shop_name: '百度一等'
        // },
        // {
        //   product_img_url: require('../../assets/images/4.jpg'),
        //   product_name: '阿里乔峰小程序阿里乔峰小程序阿里乔峰小程序阿里乔峰小程序阿里乔峰小程序',
        //   product_uprice: '5688',
        //   product_comment_num: 1818,
        //   shop_name: '阿里乔峰'
        // },
        // {
        //   product_img_url: require('../../assets/images/5.jpg'),
        //   product_name: '红动中国小程序红动中国小程序红动中国小程序红动中国小程序红动中国小程序',
        //   product_uprice: '1928',
        //   product_comment_num: 6158,
        //   shop_name: '红动中国'
        // }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('hideNav')
  },
  destroyed () {
    this.$store.dispatch('showNav')
  },
  methods: {
    goBack () {
      window.history.go(-1)
    },
    goSearch () {
      let self = this
      if (self.keyword) {
        alert('请输入搜索关键字')
        return false
      } else {
        self.$http.get('/search', {
          params: {
            kw: self.keyword,
            hot: '',
            priceUp: '',
            priceDown: ''
          }
        }).then((res) => {
          console.log('res.data', res.data)
          self.searchData = res.data
        }, (error) => {
          console.log(error)
        })
      }
    },
    getByPriceUp () {
      console.log('getByPriceUp')
    },
    getByPriceDown () {
      console.log('priceDown')
    }
  },
  components: {
  },
  directives: {
    title
  }
}
</script>
<style scoped>
@import '../../assets/css/search.css'
</style>
