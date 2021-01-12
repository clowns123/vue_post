<template>
  <div>
    <div v-for="(job, index) in jobs" :key="index">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  async created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style></style>
