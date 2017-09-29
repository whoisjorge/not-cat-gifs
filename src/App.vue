<template>
  <div id="app">

    <github-corner/>
    <particlesJS/>

    <router-view/>

  </div>
</template>


<script>
// https://github.com/tholman/github-corners
import githubCorner from '@/components/githubCorner'
// https://github.com/creotip/vue-particles
import particlesJS from '@/components/particlesJS'

export default {
  name: 'app',
  components: { githubCorner, particlesJS }
}
</script>


<style lang="scss">
/* https://github.com/milligram/milligram */
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
