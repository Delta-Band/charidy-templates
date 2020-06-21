<template>
  <div class="content">
    <div class="vertical-spacer-top" :class="{
        'portrait': wizardPortrait,
    }" />
    <Steps />
    <div class="vertical-spacer" :class="{
        'portrait': wizardPortrait,
    }" />
    <CoverMedia />
    <div class="vertical-spacer" />
    <!-- <div class="divider" />
    <div class="vertical-spacer" />-->
    <CampaignTitle />
    <div
      class="advanced-container"
      v-bind:class="wizardCover.advanced ? 'open' : 'closed'"
      v-bind:style="{
        'height': `${wizardCover.advanced > 0 ? advacedSectionHeight : 0}px`,
      }"
    >
      <div id="advanced-content">
        <div class="vertical-spacer" />
        <Countdown />
      </div>
    </div>
    <div class="vertical-spacer" />
    <v-btn class="advanced-btn" text ripple @click="toggleAdvancedMode">
      <div class="btn-content">
        Advanced Options
        <v-icon class="icon" v-bind:class="wizardCover.advanced ? 'open' : 'closed'">mdi-arrow-down</v-icon>
      </div>
    </v-btn>
  </div>
</template>

<script>
import Steps from "./steps/Steps.vue";
import CoverMedia from "./CoverMedia.vue";
import CampaignTitle from "./CampaignTitle.vue";
import Countdown from "./Countdown.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Content",
  components: {
    Steps,
    CoverMedia,
    CampaignTitle,
    Countdown
  },
  data: () => ({
    advacedSectionHeight: 0
  }),
  computed: {
    ...mapGetters(["wizardPortrait", "wizardCover"])
  },
  created() {
    window.addEventListener("resize", this.onRisize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onRisize);
  },
  mounted() {
    this.onRisize();
  },
  methods: {
    ...mapActions(["wizardUpdatePortrait", "wizardUpdateCover"]),
    toggleAdvancedMode() {
      this.wizardUpdateCover({ advanced: !this.wizardCover.advanced });
    },
    onRisize() {
      const $advancedContent = document.getElementById("advanced-content");
      this.advacedSectionHeight = $advancedContent.clientHeight + 1;
      // this.wizardUpdatePortrait(this.$el.clientWidth);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./shared-styles/index";

.content {
  width: 100%;
  overflow: auto;
  flex-grow: 1;
  box-sizing: border-box;

  .advanced-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 20px 20px;
    width: 100%;
    height: auto;
    margin-top: -30px;

    .btn-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .icon {
      transition: 0.25s $ease;
      margin-top: 10px;
      background-color: $yellow;
      color: white;
      border-radius: 40px;
      padding: 7px;

      &.open {
        transform: rotate(180deg);
      }
    }
  }
}

.vertical-spacer {
  height: 15%;
  min-height: 106px;
  max-height: 150px;

  &.portrait {
    height: calc(15% - 30px);
  }
}

.vertical-spacer-top {
  height: 10%;
  max-height: 100px;
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
    transition: 0.5s $ease, opacity .5s $ease .25s;
    opacity: 1;
  }
}
</style>