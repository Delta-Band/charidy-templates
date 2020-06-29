<template>
  <div class="customize">
    Customize
    <v-row justify="end" no-gutters class="leave-wrapper">
    <v-btn class="next-btn" text ripple rounded @click="exitWizard">
      My Campaigns
      <v-icon class="icon">mdi-arrow-right</v-icon>
    </v-btn>
  </v-row>
  </div>
</template>

<script>
export default {
  name: 'Customize',
  methods: {
    exitWizard() {
      this.$router.push({ name: 'my-campaignes'});
    }
  }
}
</script>

<style lang="scss" scoped>
  .leave-wrapper {
  padding: 0 10%;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>