<template>
<section>
    <h1>You will not see any cat but... <a @click="reFetch()">{{this.animal}}s!?</a></h1>

    <p style="min-height: 220px; margin-top: 180px" v-if="loading">Buffering {{this.animal}}...</p>

    <main v-else>
      <a :href="gif.image_original_url"><img :src="gif.image_url"/></a>
      <pre><code>View on <a :href="gif.url" target="_blank">Giphy!</a></code></pre>
    </main>

    <footer>
      <gh-btns-star slug="whoisjorge/not-cat-gifs" show-count></gh-btns-star>
      <gh-btns-fork slug="whoisjorge/not-cat-gifs" show-count></gh-btns-fork>
      <gh-btns-follow user="whoisjorge" show-count></gh-btns-follow>
       <!-- JS.org -->
      <div><a href="http://js.org" target="_blank" title="JS.ORG | JavaScript Community"><img src="https://logo.js.org/dark_horz.png" width="50" alt="JS.ORG Logo"/></a></div>
    </footer>
</section>
</template>



<script>
import axios from 'axios'
import animals from '@/animals.js'

export default {

  data: () => ({
    loading: true,
    url: '//api.giphy.com/v1/gifs/random',
    gif: [],
    animal: '',
    animals: animals
  }),

  created () {
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
          // Random animal query from Array
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



<style lang="sass">

a
  color: #42b883
  transition: all 0.4s ease

pre
  max-width: 600px
  margin: 0 auto 20px auto
  border-left: none
  animation-duration: 1.2s
  animation-fill-mode: both
  animation-name: fadeInUp


section
  margin: 0 auto
  z-index: 666

h1
  letter-spacing: .01em
  font-size: 3.4vmax
  font-weight: lighter
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
  max-width: 600px
  margin: 25px auto 0 auto
  img
    max-height: 400px
    min-width: 600px
    @media (max-width: 40.0rem)
      min-width: 100%


footer
  display: flex
  justify-content: center
  margin: 0
  div
    margin: 0 10px
    a
      margin-top: -2px






// aylmao?
@media (max-width: 30.0rem)
  footer, h1
    zoom: .7


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
