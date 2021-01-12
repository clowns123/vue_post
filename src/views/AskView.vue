<template>
  <div>
    <p v-for="(item, index) in fetchedAsk" :key="index">
      <a :href="item.url">{{ item.title }}</a>
      <small
        >{{ item.time_ago }},
        <router-link :to="`item/${item.id}`">{{
          item.user
        }}</router-link></small
      >
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      fetchedAsk: "fetchedAsk",
    }),
  },
  async created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
