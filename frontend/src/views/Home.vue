<template>
  <v-container class="home">
    <v-container v-if="user">
        <v-card-title>Bienvenido {{user.name}}</v-card-title>
        <v-container>
          <p>¿Desea agregar un nuevo sitio?</p>
          <v-form>
            <v-text-field label="Nombre del sitio" prepend-icon="mdi-wallet-travel" v-model="place.name"
                    :rules="rules"
            />
            <v-textarea
                label="Description"
                prepend-icon="mdi-comment-text-multiple-outline"
                v-model="place.description"
                rows="3"
                required
                :rules="rules"
            />
            <v-text-field
                label="Imagen url"
                prepend-icon="mdi-image"
                v-model="place.url"
            ></v-text-field>
            <v-btn color="secondary" @click="saveEvent">Guardar</v-btn>
          </v-form>
        </v-container>

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
    </v-container>
    <v-card width="400" class="mx-auto mt-5" v-else>
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Correo" prepend-icon="mdi-account-circle" v-model="email"/>
          <v-text-field
              :type="showPassword ? 'text' : 'password'"
              label="Contraseña"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info" class="mx-auto" @click="getUser({email, password})">Ingresar</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import Client from "./../utils/Client";
import {mapActions, mapState} from 'vuex';
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      showPassword: false,
      email: '',
      password: '',
      place: {
        name: '',
        description: '',
        url: ''
      },
      snackbar: false,
      snackbarText: '',
      rules: [
        value => !!value || 'Required.',
      ],
    }
  },
  methods: {
    ...mapActions(['getUser']),
    saveEvent() {
      Client.saveOne('service', this.place).then(() => {
        this.snackbar = true;
        this.snackbarText = `Sitio ${this.place.name} guardado con éxito`;
        this.place.name = '';
        this.place.description = '';
        this.place.url = '';
      }).catch(e => {
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
