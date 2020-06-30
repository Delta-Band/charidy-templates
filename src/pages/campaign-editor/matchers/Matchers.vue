<template>
  <div class="matchers">
    <DummyField />
    <BottomNav
      :routeName="{
        next: 'campaign-editor-customize',
        prev: 'campaign-editor-teams',
      }"
    />
  </div>
</template>

<script>
import BottomNav from '@/shared-components/wizard/BottomNav';
import DummyField from './DummyField';

export default {
  name: 'CampaignEditorMatchers',
  components: {
    BottomNav,
    DummyField,
  },
}
</script>

<style lang="scss" scoped>
  .matchers {

  }
</style>