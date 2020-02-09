import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {},
  actions: {
    async getMovies(context, data) {
      let response = await axios.post("/api/movies", data);
      return response;
    }
  },
  modules: {}
});
