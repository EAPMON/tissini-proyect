import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customer: {},
    categories: {},
    isLogin: false,
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload;
    },
    setCustomer(state, payload) {
      state.customer = payload;
    },
    setIisLogin(state, payload) {
      state.isLogin = payload;
    },
  },
  getters: {
    getCustomer(state) {
      return state.customer;
    },
    getCustomerLogin(state) {
      return state.isLogin;
    },
  },
  actions: {},
  modules: {},
});
