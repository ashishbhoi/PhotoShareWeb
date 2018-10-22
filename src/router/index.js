import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Account from '@/components/Account'
import Friends from '@/components/Friends'
import Messages from '@/components/Messages'
import Notification from '@/components/Notification'
import Settings from '@/components/Settings'
import Signin from '@/components/Signin'
import Stories from '@/components/Stories'
import Trends from '@/components/Trends'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard, 
    },
    {
      path: '/Account',
      name: 'account',
      component: Account, 
    },
    {
      path: '/Friends',
      name: 'friends',
      component: Friends, 
    },
    {
      path: '/Messages',
      name: 'messages',
      component: Messages, 
    },
    {
      path: '/Notification',
      name: 'notification',
      component: Notification, 
    },
    {
      path: '/Settings',
      name: 'settings',
      component: Settings, 
    },
    {
      path: '/Signin',
      name: 'signin',
      component: Signin, 
    },
    {
      path: '/Signup',
      name: 'dashboard',
      component: Dashboard, 
    },
    {
      path: '/Stories',
      name: 'stories',
      component: Stories, 
    },
    {
      path: '/Trends',
      name: 'trends',
      component: Trends, 
    },
    
  ]
})

export default router