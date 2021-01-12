import { fetchNewsList, fetchAskList, fetchJobsList } from "../api/index";

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
  }
};
