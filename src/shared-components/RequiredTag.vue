<template>
  <div class="required-tag d-flex align-center">
    <v-icon class="icon" size="12">mdi-asterisk</v-icon>
    Required
  </div>
</template>

<script>
export default {
  name: 'RequiredTag',
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index.scss';

.required-tag {
  margin-left: 10px;
  text-transform: uppercase;
  font-size: 13px;

  .icon {
    margin-right: 3px;
    color: $greyDark;
    transform: translateY(-1px);
  }
}
</style>
