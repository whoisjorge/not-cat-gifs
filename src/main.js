import 'es6-promise/auto'

import Vue from 'vue'
import router from './router'

import App from './App'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  ...App
})
.$mount('#app')

/* eslint-disable no-console, no-useless-escape */
console.log('|          CATS.JS.ORG             |')
console.log('|----------------------------------|')
