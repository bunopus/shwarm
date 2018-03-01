import Vue from 'vue'
import Router from 'vue-router'
import Grid from '../components/Grid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'reviews',
      component: Grid
    },
    {
      //TODO use for card open
      path: '/reviews/:id',
      name: 'reviews',
      component: Grid
    }
  ]
})
