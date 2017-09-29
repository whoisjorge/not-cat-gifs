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

<style>
canvas {
  position: fixed;
  top: 0;
}
</style>
