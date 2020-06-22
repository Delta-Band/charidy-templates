<template>
  <div class="campaign-title" :class="{
        'portrait': wizardPortrait,
        }">
    <section :class="{
        'top': wizardPortrait,
        'left': !wizardPortrait,
        }">
      <div class="label">
        Campaign Title
      </div>
      <p>Write a clear, brief title that helps people quickly understand the gist of your project.</p>
      <span class="tag required">Required</span>
    </section>
    <section
      :class="{
        'bottom': wizardPortrait,
        'right': !wizardPortrait,
        }"
    >
      <div class="input-title">Title</div>
      <v-text-field height="50" class="text-input" counter color="#000"></v-text-field>
      <WizardFieldTip class="text-input-tip">Title tip...</WizardFieldTip>
      <div class="input-title">Subtitle</div>
      <v-text-field height="50" class="text-input" counter color="#000"></v-text-field>
      <WizardFieldTip class="text-input-tip">Subtitle tip...</WizardFieldTip>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WizardFieldTip from "../shared-components/field-tip";

export default {
  name: "CampaignTitle",
  components: {
    WizardFieldTip
  },
  computed: {
    ...mapGetters(["wizardPortrait"])
  }
};
</script>

<style lang="scss" scoped>
@import "../shared-styles/index";

.campaign-title {
  width: 100%;
  display: flex;
  @extend .section;
}

.text-input {
  @extend .text-input;
  flex-grow: 1;
}

.text-input-tip {
  margin-top: -12px;
  margin-bottom: 32px;
}

.tag {
  @extend .tag;
}
</style>