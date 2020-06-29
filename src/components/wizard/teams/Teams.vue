<template>
  <div class="teams">
    <DummyField />
    <BottomNav
      :routeName="{
        next: 'wizard-matchers',
        prev: 'wizard-levels',
      }"
    />
  </div>
</template>

<script>
import BottomNav from '../BottomNav';
import DummyField from './DummyField';

export default {
  name: 'Teams',
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