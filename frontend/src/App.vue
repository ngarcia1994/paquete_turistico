<template>
  <v-app>
      <app-header></app-header>
      <v-main>
        <div>
          <app-navigation></app-navigation>
          <router-view/>
        </div>
      </v-main>
      <app-footer></app-footer>
  </v-app>
</template>

<script>
// import Client from './utils/Client'
import AppFooter from './components/Footer';
import AppNavigation from './components/Navigation';
import AppHeader from "./components/Header";

// import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: "App",
  data() {
    return {}
  },
  components: {
    AppHeader,
    AppNavigation,
    AppFooter
  },
  async mounted() {
    // Obtiene todos los datos pasandole el servicio
    // const services = await Client.retrieveAll('service');
    // console.log(services);

    // Agrega un documento con la información pasada
    // await Client.saveOne('service', {name: 'Test', description: 'Title'});
  },
  // methods: {
  //   ...mapMutations([
  //      "increment"
  //   ]),
  //   ...mapActions([
  //       'getUser'
  //   ]),
  //   otro () {
  //     this.$store.dispatch('incrementAsync');
  //   }
  // },
  // computed: mapState({
  //   count: state => state.user.count
  // })
}
</script>
<style></style>

