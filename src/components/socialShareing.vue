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
                        <button class="fb button button-outline">Share on facebook</button>
                      </network>
                      <network network="twitter">
                        <button class="tw button button-outline">Share on twitters</button>
                      </network>
                  </footer>
  </social-sharing>
</template>


<script>
import Vue from 'vue'
import SocialSharing from 'vue-social-sharing'
Vue.use(SocialSharing)

export default {
  name: 'socialShareing',
  data: () => ({
    //
  })
}
</script>


<style lang="sass">

// Brand colors
$fb: #3b5998
$tw: #1dcaff

button
  margin: 0 10px
  transition: background-color .2s, color .2s
  &:before
    content: ""
    display: inline-block
    background-repeat: no-repeat
    width: 12px
    height: 12px
    margin: -1px 10px

  // Share on facebook
  &.fb
    color: $fb!important
    border-color: $fb
    &:hover
      color: #fff!important
      background-color: $fb!important
      &:before
        background-color: #fff
    &:before
      mask-image: url('../assets/facebook.svg')
      background-color: $fb

  // Share on twitter
  &.tw
    color: $tw!important
    border-color: $tw
    &:hover
      color: #fff!important
      background-color: $tw!important
      border-color: $tw!important
      &:before
        background-color: #fff
    &:before
      mask-image: url(../assets/twitter.svg)
      background-color: $tw
</style>
