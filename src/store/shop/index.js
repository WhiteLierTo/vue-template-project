const state = {
  name: "李先生",
  numList: [1, 2, 3, 4, 5],
};

const getters = {
  getNumList: ({ numList }) => numList.map((item) => item * 2),
};

const mutations = {
  asyncChangeName(state, name) {
    state.name = name;
  },
};

const actions = {
  asyncUpdateName({ commit, rootState }, payload) {
    console.log(rootState.common.age);
    commit("asyncChangeName", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
