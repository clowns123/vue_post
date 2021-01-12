<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, index) in news" :key="index">
        <a :href="item.url">{{ item.title }}</a>
        <small
          >{{ item.time_ago }} by
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      news: state => state.news,
    }),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
</style>
