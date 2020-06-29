<template>
  <div class="cover-page">
    <CoverMedia />
    <div class="vertical-spacer" />
    <CampaignTitle />
    <BottomNav
      :routeName="{
        next: 'wizard-goal-and-time',
      }"
    />
    <Collapsable
      :isOpen="advanced"
      @toggle="toggleAdvancedMode"
      container="#wizard-content"
    >
      <template v-slot:title>Advanced Options</template>
      <template v-slot:content>
        <Countdown />
      </template>
    </Collapsable>
  </div>
</template>

<script>
import CoverMedia from './CoverMedia.vue';
import CampaignTitle from './CampaignTitle.vue';
import Countdown from './Countdown.vue';
import Collapsable from '@/shared-components/Collapsable.vue';
import BottomNav from '../BottomNav';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cover',
  components: {
    CoverMedia,
    CampaignTitle,
    Countdown,
    Collapsable,
    BottomNav,
  },
  data: () => ({
    advacedSectionHeight: 0,
    advanced: false,
  }),
  computed: {
    ...mapGetters(['wizardPortrait', 'campaignDetails']),
  },
  methods: {
    ...mapActions(['wizardUpdatePortrait', 'wizardUpdateCover']),
    toggleAdvancedMode() {
      this.advanced = !this.advanced;
    },
    details() {
      return this.campaignDetails(this.$router.currentRoute.params.campaignId);
    },
    goToNextPage() {
      this.$router.push({
        name: 'wizard-goal-and-time',
        params: { campaignId: this.$router.currentRoute.params.campaignId },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

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
}
</style>
