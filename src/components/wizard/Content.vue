<template>
  <div class="content">
    <div class="vertical-spacer-top" :class="{
        'portrait': wizardPortrait,
    }" />
    <Steps />
    <div class="vertical-spacer" :class="{
        'portrait': wizardPortrait,
    }"  />
    <CoverMedia />
    <div class="vertical-spacer" />
    <!-- <div class="divider" />
    <div class="vertical-spacer" />-->
    <CampaignTitle />
    <div class="vertical-spacer" />
  </div>
</template>

<script>
import Steps from "./steps/Steps.vue";
import CoverMedia from "./CoverMedia.vue";
import CampaignTitle from "./CampaignTitle.vue";
import { mapGetters } from "vuex";

export default {
  name: "Content",
  components: {
    Steps,
    CoverMedia,
    CampaignTitle
  },
  computed: {
    ...mapGetters(["wizardPortrait"])
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

// .footer {
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   padding: 0 20px;
//   width: 100%;
// }
</style>