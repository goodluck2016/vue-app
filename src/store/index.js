import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var state = {
  shownav: true,
  cartDatas: [],
  checkAllState: false
}

var getters = {
  shownav (state) {
    return state.shownav
  },
  cartDatas (state) {
    return state.cartDatas
  },
  total (state) {
    let select = state.cartDatas.filter((v) => {
      return v.check === true
    })
    if (select.length > 0) {
      return select.reduce((total, cur) => {
        return total + cur.product_uprice * cur.num
      }, 0)
    } else {
      return 0
    }
  },
  totalNum (state) {
    let select = state.cartDatas.filter((v) => {
      return v.check === true
    })
    if (select.length > 0) {
      return select.reduce((total, cur) => {
        return total + cur.num
      }, 0)
    } else {
      return 0
    }
  },
  checkAllState (state) {
    return state.checkAllState
  }
}

var actions = {
  hideNav ({commit}) {
    commit('HIDENAV')
  },
  showNav ({commit}) {
    commit('SHOWNAV')
  },
  addCart ({commit}, data) {
    commit('ADDCART', data)
  },
  incrementData ({commit, state}, data) {
    commit('INCREMENTDATA', data)
  },
  decrementData ({commit, state}, data) {
    commit('DECREMENTDATA', data)
  },
  delCartData ({commit, state}, data) {
    commit('DELCARTDATA', data)
  },
  checkAllChange ({commit}) {
    commit('CHECKALLCHANGE')
  },
  curCheckChange ({commit}) {
    commit('CURCHECKCHANGE')
  }
}

var mutations = {
  HIDENAV (state) {
    state.shownav = false
  },
  SHOWNAV (state) {
    state.shownav = true
  },
  ADDCART (state, data) {
    if (state.cartDatas.length > 0) {
      let item = state.cartDatas.filter((v) => {
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
  INCREMENTDATA (state, data) {
    let item = state.cartDatas.filter((v) => {
      return v.product_id === data
    })[0]
    if (item) {
      item.num++
    }
  },
  DECREMENTDATA (state, data) {
    let item = state.cartDatas.filter((v) => {
      return v.product_id === data
    })[0]
    if (item && item.num > 0) {
      item.num--
    }
  },
  DELCARTDATA (state, data) {
    for (let i = 0; i < state.cartDatas.length; i++) {
      if (state.cartDatas[i].product_id === data) {
        state.cartDatas.splice(i, 1)
        break
      }
    }
  },
  CHECKALLCHANGE (state) {
    state.checkAllState = !state.checkAllState
    state.cartDatas.forEach((item) => {
      item.check = state.checkAllState
    })
  },
  CURCHECKCHANGE (state) {
    let items = state.cartDatas.filter((v) => {
      return v.check === true
    })
    items.length === state.cartDatas.length ? state.checkAllState = true : state.checkAllState = false
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store
