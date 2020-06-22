<template>
  <div class="cover-page">
    <CoverMedia />
    <div class="vertical-spacer" />
    <CampaignTitle />
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
  name: 'Cover',
  components: {
    CoverMedia,
    CampaignTitle,
    Countdown,
    AdvancedSection,
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
    },
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
}
</style>