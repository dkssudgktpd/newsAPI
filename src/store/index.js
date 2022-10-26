import { createStore } from "vuex";
import { fetchAllList } from "../api/api";
export default createStore({
  state: {
    newsList: [],
  },
  actions: {
    fetchNewList({ commit }) {
      fetchAllList()
        .then((res) => {
          commit("NEW_LIST_INIT", res.data);
        })
        .catch((err) => console.log(err));
    },
  },
  mutations: {
    NEW_LIST_INIT(state, payload) {
      state.newsList = payload;
    },
  },
  getters: {
    getNewList(state) {
      return state.newsList;
    },
  },
});
