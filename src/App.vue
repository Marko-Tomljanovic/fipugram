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
        <b-nav-item v-if="!store.currentUser" to="/login">Login</b-nav-item>
        <b-nav-item v-if="!store.currentUser" to="/singup">SignUp</b-nav-item>
         <b-nav-item v-if="store.currentUser" href="#" @click.prevent="logout()">LogOut</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar><br>
    <router-view/>
  </div>
</template>


<script>
import store from "@/store";
import { firebase } from '@/firebase';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
const currentRoute = router.currentRoute;

  if (user) {
    // User is signed in.
    console.log('user.email');
    store.currentUser = user.email;

     if(!currentRoute.meta.needsUser){
      router.push({ name: 'Home' });
    }
  }else{
    console.log('No User');
    store.currentUser = null;

    if(currentRoute.meta.needsUser){
      router.push({ name: 'Login' });
    }
  }
});

export default {
  name: 'app',
  data(){
    return{
      store,
    }
  },
  methods:{
    logout(){
      firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.push({ name: 'Login' });
      });
    }
  }
}
</script>



<style>
.app{
  text-align: center;
}
</style>

