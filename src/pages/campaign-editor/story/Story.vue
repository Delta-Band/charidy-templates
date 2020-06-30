<template>
  <div class="story">
    <DummyField />
    <BottomNav
      :routeName="{
        next: 'campaign-editor-levels',
        prev: 'campaign-editor-goal-and-time',
      }"
    />
  </div>
</template>

<script>
import BottomNav from '@/shared-components/wizard/BottomNav';
import DummyField from './DummyField';

export default {
  name: 'CampaignEditorStory',
  components: {
    BottomNav,
    DummyField,
  },
};
</script>

<style lang="scss" scoped>
.story {
}
</style>
