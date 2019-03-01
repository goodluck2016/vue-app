import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 状态
var state = {
  shownav: true,
  cartDatas: [],
  checkAllState: false,
  totalNum: 0
}
// 计算
var getters = {
  count (state) {
    return state.count
  },
  isEvenOrOdd () {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  },
  shownav (state) {
    return state.shownav
  },
  cartDatas (state) {
    return state.cartDatas
  },
  total (state) {
    var select = state.cartDatas.filter(function (v) {
      return v.check === true
    })
    if (select.length > 0) {
      return select.reduce(function (total, cur) {
        return total + cur.product_uprice * cur.num
      }, 0)
    } else {
      return 0
    }
  },
  checkAllState (state) {
    return state.checkAllState
  },
  totalNum (state) {
    var select = state.cartDatas.filter(function (v) {
      return v.check === true
    })
    if (select.length > 0) {
      return select.reduce(function (total, cur) {
        return total + cur.num
      }, 0)
    } else {
      return 0
    }
  }
}

// 管理mutations
var actions = {
  add ({commit}) { // 加
    commit('add')
  },
  decrement ({commit, state}) { // 减
    if (state.count > 3) {
      commit('decrement')
    }
  },
  hideNav ({commit}) {
    commit('HIDENAV')
  },
  showNav ({commit}) {
    commit('SHOWNAV')
  },
  addCart ({commit}, data) { // 购物车数据
    commit('ADDCART', data)
  },
  incrementData ({commit, state}, data) { // 购物车+
    commit('INCREMENTDATA', data)
  },
  decrementData ({commit, state}, data) { // 购物车-
    commit('DECREMENTDATA', data)
  },
  delCartData ({commit, state}, data) { // 删除购物车数据
    commit('DELCARTDATA', data)
  },
  checkAllChange ({commit, state}) { // 全选状态
    commit('CHECKALLCHANGE')
  },
  curCheckChange ({commit, state}) { // 当前状态
    commit('CURCHECKCHANGE')
  }
}
// 改变状态   commit()
var mutations = {
  add (state, data) {
    console.log('add')
    state.count++
  },
  decrement (state, data) {
    state.count--
  },
  HIDENAV (state) {
    state.shownav = false
  },
  SHOWNAV (state) {
    state.shownav = true
  },
  ADDCART (state, data) { // 购物车数据
    // state.cartDatas.push(data);
    if (state.cartDatas.length > 0) {
      let item = state.cartDatas.filter(function (v) {
        return v.product_id === data.product_id
      })[0]
      if (item) {
        item.num++
      } else {
        state.cartDatas.push(data)
      }
    } else {
      state.cartDatas.push(data)
    }
  },
  INCREMENTDATA (state, data) { // +
    let item = state.cartDatas.filter(function (v) {
      return v.product_id === data
    })[0]
    if (item) {
      item.num++
    }
  },
  DECREMENTDATA (state, data) { // -
    let item = state.cartDatas.filter(function (v) {
      return v.product_id === data
    })[0]
    if (item && item.num > 0) {
      item.num--
    }
  },
  DELCARTDATA (state, data) { // 删除
    for (let i = 0; i < state.cartDatas.length; i++) {
      if (state.cartDatas[i].product_id === data) {
        state.cartDatas.splice(i, 1)
        break
      }
    }
  },
  CHECKALLCHANGE (state) { // 全选
    state.checkAllState = !state.checkAllState
    state.cartDatas.forEach((item) => {
      item.check = state.checkAllState
    })
  },
  CURCHECKCHANGE (state) { // 当前
    var select = state.cartDatas.filter(function (v) {
      return v.check === true
    })
    select.length === state.cartDatas.length ? state.checkAllState = true : state.checkAllState = false
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
