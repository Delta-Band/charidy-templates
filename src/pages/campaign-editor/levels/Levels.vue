<template>
  <div class="levels">
    <DummyField />
    <BottomNav
      :routeName="{
        next: 'campaign-editor-teams',
        prev: 'campaign-editor-story',
      }"
    />
  </div>
</template>

<script>
import BottomNav from '@/shared-components/wizard/BottomNav';
import DummyField from './DummyField';

export default {
  name: 'CampaignEditorLevels',
  components: {
    BottomNav,
    DummyField,
  },
}
</script>

<style lang="scss" scoped>
  .levels {

  }
</style>