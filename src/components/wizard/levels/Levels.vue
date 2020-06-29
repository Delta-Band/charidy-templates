<template>
  <div class="levels">
    <DummyField />
    <BottomNav
      :routeName="{
        next: 'wizard-teams',
        prev: 'wizard-story',
      }"
    />
  </div>
</template>

<script>
import BottomNav from '../BottomNav';
import DummyField from './DummyField';

export default {
  name: 'Levels',
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