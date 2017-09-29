<template>
  <div id="app">
    <vue-particles color="#42b883" :particleOpacity="0.9" :particlesNumber="40" shapeType="star" :particleSize="1"
                   linesColor="#42b883" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="120"
                   :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="false"/>

    <router-view></router-view>
  </div>
</template>


<script>
import Vue from 'vue'
//
// https://github.com/gluons/vue-github-buttons
import VueGitHubButtons from 'vue-github-buttons'
import 'vue-github-buttons/dist/vue-github-buttons.css'
Vue.use(VueGitHubButtons, { useCache: true })
//
// https://github.com/creotip/vue-particles
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
//
//
export default {
  name: 'app'
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

canvas {
  position: absolute;
  top: 0;
}
</style>
