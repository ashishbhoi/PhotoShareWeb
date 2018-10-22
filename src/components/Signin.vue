<template>
<div class="container">
<br>
<div class="container-login">
<div class="row justify-content-center">
<div class="col-md-8">
<div class="card">
<div class="card-header">Login</div>
<div class="card-body">
    <form>
    <div class="form-group row">
    <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
    <div class="col-md-6">
    <input id="email" type="email" class="form-control" name="email" value="" required autofocus v-model="email">
    </div>
    </div>
    <div class="form-group row">
    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
    <div class="col-md-6">
    <input id="password" type="password" class="form-control" name="password" required v-model="password">
    </div>
    </div>
    <div class="form-group row">
    <div class="col-md-6 offset-md-4">
    </div>
    </div>
    <div class="form-group row mb-0">
    <div class="col-md-8 offset-md-4">
    <button type="submit" class="btn btn-primary" v-on:click="Signin">Login</button>
    <router-link class="btn btn-link" to="/ForgotPassword">Forgot Your Password?</router-link>
    </div>
    <br>
    <br>
    <div class="col-md-8 offset-md-4 text-md-right fa-2x text-info">
        <a v-on:click="GoogleLogin"> <i class="fab fa-google"></i></a> 
        {{"       "}}
        <a  v-on:click="FacebookLogin"> <i class="fab fa-facebook"></i></a>
    </div>
    </div>
    </form>
</div>
</div>
</div>
</div>
</div>
</div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
var providerFacebook = new firebase.auth.FacebookAuthProvider();
export default {
    name: 'signin',
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        Signin : function(e) {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                user => {
                    alert('You Are logged in')
                    this.$router.go({path: this.$router.path})
                },
                err => {
                    alert(err.message)
                }
            )
            e.preventDefault()
        },
        GoogleLogin: function(e) {
            firebase.auth().signInWithPopup(provider).then(
                user => {
                    alert('You Are logged in')
                    this.$router.go({path: this.$router.path})
                },
                err => {
                    alert(err.message)
                }
            )
            e.preventDefault()
        },
        FacebookLogin: function(e) {
            firebase.auth().signInWithPopup(providerFacebook).then(
                user => {
                    alert('You Are logged in')
                    this.$router.go({path: this.$router.path})
                },
                err => {
                    alert(err.message)
                }
            )
            e.preventDefault()
        }
    }
    
}
</script>