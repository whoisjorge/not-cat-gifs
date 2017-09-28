<template>
  <section class="container">
      <header>
        <h1>You will not see any cat but... <a style="cursor: pointer" @click="reFetch()">{{this.animal}}s!?</a></h1>
      </header>

      <p style="margin: 50px 0;" v-if="loading">Loading...</p>
      <main v-else>
        <a :href="gif.image_original_url"><img :src="gif.image_url"/></a>
        <pre><code>Powered by the <a :href="gif.url" target="_blank">Giphy API!</a></code></pre>
      </main>

      <footer>
        <gh-btns-star slug="whoisjorge/not-cat-gifs" show-count></gh-btns-star>
        <gh-btns-fork slug="whoisjorge/not-cat-gifs" show-count></gh-btns-fork>
        <gh-btns-follow user="whoisjorge" show-count></gh-btns-follow>
      </footer>

      <br>
      <a href="http://js.org" target="_blank" title="JS.ORG | JavaScript Community">
      <img src="https://logo.js.org/dark_horz.png" width="50" alt="JS.ORG Logo"/></a>
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
    this.random()
    this.fetchData()
  },

  methods: {
    random () {
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
      this.random()
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
  margin: 20px auto

header
  h1
    letter-spacing: .01em
    font-size: 3.4vmax
    font-weight: lighter
    a
      font-weight: bold

footer
  display: flex
  justify-content: center
  margin: 0


main
  max-width: 600px
  margin: 0 auto
  img
    max-height: 400px
    min-width: 600px
    @media (max-width: 40.0rem)
      min-width: 100%

// aylmao?
@media (max-width: 24.0rem)
  footer
    zoom: .7
</style>
