<template>
  <div class="mainbox">
    <div class="txt">{{msg}}</div>
    <div class="form">
      <div class="form-item">
        <label for="" class="form-label">用户名：</label>
        <div class="form-right">
            <input type="text" name="name" placeholder="请输入用户名" v-model="username">
        </div>
      </div>
      <div class="form-item">
        <label for="" class="form-label">新密码：</label>
        <div class="form-right">
            <input type="password" name="newPwd" placeholder="请输入新密码" v-model="newPwd">
        </div>
      </div>
      <div class="saveBtn" @click="save()">保存</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'setting',
  data () {
    return {
      msg: '修改密码',
      username: window.sessionStorage.userInfo,
      newPwd: ''
    }
  },
  methods: {
    save () {
      let self = this
      let data = {
        loginName: window.sessionStorage.userInfo,
        newPwd: self.newPwd
      }
      self.$http.post('/Account/EditPassword?loginName=' + data.loginName + '&newPwd=' + data.newPwd).then((res) => {
        console.log(res)
      }, (error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
.form-item {
    margin-bottom: 15px;
}
.form-label{
    padding-right:10px;
    display: table-cell;
    line-height: 30px;
}
.form-right {
    display: table-cell;
    line-height: 30px;
}
.form-right input{
    height:30px;
    line-height:30px;
    border:1px solid #eee;
    box-sizing: border-box;
    padding-left:10px;
}
.saveBtn{
    width:60px;
    height:30px;
    line-height: 30px;
    background: #f60;
    color:#fff;
    font-size:14px;
    text-align:center;
    border-radius: 3px;
    margin-left:67px;
    cursor: pointer;
}
</style>
