<template>
  <v-app>
    <v-content>
      <Grid/>
    </v-content>
  </v-app>
</template>

<script>
import Grid from './components/Grid'

export default {
  data () {
    return {
    }
  },
  name: 'App',
  components: {
    Grid
  }
}
</script>
