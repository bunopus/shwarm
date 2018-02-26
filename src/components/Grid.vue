<template>
  <div>
      <span v-for="entry in entries">{{entry.name}}</span>
  </div>
</template>

<script>
  export default {
    computed: {
      entries () {
        return this.$store.state.entries
      }
    }
  }
</script>

<style scoped>

</style>
