import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var state = {
  shownav: true
}

var getters = {
  shownav (state) {
    return state.shownav
  }
}

var actions = {
  hideNav ({commit}) {
    commit('HIDENAV')
  },
  showNav ({commit}) {
    commit('SHOWNAV')
  }
}

var mutations = {
  HIDENAV (state) {
    state.shownav = false
  },
  SHOWNAV (state) {
    state.shownav = true
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store
