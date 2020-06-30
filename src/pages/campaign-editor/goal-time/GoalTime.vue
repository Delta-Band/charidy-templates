<template>
  <div class="goal-time-page">
    <DummyField />
    <BottomNav
      :routeName="{
        next: 'campaign-editor-story',
        prev: 'campaign-editor-cover',
      }"
    />
  </div>
</template>

<script>
import BottomNav from '@/shared-components/wizard/BottomNav';
import DummyField from './DummyField';

export default {
  name: 'CampaignEditorGoalTime',
  components: {
    BottomNav,
    DummyField,
  },
};
</script>

<style lang="scss" scoped>
.goal-time-page {
}
</style>
