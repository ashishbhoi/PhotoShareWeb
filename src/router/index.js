import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Account from '@/components/Account'
import Friends from '@/components/Friends'
import Messages from '@/components/Messages'
import Notification from '@/components/Notification'
import Settings from '@/components/Settings'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Stories from '@/components/Stories'
import Trends from '@/components/Trends'
import ForgotPassword from '@/components/ForgotPassword'
import Verefy from '@/components/Verefy'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard, 
      meta: {
        requiresAuth: true,
        requiresConfirm: true
      }
    },
    {
      path: '/Account',
      name: 'account',
      component: Account, 
      meta: {
        requiresAuth: true,
        requiresConfirm: true
      }
    },
    {
      path: '/Friends',
      name: 'friends',
      component: Friends, 
      meta: {
        requiresAuth: true,
        requiresConfirm: true
      }
    },
    {
      path: '/Messages',
      name: 'messages',
      component: Messages, 
      meta: {
        requiresAuth: true,
        requiresConfirm: true
      }
    },
    {
      path: '/Notification',
      name: 'notification',
      component: Notification, 
      meta: {
        requiresAuth: true,
        requiresConfirm: true
      }
    },
    {
      path: '/Settings',
      name: 'settings',
      component: Settings, 
      meta: {
        requiresAuth: true,
        requiresConfirm: true
      }
    },
    {
      path: '/Signin',
      name: 'signin',
      component: Signin,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/Signup',
      name: 'signup',
      component: Signup,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/Stories',
      name: 'stories',
      component: Stories, 
      meta: {
        requiresAuth: true,
        requiresConfirm: true
      }
    },
    {
      path: '/Trends',
      name: 'trends',
      component: Trends, 
      meta: {
        requiresAuth: true,
        requiresConfirm: true
      }
    },
    {
      path: '/ForgotPassword',
      name: 'forgot-password',
      component: ForgotPassword,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/Verefy',
      name: 'verefy',
      component: Verefy,
      meta: {
        requiresAuth: true,
        realtimeVerefication: true
      }
    },
  ]
})


// Nav Guard
router.beforeEach((to, from, next) => {
  //Check For RequiresAuth Guard
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // Chaeck if Not Logged In
    if(!firebase.auth().currentUser) {
      // Go to Login page
      next({
        path: '/Signin',
        query: {
          redirect: to.path
        }
      })
    }
    else {
      next()
    }
  }
  if(to.matched.some(record => record.meta.requiresGuest)) {
    // Chaeck if Logged In
    if(firebase.auth().currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.path
        }
      })
    }
    else{
      //Procced to route
      next()
    }
  }
  if(to.matched.some(record => record.meta.requiresConfirm)) {
    if(firebase.auth().currentUser){
      firebase.auth().onAuthStateChanged(user => {
        if(!user.emailVerified) {
          firebase.auth().currentUser.sendEmailVerification()
          next({
            path: '/Verefy',
            query: {
              redirect: to.path
            }
          })
        }
        else {
          next()
        }
      })
    }
  }
  if(to.matched.some(record => record.meta.realtimeVerefication)) {
    firebase.auth().onAuthStateChanged(user => {
      if(!user.emailVerified) {
        next({
          path: '/Verefy',
          query: {
            redirect: to.path
          }
        })
      }
      else {
        next({
          path: '/',
          query: {
            redirect: to.fullPath
          }
        })
      }
    })
  }
  else {
    //Procced to route
    next()
  }
})

export default router