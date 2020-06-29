<template>
  <div class="top-nav">
    <section class="left">
      <v-btn class="exit btn" text ripple rounded @click="exitWizard">
        <v-icon class="icon" :class="{ 'center-me': wizardPortrait }"
          >mdi-view-grid</v-icon
        >
        <span v-if="!wizardPortrait">My Campaigns</span>
      </v-btn>
    </section>
    <section class="center">
      <h3>{{ details ? details.name : 'Campaign not found!' }}</h3>
    </section>
    <section class="right">
      <v-btn class="preview btn" text ripple rounded>
        <v-icon class="icon" :class="{ 'center-me': wizardPortrait }"
          >mdi-eye-outline</v-icon
        >
        <span v-if="!wizardPortrait">Preview</span>
      </v-btn>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TopNav',
  methods: {
    exitWizard() {
      this.$router.push({ name: 'my-campaigns' });
    },
  },
  computed: {
    ...mapGetters(['wizardPortrait', 'campaignDetails']),
    details() {
      return this.campaignDetails(this.$router.currentRoute.params.campaignId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

.top-nav {
  @extend %app-bar;

  .btn {
    padding: 0 20px;
    min-width: 150px;
    text-transform: none;
    font-family: inherit;
    letter-spacing: unset;
    font-size: 16px;
    transition: 0.5s $ease;

    .icon {
      margin-right: 10px;
      font-size: 22px;
      transform: translateY(-0.5px);

      &.center-me {
        margin-right: 0;
      }
    }

    &.save {
      background-color: black;
      color: white;
      padding: 0 40px;
    }
  }

  .right {
    .btn {
      margin-left: 20px;
    }
  }
}

section {
  display: flex;
}
// button {
//   @extend .button;
//   text-transform: uppercase;
// }
</style>
