import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import data from "../../info.js";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    data,
  },
  plugins: [createPersistedState()],
  modules: {},
});

export default store;
