<template>
  <div class="mainbox">
    <div class="txt">{{msg}}</div>
    <div class="form">
        <div class="form-item">
            <label class="form-item-l">地区：</label>
            <div class="form-item-r">
                <select class="selectbox" v-model="prov" @change="updateCity();updateDistrict()">
                    <option v-for="(v, index) in arr" :key="index">{{v.name}}</option>
                </select>
                <select class="selectbox" v-model="city" @change="updateDistrict()">
                    <option v-for="(v, index) in cityArr" :key="index">{{v.name}}</option>
                </select>
                <select class="selectbox" v-model="district" v-if="district">
                    <option v-for="(v, index) in districtArr" :key="index">{{v.name}}</option>
                </select>
            </div>
        </div>
        <div class="form-item">
          <label class="form-item-l">图片：</label>
          <div class="form-item-r">
            <div class="uploadImg">
              <div class="upload-content">
                <div class="upload-title">
                  <p>{{upTitle}}</p>
                  <p class="show-num">{{upNum}}/{{uploadNum}}</p>
                </div>
                <ul class="img-list">
                  <li class="show-img" v-for="(item, index) in imgList" :key="index">
                    <img :src="item" alt="">
                    <kk-icon :class="isDel == true ? '' : 'hide-del'" name="error" color="#FF685D" size="0.4rem" @click.native="delImg(index)"></kk-icon>
                  </li>
                  <div class="uploadSec">
                    <img :src="src" alt="上传图标">
                    <input type="file" value="" id="choose" @change='onUpload' multiple>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'member',
  data () {
    return {
      msg: '会员',
      arr: [
        {
          name: '北京',
          sub: [
            {name: '请选择', sub: []},
            {
              name: '北京',
              sub: [
                {name: '请选择'},
                {name: '东城区'},
                {name: '西城区'},
                {name: '崇文区'},
                {name: '宣武区'},
                {name: '朝阳区'},
                {name: '海淀区'},
                {name: '丰台区'},
                {name: '石景山区'},
                {name: '房山区'},
                {name: '通州区'},
                {name: '顺义区'},
                {name: '昌平区'},
                {name: '大兴区'},
                {name: '怀柔区'},
                {name: '平谷区'},
                {name: '门头沟区'},
                {name: '密云县'},
                {name: '延庆县'}
              ]
            }
          ]
        },
        {
          name: '上海',
          sub: [
            {name: '请选择', sub: []},
            {
              name: '上海',
              sub: [
                {name: '请选择'},
                {name: '黄浦区'},
                {name: '卢湾区'},
                {name: '徐汇区'},
                {name: '长宁区'},
                {name: '静安区'},
                {name: '普陀区'},
                {name: '闸北区'},
                {name: '虹口区'},
                {name: '杨浦区'},
                {name: '宝山区'},
                {name: '闵行区'},
                {name: '嘉定区'},
                {name: '松江区'},
                {name: '金山区'},
                {name: '青浦区'},
                {name: '南汇区'},
                {name: '奉贤区'},
                {name: '浦东新区'},
                {name: '崇明县'}
              ]
            }
          ]
        }
      ],
      prov: '北京',
      city: '北京',
      district: '东城区',
      cityArr: [],
      districtArr: [],
      upTitle: '',
      upNum: '',
      uploadNum: '',
      imgList: [],
      globalPath: '../../assets/',
      src: require('../../assets/images/insurance/upload.jpg'),
      isDel: false
    }
  },
  methods: {
    // beforeMount () {
    //   this.updateCity()
    //   this.updateDistrict()
    // },
    // updateCity () {
    //   var self = this
    //   self.arr.forEach(function (item, index) {
    //     if (item.name === self.prov) {
    //       self.cityArr = item.sub
    //     }
    //   })
    //   self.city = self.cityArr[1].name
    // },
    // updateDistrict () {
    //   var self = this
    //   self.cityArr.forEach(function (item, index) {
    //     if (item.name === self.city) {
    //       self.districtArr = item.sub
    //     }
    //   })
    //   self.districtArr && self.districtArr.length > 0 ? self.district = self.districtArr[1].name : self.district = ''
    // },
    // delImg (index) {},
    // onUpload (e) {
    //   let photoFile = e.target
    //   let val = e.target.value
    //   if (photoFile.files.length === 0) return false
    //   for (let i = 0; i < photoFile.files.length; i++) {
    //     this.fileAdd(photoFile.files[i], i)
    //   }
    // }
    // fileAdd (file, index) {
    //   let csrf_token = this.getCookie('XSRF-TOKEN')
    //   let formFile = new FormData()
    //   let imgName = 'img0'
    //   formFile.append(imgName, file)
    //   formFile.append('_token', csrf_token)
    //   let name = file.name
    //   let size = file.size
    //   let types = '.jpg, .jpeg, .png, .gif'
    //   let fileExt = name.substring(name.lastIndexOf('.')).toLowerCase()
    //   let result = types.indexOf(fileExt)
    //   if (result < 0) {
    //     this.$dialog.toase({
    //       mes: '图片格式不正确',
    //       timeout: 1000
    //     })
    //     return false
    //   }
    //   if (size > 1 * 1024 * 1024) {
    //     this.$dialog.toast({
    //       mes: '图片大小不能大于1M',
    //       timeout: 1000
    //     })
    //     return false
    //   }
    //   if (this.fileList.length >= this.uploadNum) {
    //     this.$dialog.toast({
    //       mes: '图片最多只能上传' + this.uploadNum + '张',
    //       timeout: 1000
    //     })
    //     return false
    //   }
    //   this.$http.post(this.upUrl, formFile).then((res) => {
    //     this.upNum = this.fileList.length + 1
    //     this.fileList.push(file)
    //     let imgUrl = this.showUrl + res.data.data
    //     let upImg = res.data.data
    //     this.imgList.push(imgUrl)
    //     this.upImgList.push(upImg)
    //     let upImgAll = this.upImgList.join('.')
    //     this.$emit('input', upImgAll)
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    // }
  }
}
</script>
<style scoped>
.uploadImg{
  text-align: left;
}
.upload-content{
    margin-left: 0.3rem;
}
.upload-title{
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.3rem 0.3rem 0;
}
.show-num{
  color: #c9c9c9;
}
.img-list{
  display: inline-block;
  margin: 0.6rem 0.3rem 0.3rem 0;
}
.show-img{
  position: relative;
  display: inline-block;
  margin-right: 5px;
  height: 64px;
  width: 64px;
}
.show-img img{
  width: 100%;
  height: 100%;
}
.hide-del{
  display: none;
}
.yd-icon-error{
  position: absolute;
  top: 0;
  right: 0;
}
.uploadSec{
  position: relative;
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  overflow: hidden;
}
.uploadSec{
  position: relative;
  display: inline-block;
  width: 64px;
  height: 64px;
  overflow: hidden;
}
.uploadSec img{
  width: 100%;
  height: 100%;
}
#choose{
  position: absolute;
  /*height: 100%;*/
  left: 0;
  top: 0;
  opacity: 0;
  height: 64px;
  width: 64px;
  cursor: pointer;
}
.form-item-l{
  float:left;
  width: 60px;
}
.form-item-l{
  line-height: 30px;
}
.form-item-r{
  margin-left:70px;
}
.selectbox{
  display:inline-block;
  margin-right: 10px;
  border: 1px solid #e0e0e0;
  height:30px;
  line-height: 30px;
  border-radius: 3px;
  padding:0 5px;
  width: 90px;
}
</style>
