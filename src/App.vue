<template>
  <v-app>
    <div class="splash-screen" v-if="preloading">
      <img class="logo" src="./assets/logo_big.png"/>
      <img class="spinner" src="./assets/garlic.png"/>
    </div>
    <v-toolbar app height='100px'>
      <v-toolbar-title><img src="./assets/logo.png">
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app class="footer"><a href="https://ru.freepik.com/free-photos-vectors/food">Food векторы разработан Freepik</a></v-footer>
  </v-app>
</template>

<script>
import Grid from './components/Grid'

export default {
  data () {
    return {
      preloading: true
    }
  },
  name: 'App',
  components: {
    Grid
  },
  created () {
    setTimeout(() => {
      this.preloading = false
    }, 3000)
  }
}
</script>
<style scoped>
  .footer {
    font-size: 10px;
    margin-left: 10px;
  }
  .splash-screen {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #ffffff;
    z-index: 1000;
  }
  .splash-screen .logo {
    width: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin: -300px 0 0 -250px;

  }

  .splash-screen .spinner {
    width: 200px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -100px;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 3s linear infinite;
  }

  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>
