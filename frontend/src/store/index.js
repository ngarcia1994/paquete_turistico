import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './user';

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    user: {
      namespaced: false,
      ...user,
    }
  }
})
