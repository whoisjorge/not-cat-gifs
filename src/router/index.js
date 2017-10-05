import Vue from 'vue'
import Router from 'vue-router'

// View Components
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
