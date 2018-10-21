import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard, 
    },
  ]
})

export default router