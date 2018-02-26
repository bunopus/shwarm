<template>
  <div>
      <span v-for="entry in reviews">{{entry.title}}</span>
  </div>
</template>

<script>
  export default {
    computed: {
      reviews () {
        return this.$store.state.reviews
      }
    },
    created () {
      this.$store.dispatch('loadReviews')
    }
  }
</script>

<style scoped>

</style>
