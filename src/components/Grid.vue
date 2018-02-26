<template>
  <div>
    <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>

    <span v-for="entry in reviews">{{entry.title}}</span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: true
      }
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
