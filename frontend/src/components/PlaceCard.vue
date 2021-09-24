<template>
  <v-card
      class="mx-auto"
      max-width="344"
  >
    <v-img
        :src="service.url"
        height="200px"
    ></v-img>

    <v-card-title>
      {{service.name}}
    </v-card-title>

    <v-card-actions>
      <v-btn
          color="orange lighten-2"
          text
      >
        Ver más info
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
          icon
          @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{service.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: false
    }
  },
  name: "PlaceCard"
}
</script>

<style scoped>

</style>