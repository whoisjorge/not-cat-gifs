<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import Vue from 'vue'
import VueGitHubButtons from 'vue-github-buttons'
import 'vue-github-buttons/dist/vue-github-buttons.css'
Vue.use(VueGitHubButtons, { useCache: true })

export default {
  name: 'app'
}
</script>


<style lang="scss">
/* Milligram v1.3.0 (https://milligram.github.io)
 * Copyright (c) 2017 CJ Patoilo | MIT license */
@import "~milligram/dist/milligram.css";


#app {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}
</style>
