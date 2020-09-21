const state = {
  age: 26,
  name: "吴昱帆",
};

const getters = {
  getNewName: (state) => `${state.name}喜欢用电音唱歌`,
};

const mutations = {
  changeName(state, name) {
    state.name = name;
  },
};

const actions = {
  updateName({ commit }, payload) {
    commit("changeName", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
