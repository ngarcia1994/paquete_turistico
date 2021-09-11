<template>
  <div>Este es un header</div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>