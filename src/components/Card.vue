<template>
  <div v-if="review">
    <v-card width="300px">
      <v-card-media :src="review.image" height="200px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{review.title}}</h3>
          <div>{{review.text | limit}}</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">Share</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  import limit from '../filters/limit'
  export default {
    props: ['review'],
    filters: {
      limit
    }
  }
</script>

<style scoped>
  .headline {
    padding-bottom: 10px;
  }
</style>
