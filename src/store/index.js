import Vue from "vue";
import Vuex from "vuex";
import common from "./common";
import shop from "./shop";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    shop,
  },
});
