<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import Vue from 'vue'
import VueGitHubButtons from 'vue-github-buttons'
Vue.use(VueGitHubButtons, { useCache: true })

export default {
  name: 'app'
}
</script>


<style lang="scss">
@import '~vue-github-buttons/dist/vue-github-buttons.css';
@import "~milligram/dist/milligram.css";

#app {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  min-height: 100vh;
}
</style>
