<template>
  <div class="cover-page">
    <CoverMedia />
    <div class="vertical-spacer" />
    <CampaignTitle />
    <v-row justify="end" no-gutters class="next-wrapper">
      <v-btn class="next-btn" text ripple rounded>
        Next
        <v-icon class="icon">mdi-arrow-right</v-icon>
      </v-btn>
    </v-row>
    <AdvancedSection :isOpen="wizardCover.advanced" @toggle="toggleAdvancedMode">
      <template v-slot:1>
        <Countdown />
      </template>
    </AdvancedSection>
  </div>
</template>

<script>
import CoverMedia from "./CoverMedia.vue";
import CampaignTitle from "./CampaignTitle.vue";
import Countdown from "./Countdown.vue";
import AdvancedSection from "../shared-components/AdvancedSection.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cover",
  components: {
    CoverMedia,
    CampaignTitle,
    Countdown,
    AdvancedSection
  },
  data: () => ({
    advacedSectionHeight: 0
  }),
  computed: {
    ...mapGetters(["wizardPortrait", "wizardCover"])
  },
  methods: {
    ...mapActions(["wizardUpdatePortrait", "wizardUpdateCover"]),
    toggleAdvancedMode() {
      this.wizardUpdateCover({ advanced: !this.wizardCover.advanced });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../shared-styles/index";

.cover-page {
  .vertical-spacer {
    @extend .vertical-spacer;
  }

  .divider {
    width: 100%;
    height: 1px;
    background: black;
  }

  .advanced-container {
    height: 200px;
    overflow: hidden;
    will-change: height opacity;
    transition: 0.5s $ease;
    opacity: 0;

    &.open {
      transition: 0.5s $ease, opacity 0.5s $ease 0.25s;
      opacity: 1;
    }
  }

  .next-btn {
    padding: 2px 16px 0;
    .icon {
      margin-left: 10px;
      font-size: 20px;
    }
  }

  .next-wrapper {
    padding: 0 10%;
    margin-top: 50px;
    margin-bottom: 50px;
  }
}
</style>