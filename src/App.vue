<template>
  <app-header></app-header>
  <app-navigation></app-navigation>
  <button @click="add">Click aquí</button>
  <app-footer></app-footer>
</template>

<script>
// import {retrieveAll, addDocument} from './utils/dbHandler'
import AppFooter from './components/Footer';
import AppNavigation from './components/Navigation';
import AppHeader from "./components/Header";

export default {
    name: "App",
    data() {
      return {

      }
    },
    components: {
      AppHeader,
      AppNavigation,
      AppFooter
    },
    mounted() {
      // Obtiene todos los datos
      // retrieveAll('user').then(data => {
      //     console.log(data);
      // });

      // Agrega un documento con la información pasada
      // addDocument('user', {name: 'Test'})

    },
    methods: {

    }
  }
</script>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $primary-color;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

