<template>
  <div>
    <v-progress-circular indeterminate color="primary" v-if="loading"/>

    <Card v-else v-for="review in reviews" :review="review"></Card>
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

</style>
