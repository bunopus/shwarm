<template>
  <div v-if="review">
    <v-card :width="expanded? 600 : 300">
      <v-card-media :src="review.image" :height="expanded ? 350 : getRand(150, 250)">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{review.title}}</h3>
          <Shmeter :score="review.score"/>
          <div v-if="!expanded">{{review.text | limit(getRand(200, 300))}}</div>
          <div v-else>{{review.text}}</div>
        </div>
      </v-card-title>
      <v-card-actions v-if="!expanded">
        <v-btn flat color="orange" icon v-on:click="$emit('expand')">
          <v-icon>expand_more</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  import limit from '../filters/limit'
  import Shmeter from './Shmeter'

  export default {
    props: ['review', 'expanded'],
    filters: {
      limit
    },
    methods: {
      getRand (min, max) {
        return Math.floor(Math.random() * max) + min
      }
    },
    components: {
      Shmeter
    }
  }
</script>

<style scoped>
  .headline {
    padding-bottom: 10px;
  }
</style>
