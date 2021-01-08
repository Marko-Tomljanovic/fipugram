<template>
<div class="app">
  <b-navbar toggleable="lg">
    <b-navbar-brand to="/" style=" font-family:Lucida Handwriting;">Fipugram</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/login">Login</b-nav-item>
        <b-nav-item to="/singup">SignUp</b-nav-item>
      </b-navbar-nav>
       <b-nav-form class="ml-auto">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        </b-nav-form>
    </b-collapse>
  </b-navbar>
    <router-view/>
  </div>
</template>


<style>
.app{
  text-align: center;
}
</style>

