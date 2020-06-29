<template>
  <div class="matchers">
    <DummyField />
    <BottomNav
      :routeName="{
        next: 'wizard-customize',
        prev: 'wizard-teams',
      }"
    />
  </div>
</template>

<script>
import BottomNav from '../BottomNav';
import DummyField from './DummyField';

export default {
  name: 'Matchers',
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