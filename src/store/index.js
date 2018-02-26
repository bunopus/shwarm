import Vue from 'vue'
import Vuex from 'vuex'
import reviews from '../api/reviews'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    reviews: []
  },
  mutations: {
    setReviews (state, reviews) {
      state.reviews = reviews
    }
  },
  actions: {
    loadReviews ({ commit }) {
      reviews.getReviews(reviews => {
        commit('setReviews', reviews)
      }, 1000)
    }
  }
})
