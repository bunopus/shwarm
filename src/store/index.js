import Vue from 'vue'
import Vuex from 'vuex'
import reviews from '../api/reviews'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    reviews: [],
    sortAsc: null
  },
  mutations: {
    setReviews (state, reviews) {
      state.reviews = reviews
    },
    re_sort (state) {
      if (!state.sortAsc) {
        state.reviews.sort((a, b) => {
          return (a.score >= b.score)
        })
      } else {
        state.reviews.reverse()
      }
      state.sortAsc = !state.sortAsc
      console.log(state.sortAsc)
    }
  },
  actions: {
    loadReviews ({ commit }) {
      return reviews.getReviews(reviews => {
        commit('setReviews', reviews)
      })
    }
  }
})
