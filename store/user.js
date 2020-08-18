export const state = () => ({
  getUser: {}
});

export const mutations = {
  postUserData(state, data) {
    localStorage.setItem('user', JSON.stringify(data))
  },
  getUserData(state, userData) {
    state.getUser = userData
  },
  clearUserData(state) {
    localStorage.clear();
    state.getUser = {};
  }
};

export const actions = {
  postUserData({ commit }, data) {
    commit("postUserData", data)
  },
  async getUserData({ commit }) {
    const userData = await JSON.parse(localStorage.getItem('user'))
    commit("getUserData", userData)
  },
  clearUserData({ commit }) {
    commit("clearUserData")
  }
};

export const getters = {
  user: s => s.getUser
};