<template>
  <app-header class="header"></app-header>
  <div class="u-flex">
    <app-navigation class="navigation"></app-navigation>
    <router-view class="content"/>
  </div>
  <app-footer class="footer"></app-footer>
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
  html{}
</style>

