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
    }
  },
  actions: {
    async getUser ({commit}, payload) {
      const response = await Client.getUser(payload.email, payload.password);

      commit('setUser', response.data);
    }
  },
  modules: {
  }
}
