<template>
  <section>
      <h1>There are no cats but... <a @click="reFetch()">{{this.animal}}s!?</a></h1>

      <p style="min-height: 220px; margin-top: 180px" v-if="loading">Buffering {{this.animal}}...</p>

      <main v-else>
        <a @click="reFetch()"><img :src="gif.image_url"/></a>
        <a :href="gif.url" target="_blank"><img class="giphy" src="../assets/poweredbyGiphy.gif"/></a>
        <a :href="gif.image_url" download><pre><code>Download this GIF!</code></pre></a>
      </main>

      <socialShareing/>
  </section>
</template>



<script>
import axios from 'axios'
import animals from '@/animals.js'
import socialShareing from '@/components/socialShareing'

export default {

  components: { socialShareing },

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
        // Cutre way ... image is ready ...
        var self = this
        setTimeout(function () {
          self.loading = false
        }, 1000)
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



<style lang="sass">
a
  color: #42b883
  transition: all 0.4s ease

pre
  max-width: 600px
  margin: 0 auto 20px auto
  animation-duration: 1.2s
  animation-fill-mode: both
  animation-name: fadeInUp
  border-color: transparent
  code
    background-image: linear-gradient(152deg,#42b883,#feab3a)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    -webkit-animation: hue 6s infinite linear
    animation-fill-mode: both

section
  margin: 0 auto
  z-index: 666

h1
  font-weight: 100
  font-size: 3.4vmax
  letter-spacing: .01em
  animation: pulse
  animation-duration: 2s
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
</style>













<style lang="sass">
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


// aylmao?
@media (max-width: 30.0rem)
  footer
    display: block
    zoom: .7
  h1
    font-size: 21px
    margin-top: 66.6px
  pre code
    padding: 2px
</style>
