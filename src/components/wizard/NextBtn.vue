<template>
  <v-row justify="end" no-gutters class="next-wrapper">
    <v-btn class="next-btn" text ripple rounded @click="goToNextPage">
      <slot />
      <v-icon class="icon">mdi-arrow-right</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'NextBtn',
  props: {
    routeName: String,
  },
  methods: {
    goToNextPage() {
      this.$router.push({
        name: this.routeName,
        params: { campaignId: this.$router.currentRoute.params.campaignId },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

.next-wrapper {
  padding: 0 10%;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
