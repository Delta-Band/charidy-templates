<template>
  <div class="wizard-field-tip">
    <v-icon class="icon" >mdi-lightbulb-outline</v-icon>
    <slot />
  </div>
</template>

<script>
export default {
  name: "WizardFieldTip",
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index.scss';

.wizard-field-tip {
  width: 100%;
  text-align: left;
  margin-top: 10px;
  display: flex;
  align-items: center;
  color: $greyDark;

  .icon {
    margin-right: 10px;
    color: $greyDark;
    font-size: 20px;
  }
}
</style>