<template>
  <div>
    <h1>Componente padre</h1>
    <hijo></hijo>
    <h2>Otro texto</h2>
    <hijo></hijo>

    <hijo></hijo>
  </div>
</template>

<script>
import Hijo from './views/Hijo'

export default {
  name: 'App',
  components: {
    Hijo: Hijo
  },
  data() {  },
}
</script>
