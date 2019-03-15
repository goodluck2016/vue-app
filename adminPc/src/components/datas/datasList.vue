<template>
  <div class="mainR-cont">
    <div class="txt">列表</div>
    <div class="table-w">
        <div class="table">
            <div class="table-header">
                <table cellspacing="0" cellpadding="0" border="0" >
                    <colgroup>
                        <col width="8%"><col width="20%"><col width="20%"><col width="32%"><col width="20%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>
                                <div class="table-cell"><label><input type="checkbox" v-model="checkAll"/></label></div>
                            </th>
                            <th>
                                <div class="table-cell">姓名</div>
                            </th>
                            <th>
                                <div class="table-cell">年龄</div>
                            </th>
                            <th>
                                <div class="table-cell">地址</div>
                            </th>
                            <th>
                                <div class="table-cell">操作</div>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="table-body">
                <table cellspacing="0" cellpadding="0" border="0" >
                    <colgroup>
                        <col width="8%"><col width="20%"><col width="20%"><col width="32%"><col width="20%">
                    </colgroup>
                    <tbody class="table-tbody">
                        <tr class="table-row" v-for="(item, index) in lists" :key="index">
                            <td>
                                <div class="table-cell"><label><input type="checkbox" v-model="item.check" @change="changeCur()" /></label></div>
                            </td>
                            <td>
                                <div class="table-cell">{{item.name}}</div>
                            </td>
                            <td>
                                <div class="table-cell">{{item.age}}</div>
                            </td>
                            <td>
                                <div class="table-cell">{{item.address}}</div>
                            </td>
                            <td>
                                <div class="table-cell">
                                  <a href="javascript:void(0);" title="查看" class="viewBtn">查看</a>
                                  <a href="javascript:void(0);" title="编辑" class="EditBtn">编辑</a>
                                  <a href="javascript:void(0);" title="删除" class="delBtn">删除</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table-tip" v-if="lists.length===0">
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td>暂无数据</td>
                        </tr>
                    </tbody>
                </table>
            </div>
<!--             <div class="pagebox">
              <label><input type="checkbox" v-model="checkAll" @change="changeAll()" />全选</label>
              <Page :curpage="curpage" :pagenum="pagenum" :total="total" :items="items" />
            </div> -->
            <div class="pagebox">
                <label><input type="checkbox" v-model="checkAll" @change="changeAll()" />全选</label>
                <ul class="pagelist">
                    <span class="page-total">共{{pagenum}}页, {{total}}条</span>
                    <li class="page-prev" title="上一页"  @click="curpage === 1 ? '' : getList(curpage-1)">
                        <a href="javascript:void(0)">&lt;</a>
                    </li>
                    <li :title="{i}" class="page-item" :class="{'page-item-active': i === curpage }" v-for="i in pagenum" :key="i" @click="getList(i)"><a href="javascript:void(0)">{{i}}</a></li>
                    <li class="page-next" title="下一页" @click="curpage === pagenum ? '' : getList(curpage+1)">
                        <a href="javascript:void(0)">&gt;</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Page from '../common/page'
export default {
  name: 'datas',
  data () {
    return {
      checkAll: false,
      curpage: 1, // 当前页
      pagenum: 1, // 总页数
      pagesize: 5, // 每页条数,
      total: 0, // 全部数据
      lists: [], // 当前页数据
      arr: [
        {id: 1, name: '王二小', age: 22, address: '北京市朝阳区芍药居', check: false},
        {id: 2, name: '李小龙', age: 28, address: '北京市海淀区西二旗', check: false},
        {id: 3, name: '李世明', age: 24, address: '上海市浦东新区世纪大道', check: false},
        {id: 4, name: '张无忌', age: 26, address: '深圳市南山区深南大道', check: false},
        {id: 5, name: '肖志文', age: 26, address: '广州中山市小榄东成西就大道', check: false},
        {id: 6, name: '习近平', age: 26, address: '北京市故宫大道666号', check: false},
        {id: 7, name: '彭丽媛', age: 26, address: '北京市故宫大道888号', check: false},
        {id: 8, name: '叶问', age: 26, address: '中国武林大道8栋1201号', check: false},
        {id: 9, name: '战狼', age: 26, address: '地球一号118飞天仓', check: false},
        {id: 10, name: '胡歌', age: 26, address: '上海静安江河大道', check: false},
        {id: 11, name: '项飞', age: 26, address: '楚国飞天大道1010号', check: false}
      ]
    }
  },
  components: {
    Page
  },
  created () {},
  mounted () {
    this.getList(this.curpage)
  },
  methods: {
    changeAll () {
      this.lists.forEach((item) => {
        item.check = this.checkAll
      })
    },
    changeCur () {
      let selected = this.lists.filter((item) => {
        return item.check === true
      })
      selected.length === this.lists.length ? this.checkAll = true : this.checkAll = false
    },
    getList (cur) {
      let self = this
      self.curpage = cur || self.curpage
      // console.log('cur', cur)
      self.total = self.arr.length
      self.pagenum = Math.ceil(self.total / self.pagesize)
      // console.log('pagenum', self.pagenum)
      let indexStart = (self.curpage - 1) * self.pagesize
      let indexEnd = ((self.curpage - 1) * self.pagesize + self.pagesize)
      // console.log('indexStart', indexStart)
      // console.log('indexEnd', indexEnd)
      self.lists = self.arr.slice(indexStart, indexEnd)
      // console.log('lists', self.lists)
    }
  }
}
</script>
<style scoped>
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
.pagebox label{
    float:left;
    margin-top:10px;
    margin-left: -3px
}
.pagebox label input{
    margin-right:5px;
}
.pagelist{
    height:32px;
    float:right;
    margin-bottom: 20px;
}
.pagelist a{
    text-decoration: none;
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
.page-disabled{
  background: #ccc;
  color:#ddd;
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
    color: #999;
    font-size: 14px;
}
.page-next:hover, .page-prev:hover {
    color: #fff;
    background: #f60;
    border-color: #f60;
}
.page-next:hover a, .page-prev:hover a{
    color:#fff;
}
.page-item-active {
    background-color: #f60;
    border-color: #f60;
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
*, :after, :before {
    box-sizing: border-box;
}
</style>
