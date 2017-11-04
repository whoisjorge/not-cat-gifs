import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'

// View Components
import Index from '@/views/Index'

Vue.use(Router)

const router = new Router({
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

Vue.use(VueAnalytics, {
  id: 'UA-66654422-4',
  router
})

export default router
