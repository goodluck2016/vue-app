<template>
  <div class="mainbox">
    <div class="txt">商品详情</div>
    <div class="detail">
      <div class="form-item">
        <label class="label">产品名称：</label>
        <div class="form-item-r name">{{obj.Name}}</div>
      </div>
      <div class="form-item">
        <label class="label">产品图片：</label>
        <div class="form-item-r"><img :src="obj.ImageUrls" class="img" /></div>
      </div>
      <div class="form-item">
        <label class="label">产品价格：</label>
        <div class="form-item-r price"><span>￥</span>{{obj.Prize}}</div>
      </div>
      <div class="form-item">
        <label class="label">产品描述：</label>
        <div class="form-item-r c999">{{obj.Description}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: '',
      obj: {
        Description: '',
        Id: '553aa59e-4265-45ee-9eef-5a41d83cca04',
        ImageUrls: [],
        Name: '',
        Prize: ''
      }
    }
  },
  mounted () {
    this.id = this.obj.Id
    this.getObj(this.id)
  },
  methods: {
    getObj (id) {
      this.obj = {
        Description: 'yonex羽毛球拍双刃10超级好玩，性价超高，适合双人单打和双人双打，给您的生活休闲带来愉悦体验！',
        Id: '553aa59e-4265-45ee-9eef-5a41d83cca04',
        ImageUrls: [require('../../assets/images/logo.png')],
        Name: 'yonex羽毛球拍双刃10超级好玩的球拍',
        Prize: 1400
      }
    }
  }
}
</script>
<style scoped>
.detail{
  padding:20px;
  background: #fafafa;
  border:1px solid #f2f2f2;
  box-sizing: border-box;
}
.form-item{
  margin-bottom: 15px;
}
.label{
  float:left;
  width:90px;
  color:#999;
  font-size:12px;
}
.form-item-r{
  margin-left:90px;
}
.name{
  font-size:14px;
  font-weight: bold;
  color:#666;
}
.c999{
  font-size:12px;
  color:#999;
}
.img{
  width:40px;
}
.price{
  color:#f60;
  font-size:18px;
  font-weight: bold;
}
.price span{
  font-size:12px;
  font-weight:normal;
}
</style>
