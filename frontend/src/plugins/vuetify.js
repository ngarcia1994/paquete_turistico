import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#6c5a20',
        secondary: '#367721'
      },
      dark: {
        primary: '#42350f',
        secondary: '#2f4b28'
      },
    }
  },

});
