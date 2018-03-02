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
    },
    addReview (state, review) {
      function getRand (min, max) {
        return Math.floor(Math.random() * max) + min
      }

      review.id = review.id || getRand(100, 1000)
      state.reviews.push(review)
    }
  },
  actions: {
    loadReviews ({ commit }) {
      return reviews.getReviews(reviews => {
        commit('setReviews', reviews)
      })
    },
    addReview ({ commit, state }, review) {
      commit('addReview', review)
    }
  }
})
