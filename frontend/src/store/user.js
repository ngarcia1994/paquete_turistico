import Client from "./../utils/Client";

export default {
  state: {
    user: {},
  },
  getters: {

  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    cleanUserState(state) {
      state.user = null;
    }
  },
  actions: {
    async getUser ({commit}, payload) {
      const response = await Client.getUser(payload.email, payload.password);

      if (response && response.data && response.data.token) {
        commit('setUser', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
      } else {
        alert('Usuario no encontrado');
      }
    },
    cleanUser ({commit}) {
      commit('cleanUserState');
      localStorage.setItem('user', null);
    }
  },
  modules: {
  }
}
