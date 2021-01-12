<template>
  <div>
    <div v-for="(item, index) in fetchedAsk" :key="index">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      fetchedAsk: "fetchedAsk"
    })
  },
  async created() {
    this.$store.dispatch("FETCH_ASK");
  }
};
</script>

<style></style>
