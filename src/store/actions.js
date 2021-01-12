import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index";

export default {
  async FETCH_NEWS(context) {
    const data = await fetchNewsList();
    context.commit("SET_NEWS", data);
  },
  async FETCH_JOBS(context) {
    const data = await fetchJobsList();
    context.commit("SET_JOBS", data);
  },
  async FETCH_ASK(context) {
    const data = await fetchAskList();
    context.commit("SET_ASK", data);
  },
  async FETCH_USER({ commit }, name) {
    const data = await fetchUserInfo(name);
    commit("SET_USER", data);
  },
  async FETCH_ITEM({ commit }, id) {
    const data = await fetchItemInfo(id);
    commit("SET_ITEM", data);
  },
};
