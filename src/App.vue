<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  <button @click="add">Click aquí</button>
</template>

<script>
// import {retrieveAll, addDocument} from './utils/dbHandler';

export default {
    name: "App",
    data() {
      return {

      }
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
