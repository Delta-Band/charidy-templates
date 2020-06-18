<template>
  <div class="content">
    <div class="vertical-spacer-top" />
    <Steps />
    <div class="vertical-spacer" />
    <CoverMedia />
    <div class="vertical-spacer" />
    <!-- <div class="divider" />
    <div class="vertical-spacer" />-->
    <CampaignTitle />
    <div class="vertical-spacer" />
    <!-- <div class="divider" />
    <div class="vertical-spacer" />-->
    <div class="footer">
      <v-btn class="save-btn" text ripple rounded>
        SAVE
        <v-icon class="icon-right">mdi-arrow-right</v-icon>
      </v-btn>
    </div>
    <div class="vertical-spacer" />
  </div>
</template>

<script>
import Steps from "./steps/Steps.vue";
import CoverMedia from "./CoverMedia.vue";
import CampaignTitle from "./CampaignTitle.vue";

export default {
  name: "Content",
  components: {
    Steps,
    CoverMedia,
    CampaignTitle
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

  .save-btn {
    height: 40px;
    padding: 0 4% !important;
    min-width: 150px;
    text-transform: none;
    font-family: inherit;
    letter-spacing: unset;
    font-size: 16px;
    background-color: black;
    color: white;
    transition: 0.5s $ease;

    &:hover {
      .icon-right {
        transform: translateX(30px);
      }
    }

    .icon-right {
      transform: translateX(20px);
      margin-left: -10px;
    }
  }
}

.vertical-spacer {
  height: 15%;
  min-height: 106px;
  max-height: 150px;
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

.footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10%;
  width: 100%;
}
</style>