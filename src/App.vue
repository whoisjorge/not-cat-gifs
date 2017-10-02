<template>
  <div id="app">
    <github-corner/>
      <particlesJS/>


    <router-view></router-view>


    <!-- Thank you JS.org -->
    <a style="position: absolute;top: 12px;left: 7px;" href="http://js.org" target="_blank" title="JS.ORG | JavaScript Community">
      <img src="https://logo.js.org/dark_horz.png" width="50" alt="JS.ORG"/>
    </a>

  </div>
</template>



<script>
import githubCorner from '@/components/githubCorner'
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
  user-select: none;
  display: flex;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}
</style>
