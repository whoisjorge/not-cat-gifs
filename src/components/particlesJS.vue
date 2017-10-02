<!--
      https://github.com/creotip/vue-particles
      Webpack: https://github.com/creotip/vue-particles/issues/7
-->
<template>
  <vue-particles color="#42b883" :particleOpacity="0.9" :particlesNumber="40" shapeType="star" :particleSize="1"
                 linesColor="#42b883" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="120"
                 :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="false">
  </vue-particles>
</template>


<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

export default {
  name: 'particlesJS'
}
</script>


<style lang="sass">
canvas
  position: fixed
  top: 0

// Fix header links on "low" mobile devices
@media (max-width: 30.0rem)
  canvas
    display: none
</style>
