<!-- https://github.com/nicolasbeauvais/vue-social-sharing -->
<template>
  <social-sharing url="https://cats.js.org"
                  title="I found multiple cat GIFs on"
                  description="I found multiple cat GIFs on"
                  quote=""

                  hashtags="cat,cats,gifs,catlove"
                  twitter-user=""
                  inline-template>
                  <footer>
                      <network network="facebook">
                        <button class="fb button">Share on facebook</button>
                      </network>
                      <network network="twitter">
                        <button class="tw button">Share on twitters</button>
                      </network>
                  </footer>
  </social-sharing>
</template>


<script>
import Vue from 'vue'
import SocialSharing from 'vue-social-sharing'
Vue.use(SocialSharing)

export default {
  name: 'social-sharing',
  data: () => ({
    //
  })
}
</script>


<style lang="sass" scoped>

// Brand colors
$fb: #3b5998
$tw: #1dcaff

button
  margin: 0 10px
  background-color: transparent
  transition: background-color .3s, color .4s
  &:focus
    background-color: transparent
  &:before
    content: ""
    display: inline-block
    background-repeat: no-repeat
    width: 12px
    height: 12px
    margin: -1px 10px

  // Share on facebook
  &.fb
    color: $fb
    border-color: $fb
    &:hover
      color: #fff
      background-color: $fb
      &:before
        background-color: #fff
    &:before
      mask-image: url('../assets/facebook.svg')
      background-color: $fb

  // Share on twitter
  &.tw
    color: $tw
    border-color: $tw
    &:hover
      color: #fff
      background-color: $tw
      border-color: $tw
      &:before
        background-color: #fff
    &:before
      mask-image: url(../assets/twitter.svg)
      background-color: $tw


@media (max-width: 30.0rem)
  footer
    display: block
    button
      width: 280px
      margin-bottom: 10px!important
</style>
