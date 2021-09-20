<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form ref="signUpForm" v-model="formValidity">
          <v-text-field label="Email" type="email" v-model="email" :rules="emailRules" required></v-text-field>
          <v-autocomplete label="¿Cuál vas a usar?" :items="browser"></v-autocomplete>
          <v-file-input label="Agregar imagen"></v-file-input>
          <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="birthday"
              persistent
              width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  label="Cumpleaños"
                  prepend-icon="mdi-calendar"
                  v-model="birthday"
                  v-bind="attrs"
                  v-on="on"
                  readonly/>
            </template>
            <v-date-picker
                v-model="birthday"
                scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                  text
                  color="primary"
                  @click="modal = false"
              >
                Cancel
              </v-btn>
              <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(birthday)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
          <v-checkbox label="Aceptar terminos"></v-checkbox>
          <v-switch label="Aceptar terminos" :rules="agreeToTermsRules" required></v-switch>

          <v-btn
              type="submit"
              color="primary"
              class="mr-4"
              :disabled="!formValidity"
          >Submit</v-btn>
          <v-btn class="mr-4" color="success" @click="validateForm">Validate Form</v-btn>
          <v-btn color="warning" @click="resetValidation" class="mr-4">Reset Validation</v-btn>
          <v-btn color="error" @click="resetForm">Reset</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: '',
      emailRules: [
          value => !!value || 'Email requerido',
          value => value.indexOf('@') !== 0 || 'Email should have a username',
          value => value.indexOf('@') || 'Email should have a username',
          value => (value.indexOf('.') - value.indexOf('@')) > 1 || 'Email no está correcto'
      ],
      agreeToTerms: false,
      agreeToTermsRules: [
          value => !!value || 'Debes aceptar todo'
      ],
      modal: false,
      birthday: '',
      browser: ['Chrome', 'Firefox', 'Safari'],
      formValidity: false
    }
  },
  methods: {
    resetForm() {
      this.$refs.signUpForm.reset();
    },
    resetValidation() {
      this.$refs.signUpForm.resetValidation();
    },
    validateForm() {
      this.$refs.signUpForm.validate();
    }
  }
}
</script>

<style scoped>

</style>