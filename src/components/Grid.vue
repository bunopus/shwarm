<template>
  <div>
    <v-progress-circular indeterminate color="primary" v-if="loading"/>

    <div v-masonry :column-width="'.item'" :item-selector="'.item'" v-else>
      <div class="gutter-item"></div>
      <div v-masonry-tile class="item" v-for="review in reviews">
        <Card :review="review"></Card>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from './Card'

  export default {
    data () {
      return {
        loading: true
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
</style>
