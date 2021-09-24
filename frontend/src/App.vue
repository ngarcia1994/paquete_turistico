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
    if (localStorage.getItem('user')) {
      this.$store.commit('setUser', JSON.parse(localStorage.getItem('user')));
    }
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

