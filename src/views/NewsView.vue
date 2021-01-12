<template>
  <div>
    <div v-for="(user, index) in news" :key="index">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      news: state => state.news
    })
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  }
};
</script>

<style></style>
