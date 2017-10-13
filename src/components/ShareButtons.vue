<!-- https://github.com/nicolasbeauvais/vue-social-sharing -->
<template>
  <social-sharing url="https://cats.js.org"
                  title="🙀 I found multiple Cat GIFs on "
                  description=""
                  quote="The First Web Application Without Cat GIFs 🙀"
                  hashtags="cat,cats,gifs,catlove"
                  twitter-user=""
                  inline-template>
    <footer>
        <network network="facebook">
          <button class="fb button">Share on facebook</button>
        </network>
        <network network="twitter">
          <button class="tw button">Share on twitter</button>
        </network>
    </footer>
  </social-sharing>
</template>



<script>
import Vue from 'vue'
import SocialSharing from 'vue-social-sharing'
Vue.use(SocialSharing)

export default {
  name: 'ShareButtons',
  data: () => ({
    //
  })
}
</script>



<style lang="sass">
// Brand colors
$fb: #3b5998
$tw: #1dcaff

.button, button
    border-color: transparent
    font-weight: 300
    margin: 0 10px
    transition: background-color .3s, color .4s
    &:before
      content: ""
      display: inline-block
      background-repeat: no-repeat
      width: 12px
      height: 12px
      margin: -1px 10px

    &.fb
      color: $fb
      border-color: $fb
      background-color: transparent
      &:focus, &:hover
        color: #fff
        background-color: $fb
        &:before
          background-color: #fff
      &:before
        mask-image: url('../assets/facebook.svg')
        background-color: $fb

    &.tw
      color: $tw
      border-color: $tw
      background-color: transparent
      &:focus, &:hover
        color: #fff
        background-color: $tw
        border-color: $tw
        &:before
          background-color: #fff
      &:before
        mask-image: url(../assets/twitter.svg)
        background-color: $tw



// ... boom!
@media (max-width: 40.0rem)
  footer
    display: block
    button
      width: 280px
      margin-bottom: 10px!important
</style>
