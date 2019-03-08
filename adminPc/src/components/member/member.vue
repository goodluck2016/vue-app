<template>
  <div class="mainbox">
    <div class="form">
        <div class="form-item">
            <label class="form-item-l">地区：</label>
            <div  class="form-item-r">
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
    </div>
  </div>
</template>
<script>
export default {
  name: 'member',
  data () {
    return {
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
      districtArr: []
    }
  },
  methods: {
    beforeMount () {
      this.updateCity()
      this.updateDistrict()
    },
    updateCity () {
      var self = this
      self.arr.forEach (function (item, index) {
        if (item.name === self.prov) {
          self.cityArr = item.sub
         // return
        }
      })
      self.city = self.cityArr[1].name
    },
    updateDistrict () {
     var self = this
     self.cityArr.forEach (function (item, index) {
       if (item.name === self.city) {
         self.districtArr = item.sub
         // return
       }
     })
     self.districtArr && self.districtArr.length > 0 ? self.district = self.districtArr[1].name : self.district = ''
    }
  }
}
</script>
<style scoped>
.form-item-l{
    float:left;
    width: 60px;
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
