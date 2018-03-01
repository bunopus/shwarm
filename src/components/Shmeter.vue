<template>
  <div>
  <img src="../assets/shwarma.png" height="40px" v-for="i in 5" :class="{gray: i>roundedScore}">
  </div>
</template>

<script>
    export default {
      name: 'shmeter',
      props: ['score'],
      computed: {
        roundedScore () {
          return Math.floor(this.score)
        }
      }
    }
</script>

<style scoped>
  img.gray {
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    opacity: 0.3;

  }
</style>
