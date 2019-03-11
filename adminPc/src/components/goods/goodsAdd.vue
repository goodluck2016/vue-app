<template>
  <div class="mainbox">
    <div class="mb20">
      <div class="txt">新增商品</div>
      <div class="addBtn" @click="add()">新增</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      params: {
        Name: 'test',
        Prize: '52',
        Description: 'testtest',
        ImageUrls: [require('../../assets/images/logo.png')]
      }
    }
  },
  methods: {
    add () {
      let self = this
      let data = {
        Name: self.params.Name,
        Prize: self.pramas.Prize,
        Description: self.pramas.Description,
        ImageUrls: self.pramas.ImageUrls
      }
      self.$http.post('/Product/AddProduct?Name=' + data.Name + '&Prize=' + data.Prize + '&Description=' + data.Description + '&ImageUrls=' + data.ImageUrls).then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>
<style scoped>
.addBtn{
  width:60px;
  padding:0 10px;
  height:30px;
  line-height: 30px;
  background:#f60;
  color:#fff;
  font-size: 13px;
  text-align:center;
  border-radius: 3px;
  cursor: pointer;
}
</style>
