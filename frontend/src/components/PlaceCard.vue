<template>
  <v-card
      class="mx-auto"
      max-width="344"
  >
    <div style="position: relative">
      <v-dialog v-if="user" v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="accent"
                style="position: absolute; z-index: 2; right: 5px; top: 5px; background-color: rgba(255,255,255,0.2)"
                icon
                v-bind="attrs"
                v-on="on"
            ><v-icon>mdi-pencil</v-icon></v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Editar lugar</span>
          </v-card-title>
          <v-card-text>
            <v-container>
                <v-form>
                  <v-text-field label="Nombre del sitio" prepend-icon="mdi-wallet-travel" v-model="service.name"
                                :rules="rules"
                  />
                  <v-textarea
                      label="Description"
                      prepend-icon="mdi-comment-text-multiple-outline"
                      v-model="service.description"
                      rows="3"
                      required
                      :rules="rules"
                  />
                  <v-text-field
                      label="Imagen url"
                      prepend-icon="mdi-image"
                      v-model="service.url"
                  ></v-text-field>
                </v-form>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" @click="editPlace">Guardar</v-btn>
            <v-btn color="error" @click="dialog = false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-img
          :src="service.url"
          height="200px"
      ></v-img>
    </div>

    <v-card-title>
      {{service.name}}
    </v-card-title>

    <v-card-actions>
      <v-btn
          color="orange lighten-2"
          text
          @click="show = !show"
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

    <v-snackbar
        v-model="snackbar"
    >
      {{snackbarText}}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import {mapState} from "vuex";
import Client from "./../utils/Client"

export default {
  name: "PlaceCard",
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: false,
      dialog: false,
      // place: {
      //   name: '',
      //   description: '',
      //   url: '',
      //   _id: ''
      // },
      snackbar: false,
      snackbarText: '',
      rules: [
        value => !!value || 'Required.',
      ]
    }
  },
  methods: {
    editPlace() {
      let body = {
        token: this.$store.state.user.user.token,
        ...this.service
      };

      Client.editOne('service', body)
      .then(() => {
        this.snackbar = true;
        this.snackbarText = `Sitio ${this.service.name} guardado con éxito`;
        this.dialog = false;
      }).catch(() => {
        this.snackbar = true;
        this.snackbarText = 'Ha ocurrido un error verifica si la información es correcta';
        console.log(e);
      });
    }
  },
  computed: mapState({
    'user': state => state.user.user
  })
}
</script>

<style scoped>

</style>