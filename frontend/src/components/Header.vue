<template>
  <div>
    <v-app-bar app>
        <v-toolbar-title>NodPapaya</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/">Inicio</v-btn>
        <v-btn text to="/recomendation">Recomendaciones</v-btn>
        <v-btn text to="/about">Sobre</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>