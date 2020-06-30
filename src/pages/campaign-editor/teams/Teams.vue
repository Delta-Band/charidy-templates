<template>
  <div class="teams">
    <DummyField />
    <BottomNav
      :routeName="{
        next: 'campaign-editor-matchers',
        prev: 'campaign-editor-levels',
      }"
    />
  </div>
</template>

<script>
import BottomNav from '@/shared-components/wizard/BottomNav';
import DummyField from './DummyField';

export default {
  name: 'CampaignEditorTeams',
  components: {
    BottomNav,
    DummyField,
  },
}
</script>

<style lang="scss" scoped>
  .teams {

  }
</style>