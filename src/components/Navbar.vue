<template>
<nav class="navbar navbar-default navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand text-primary" to="/"><b><h2>Photo Share</h2></b></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul class="nav navbar-nav navbar-left padding">
          <li v-if="isVerefied" class="nav-item">
            <router-link class="nav-link p-2" to="/" aria-label="Home" data-toggle="tooltip" data-placement="bottom" title="Home"><i class="fa fa-home fa-lg text-info"></i></router-link>
          </li>
          <li v-if="isVerefied" class="nav-item ">
            <router-link class="nav-link p-2" to="/Notification" aria-label="Notification" data-toggle="tooltip" data-placement="bottom" title="Notification"><i class="fa fa-bell fa-lg text-info"></i></router-link>
          </li>
          <li v-if="isVerefied" lass="nav-item ">
            <router-link class="nav-link p-2" to="/Trends" aria-label="Trends" data-toggle="tooltip" data-placement="bottom" title="Trends"><i class="fa fa-fire fa-lg text-info"></i></router-link>
          </li>
          <li v-if="isVerefied" class="nav-item ">
            <router-link class="nav-link p-2" to="/Friends" aria-label="Friends" data-toggle="tooltip" data-placement="bottom" title="Friends"><i class="fa fa-user-friends fa-lg text-info"></i></router-link>
          </li>
          <li v-if="isVerefied" class="nav-item ">
            <router-link class="nav-link p-2" to="/Messages" aria-label="Messages" data-toggle="tooltip" data-placement="bottom" title="Messages"><i class="fa fa-comments fa-lg text-info"></i></router-link>
          </li>
          <li v-if="isVerefied" class="nav-item ">
            <router-link class="nav-link p-2" to="/Account" aria-label="Account" data-toggle="tooltip" data-placement="bottom" title="Account"><i class="fa fa-user-alt fa-lg text-info"></i></router-link>
          </li>
            <div v-if="isVerefied" class="nav-item dropdown">
            <div class="container">
            <a id="navbarDropdown" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{isLogedIn}}<span class="caret"></span></a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <router-link class="dropdown-item" to="/Setting"><i class="fa fa-cog"></i> Setting</router-link>
                <router-link class="dropdown-item" to="/Stories"><i class="fa fa-plus"></i> Stories</router-link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" v-on:click="logout">Logout</a>
            </div>
            </div>
            </div>
          <li v-if="!isLogedIn" class="nav-item ">
            <router-link class="nav-link p-2" to="/Signin" aria-label="SIGNIN" data-toggle="tooltip" data-placement="bottom" title="SIGNIN">SIGNIN</router-link>
          </li>
          <li v-if="!isLogedIn" class="nav-item ">
            <router-link class="nav-link p-2" to="/Signup" aria-label="SIGNUP" data-toggle="tooltip" data-placement="bottom" title="SIGNUP">SIGNUP</router-link>
          </li>
          <li v-if="isLogedInNotVerefied" class="nav-item ">
            <button v-on:click="logout" class="nav-link p-2" aria-label="LOGOUT" data-toggle="tooltip" data-placement="bottom" title="LOGOUT">LOGOUT</button>
          </li>
        </ul>
      </div>
    </div>
</nav>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'navbar',
  data() {
    return {
      isLogedIn: false,
      isVerefied: false,
      isLogedInNotVerefied: false,
      currentUser: false
    }
  },
  created() {
    if(firebase.auth().currentUser) {
      this.isLogedIn = true
      this.isLogedInNotVerefied =true
      this.currentUser = firebase.auth().currentUser.email
      firebase.auth().onAuthStateChanged(user => {
        if(!user.emailVerified) {
          this.isVerefied = false
        }
        else {
          this.isVerefied = true
          this.isLogedInNotVerefied = false
        }
      })
      
    }
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(() => {
        alert('Signout Successful')
        this.$router.go({path: this.$router.path})
      }).catch(function(error) {
        alert(error.message)
      })
    }
  }
}
</script>
