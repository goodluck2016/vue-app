<template>
  <div class="mainbox">
    <div class="txt">购物车列表</div>
    <div class="table-w">
      <div class="table">
        <div class="table-header">
          <table cellspacing="0" cellpadding="0" border="0" >
            <colgroup>
              <col width="8%"><col width="32%"><col width="20%"><col width="20%"><col width="20%">
            </colgroup>
            <thead>
              <tr>
                <th><div class="table-cell">序号</div></th>
                <th><div class="table-cell">名称</div></th>
                <th><div class="table-cell">图片</div></th>
                <th><div class="table-cell">价格(元)</div></th>
                <th><div class="table-cell">操作</div></th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="table-body">
          <table cellspacing="0" cellpadding="0" border="0" >
            <colgroup>
              <col width="8%"><col width="32%"><col width="20%"><col width="20%"><col width="20%">
            </colgroup>
            <tbody class="table-tbody">
              <tr class="table-row" v-for="(item, index) in list" :key="index">
                <td><div class="table-cell">{{index+1}}</div></td>
                <td><div class="table-cell">{{item.Name}}</div></td>
                <td><div class="table-cell"><img class="img" :src="ImageUrls" width="48" /></div></td>
                <td><div class="table-cell">{{item.Prize}}</div></td>
                <td>
                  <div class="table-cell">
                    <a href="javascript:void(0);" title="查看" class="viewBtn" @click="goDetail(item)">查看</a>
                    <a href="javascript:void(0);" title="删除" class="delBtn" @click="del(item, index)">删除</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-tip" v-if="list.length===0">
          <table cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td>暂无数据</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginName: '',
      list: [],
      id: '',
      ImageUrls: require('../../assets/images/logo.png')
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      let self = this
      console.log('userInfo', window.sessionStorage.userInfo)
      if (window.sessionStorage.userInfo) {
        self.loginName = window.sessionStorage.userInfo
      }
      self.$http.get('/Cart/MyCart?loginName=' + self.loginName).then((res) => {
        console.log(res.data)
        self.list = res.data
      })
    },
    goDetail (item) {
      let self = this
      self.id = item.Id
      if (self.id) {
        self.$router.push('/main/detail/id=' + self.id)
      }
    },
    add () {},
    del (item, indwx) {}
  }
}
</script>
<style scoped>
.layer,.mask{
  position: fixed;
  z-index:98;
  top:0;
  left:0;
  right:0;
  bottom:0;
}
.mask{
  background: rgba(0,0,0,.6);
}
.layerBox{
  position:absolute;
  z-index:99;
  width:300px;
  height:150px;
  background: #fff;
  border-radius: 3px;
  top:50%;
  left:50%;
  margin-top:-100px;
  margin-left:-75px;
  box-shadow: 0 0 15px rgba(0,0,0,.3)
}
.layerBox-c{
  position:relative;
  padding:20px;
}
.title{
  font-size:15px;
  text-align:center;
  line-height: 50px;
}
.btnGroup{
  width:100%;
  text-align: center;
}
.confirm,.cancel{
  display:inline-block;
  margin:10px;
  width:60px;
  height:28px;
  line-height: 28px;
  background: #f60;
  color:#fff;
  text-align:center;
  border-radius:3px;
  text-decoration: none;
  border:1px solid #f60;
  box-sizing: border-box;
}
.cancel{
  background: #fff;
  color:#999;
  border:1px solid #e0e0e0;
}
.confirm:hover{
  background: #f90;
  border:1px solid #f90;
}
.cancel:hover{
  border-color:#f90;
  color:#f90;
}
.closeBtn {
  position:absolute;
  top:10px;
  right:10px;
  width:20px;
  height:20px;
  line-height:18px;
  font-size:16px;
  text-align:center;
  color:#999;
  cursor: pointer;
}
.closeBtn:hover{
  color:#f60;
}
.mb20{
  margin-bottom:20px;
}
.addBtn{
  width:80px;
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
.img{
  display:block;
  margin:10px 0;
  border:1px solid #eee;
  box-sizing: border-box;
  padding:2px;
}
.table-w {
    position: relative;
    border: 1px solid #d7dde4;
    border-bottom: 0;
}
.table {
    width: inherit;
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: #657180;
    font-size: 12px;
    background-color: #fff;
    box-sizing: border-box;
}
.table:after, .table:before {
    background-color: #d7dde4;
    content: '';
}
.table:before {
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
}
.table-header {
    overflow: hidden;
}
.table table {
    width:100%;
    /*table-layout: fixed;*/
}
.table td, .table th {
    min-width: 0;
    height: 48px;
    box-sizing: border-box;
    text-align: left;
    text-overflow: ellipsis;
    vertical-align: middle;
    border-bottom: 1px solid #e3e8ee;
}
.table th {
    height: 40px;
    white-space: nowrap;
    overflow: hidden;
    background-color: #f5f7f9;
}
.table-cell {
    padding-left: 18px;
    padding-right: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    box-sizing: border-box;
}
.table-body {
    overflow: auto;
}
.table-tip table td {
    text-align: center;
}
.pagebox{
    padding:20px;
}
.page{
    height:32px;
    float:right;
    margin-bottom: 20px;
}
.page-total {
    float: left;
    height: 32px;
    line-height: 32px;
    margin-right: 10px;
}
.page-item, .page-item-jump-next, .page-item-jump-prev, .page-next, .page-prev {
    min-width: 32px;
    line-height: 30px;
    cursor: pointer;
    font-family: Arial;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    text-align: center;
    float: left;
    list-style: none;
}
.page-prev {
    margin-right: 8px;
}
.page-item-jump-next, .page-item-jump-prev, .page-next, .page-prev {
    display: inline-block;
    height: 32px;
    color: #666;
    border: 1px solid #d7dde4;
    border-radius: 4px;
}
.page-item {
    height: 32px;
    margin-right: 4px;
    background-color: #fff;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #d7dde4;
    border-radius: 4px;
    color:#666;
}
.page-item a,.page-item-jump-next a{
    color:#666;
}
.page-next, .page-prev {
    background-color: #fff;
}
.page-next a, .page-prev a {
    color: #666;
    font-size: 14px;
}
.page-item-active {
    background-color: #39f;
    border-color: #39f;
    color:#fff;
}
.page-item-active a{
    color:#fff;
}
.icon, .select-multiple .select-item-selected:after {
    speak: none;
    font-variant: normal;
    text-transform: none;
    text-rendering: auto;
}
.icon, .select-multiple .select-item-selected:after, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.icon {
    display: inline-block;
    font-family: Ionicons;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
}
.icon-arrow-l:before {
    content: "\F3D2";
}
.icon-arrow-r:before {
    content: "\f3d2";
}
</style>
