import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    entries: []
  },
  mutations: {

  },
  actions: {
    loadData ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
})
