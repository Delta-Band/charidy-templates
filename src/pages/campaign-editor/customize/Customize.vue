<template>
  <div class="customize">
    <DummyField />
    <BottomNav
      :routeName="{
        next: 'my-campaigns',
        prev: 'campaign-editor-matchers',
      }"
    />
  </div>
</template>

<script>
import DummyField from './DummyField';
import BottomNav from '@/shared-components/wizard/BottomNav';

export default {
  name: 'CampaignEditorCustomize',
  components: {
    DummyField,
    BottomNav,
  },
};
</script>

<style lang="scss" scoped>
.leave-wrapper {
  padding: 0 10%;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
