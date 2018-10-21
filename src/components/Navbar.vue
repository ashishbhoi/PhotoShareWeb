<template>
<nav class="navbar navbar-default navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Photo Share</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul class="nav navbar-nav navbar-left padding">
          <li class="nav-item">
            <router-link class="nav-link p-2" to="/" aria-label="Home" data-toggle="tooltip" data-placement="bottom" title="Home"><i class="fa fa-home fa-lg"></i></router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link p-2" to="/Notification" aria-label="Notification" data-toggle="tooltip" data-placement="bottom" title="Notification"><i class="fa fa-bell fa-lg"></i></router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link p-2" to="/Trends" aria-label="Trends" data-toggle="tooltip" data-placement="bottom" title="Trends"><i class="fa fa-fire fa-lg"></i></router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link p-2" to="/Friends" aria-label="Friends" data-toggle="tooltip" data-placement="bottom" title="Friends"><i class="fa fa-user-friends fa-lg"></i></router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link p-2" to="/Messages" aria-label="Messages" data-toggle="tooltip" data-placement="bottom" title="Messages"><i class="fa fa-comments fa-lg"></i></router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link p-2" to="/Account" aria-label="Account" data-toggle="tooltip" data-placement="bottom" title="Account"><i class="fa fa-user-alt fa-lg"></i></router-link>
          </li>
            <div class="nav-item dropdown">
            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>ASHISH KUMAR BHOI <span class="caret"></span></a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Setting</a>
                <a class="dropdown-item" href="#">Add Stories</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Logout</a>
            </div>
            </div>
        </ul>
      </div>
    </div>
</nav>
</template>
