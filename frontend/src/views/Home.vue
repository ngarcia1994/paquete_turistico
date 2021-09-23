<template>
  <v-container class="home">
    <v-container v-if="user.token != undefined">
        Bienvenido {{user.name}}
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
    {{ user }}
  </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex';
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      showPassword: false,
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['getUser'])
  },
  computed: mapState({
    'user': state => state.user.user
  })
}
</script>
