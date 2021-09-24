<template>
  <div>
    <v-app-bar app color="secondary" text-color class="white--text">
        <v-toolbar-title>NodPapaya</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="white--text" text to="/" v-if="user">{{user.name}}</v-btn>
        <v-btn class="white--text" text to="/" v-else>Login</v-btn>
        <v-btn class="white--text" text to="/recomendation">Recomendaciones</v-btn>
        <v-btn class="white--text" text to="/about">Sobre</v-btn>
        <v-btn class="white--text" text to="/salir" v-if="user" @click="cleanUser">Salir</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  name: "Header",
  data() {
    return {

    }
  },
  methods:  mapActions(['cleanUser']),
  computed: mapState({
    'user': state => state.user.user
  })
}
</script>

<style scoped>

</style>