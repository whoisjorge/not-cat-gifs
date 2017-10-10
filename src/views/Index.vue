<template>
  <section>
      <h1>There are no cats but... <a @click="reFetch()">{{this.animal}}s!?</a></h1>

      <div style="height: 300px; padding-top: 125px" v-if="loading">
        <spinner size="tiny" :message="'Loading ' + this.animal + ' GIF...'"/>
      </div>

      <main v-else>
          <!-- Image -->
          <a @click="reFetch()">
            <img :src="gif.image_url"/>
          </a>
          <!-- Powered by Giphy -->
          <a :href="gif.url" target="_blank"><img class="giphy" src="../assets/poweredbyGiphy.gif"/></a>
          <!-- Download -->
          <a :href="gif.image_url" download><pre><code>Download this GIF!</code></pre></a>
      </main>

      <Share/>

  </section>
</template>



<script>
import axios from 'axios'
import animals from '../animals.js'

import Spinner from 'vue-simple-spinner'
import Share from '@/components/Share'

export default {

  components: { Spinner, Share },

  data: () => ({
    loading: true,
    url: '//api.giphy.com/v1/gifs/random',
    gif: [],
    animal: '',
    animals: animals
  }),

  beforeMount () {
    this.randomAnimal()
    this.fetchData()
  },

  methods: {
    randomAnimal () {
      let animal = this.animals[Math.floor(Math.random() * this.animals.length)]
      this.animal = animal
    },

    fetchData () {
      axios.get(this.url, {
        params: {
          // Not much useful aka SPA!
          api_key: process.env.API_KEY,
          // api_key: 'Your API key',
          rating: 'g',
          // Random animal query
          tag: 'animal-' + this.animal
        }
      })

      .then(response => {
        this.gif = response.data.data
        this.loading = false
      })

      .catch(error => {
        console.log(error)
      })
    },
    reFetch () {
      this.randomAnimal()
      this.loading = true
      this.fetchData()
    }
  }
}
</script>



<style lang="sass" scoped>
/* -----------------------------------~~/\
   ~ GENERAL                             |
  --------------------------------------*/
section
  margin: 0 auto
  z-index: 666

h1
  font-weight: 100
  font-size: 3.4vmax
  letter-spacing: .01em
  animation: pulse
  animation-duration: 2s
  @media (max-width: 30.0rem)
    font-size: 21px
    padding-top: 80px
  a
    font-weight: bold
    color: inherit
    background-image: linear-gradient(152deg,#42b883,#feab3a)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    -webkit-animation: hue 6s infinite linear
    animation-fill-mode: both
    cursor: pointer

main
  position: relative
  max-width: 600px
  margin: 25px auto 0 auto
  img
    cursor: default
    max-height: 400px
    min-width: 600px
    @media (max-width: 40.0rem)
      min-width: 100%

pre
  max-width: 600px
  margin: 0 auto 20px auto
  animation-duration: 1.2s
  animation-fill-mode: both
  animation-name: fadeInUp
  border-left: none
  code
    background-image: linear-gradient(152deg,#42b883,#feab3a)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    -webkit-animation: hue 6s infinite linear
    animation-fill-mode: both


/* -----------------------------------~~/\
   ~ ANIMATIONS                          |
  --------------------------------------*/
@keyframes hue
  from
    -webkit-filter: hue-rotate(0deg)
  to
    -webkit-filter: hue-rotate(-360deg)

@keyframes fadeInUp
  from
    opacity: 0
    transform: translate3d(0, 100%, 0)
  to
    opacity: 1
    transform: none

@keyframes pulse
  from
    transform: scale3d(1, 1, 1)
  50%
    transform: scale3d(1.05, 1.05, 1.05)
  to
    transform: scale3d(1, 1, 1)


/* -----------------------------------~~/\
   ~ GIPHY CREDITS                       |
  --------------------------------------*/
.giphy
  position: absolute
  bottom: 4.5rem
  left: 0
  max-height: 53px
  min-width: 30px
  z-index: 999
  cursor: help
  animation: poweredByGiphy 2.666s ease-in
@keyframes poweredByGiphy
  from
    opacity: 0
  80%
    opacity: 0
  to
    opacity: 1
</style>
