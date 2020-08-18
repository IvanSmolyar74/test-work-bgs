export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null;
  }
};

export const actions = {
  Login({ commit }) {
    commit("setToken", 'trueToken')
  },
  Logout({ commit }) {
    commit("clearToken")
  }
};

export const getters = {
  hasToken: s => !!s.token
};

