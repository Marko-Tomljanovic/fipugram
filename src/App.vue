<template>
<div class="app">
  <b-navbar toggleable="lg">
    <b-navbar-brand to="/" style=" font-family:Lucida Handwriting;">Fipugram</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
         <b-nav-form class="mx-auto">
          <b-form-input 
          v-model="store.searchTearm" 
          size="sm" 
          placeholder="Pretraga"
          ></b-form-input>
        </b-nav-form>
       <b-navbar-nav style="font-weight: 650;">
        <b-nav-item to="/login">Login</b-nav-item>
        <b-nav-item to="/singup">SignUp</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar><br>
    <router-view/>
  </div>
</template>


<script>
import store from "@/store"
export default {
  name: 'app',
  data(){
    return{
      store,
    }
  }
}
</script>



<style>
.app{
  text-align: center;
}
</style>

