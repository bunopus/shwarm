<template>
  <div>
    <v-card flat>
      <v-toolbar card prominent color="orange" class="toolbar">
        <v-btn icon>
          <v-icon>add_circle_outline</v-icon>
        </v-btn>
        <v-btn icon v-on:click="re_sort">
          <v-icon>sort</v-icon>
        </v-btn>
        <v-spacer/>
      </v-toolbar>
        <v-progress-circular indeterminate color="primary" v-if="loading"/>
        <div v-masonry :column-width="'.item'" :item-selector="'.item'" v-else transition-duration="0.7s">
          <div class="gutter-item"></div>
          <div v-masonry-tile class="item" v-for="review in reviews">
            <Card :review="review" v-on:expand="expand(review)"></Card>
          </div>
        </div>
    </v-card>
    <v-dialog v-model="shouldExpand" width="600px" :scrollable="true" :lazy="true">
        <Card :review="expandedReview" :expanded="true"></Card>
    </v-dialog>
  </div>
</template>

<script>
  import Card from './Card'
  import { mapMutations } from 'vuex'

  export default {
    data () {
      return {
        loading: true,
        shouldExpand: false,
        expandedReview: null
      }
    },
    components: {
      Card
    },
    computed: {
      reviews () {
        return this.$store.state.reviews
      }
    },
    created () {
      this.$store.dispatch('loadReviews').then(() => (this.loading = false))
    },
    updated () {
      this.$redrawVueMasonry()
    },
    methods: {
      ...mapMutations([ 're_sort' ]),
      expand (review) {
        this.shouldExpand = true
        this.expandedReview = review
      }
    }
  }
</script>

<style scoped>
  .item {
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .gutter-item {
    width: 10px;
  }
  .toolbar {
    margin-bottom: 10px;
  }
</style>
