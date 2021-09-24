<template>
  <v-footer
      color="primary"
      padless
  >
    <v-row
        justify="center"
        no-gutters
    >
      <v-btn
          v-for="link in links"
          :key="link.label"
          color="white"
          text
          class="my-2"
          :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>NodPapaya</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: [
      {
        label: 'conocer más',
        url: '/more'
      }
    ],
  })
}
</script>

<style scoped>

</style>