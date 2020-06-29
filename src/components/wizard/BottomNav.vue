<template>
  <div class="d-flex next-wrapper" :class="{'justify-space-between': routeName.prev, 'justify-end': !routeName.prev}">
    <v-btn
      v-if="routeName.prev"
      class="prev-btn"
      text
      ripple
      rounded
      @click="goToPrevPage"
    >
      <v-icon class="icon">mdi-arrow-left</v-icon>
      <div class="txt">Prev</div>
    </v-btn>
    <v-btn class="next-btn" text ripple rounded @click="goToNextPage">
      <div class="txt">Next</div>
      <v-icon class="icon">mdi-arrow-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
  props: {
    routeName: {
      next: String,
      prev: String,
    },
  },
  methods: {
    goToNextPage() {
      if (this.routeName.next === 'my-campaigns') {
        this.$router.push({
          name: this.routeName.next,
        });
      } else {
        this.$router.push({
          name: this.routeName.next,
          params: { campaignId: this.$router.currentRoute.params.campaignId },
        });
      }
    },
    goToPrevPage() {
      this.$router.push({
        name: this.routeName.prev,
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

  .txt {
    margin: 0 10px;
  }
}
</style>
