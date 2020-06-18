<template>
  <div class="campaign-title">
    <section class="left-top">
      <label>Campaign Title</label>
      <p>Write a clear, brief title that helps people quickly understand the gist of your project.</p>
    </section>
    <section class="right-bottom">
      <div class="input-title">Title</div>
      <v-text-field height="50" class="text-input" ></v-text-field>
      <div class="input-title">Subtitle</div>
      <v-text-field height="50" class="text-input" ></v-text-field>
    </section>
  </div>
</template>

<script>
export default {
  name: "CampaignTitle"
};
</script>

<style lang="scss" scoped>
@import "./shared-styles/index";

.campaign-title {
  width: 100%;
  display: flex;
  @extend .section;
}

.left-top {
  width: 40%;
  display: inline-flex;
  flex-direction: column;
  text-align: left;
  padding-right: 10%;
}

.right-bottom {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
}

label {
  @extend .label;
}

.text-input {
  @extend .text-input;
  flex-grow: 1;
}
</style>