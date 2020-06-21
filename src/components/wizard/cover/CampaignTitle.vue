<template>
  <div class="campaign-title" :class="{
        'portrait': wizardPortrait,
        }">
    <section :class="{
        'top': wizardPortrait,
        'left': !wizardPortrait,
        }">
      <label>Campaign Title</label>
      <p>Write a clear, brief title that helps people quickly understand the gist of your project.</p>
    </section>
    <section
      :class="{
        'bottom': wizardPortrait,
        'right': !wizardPortrait,
        }"
    >
      <div class="input-title">Title</div>
      <v-text-field height="50" class="text-input"></v-text-field>
      <div class="input-title">Subtitle</div>
      <v-text-field height="50" class="text-input"></v-text-field>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CampaignTitle",
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

  &.portrait {
    flex-direction: column;
    text-align: left;
  }
}

.left {
  width: 40%;
  display: inline-flex;
  flex-direction: column;
  text-align: left;
  padding-right: 10%;
}

.right {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
}

.top {
  margin-bottom: 30px;
}

label {
  @extend .label;
}

.text-input {
  @extend .text-input;
  flex-grow: 1;
}
</style>