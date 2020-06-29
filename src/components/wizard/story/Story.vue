<template>
  <div class="story">
    <DummyField />
    <BottomNav
      :routeName="{
        next: 'wizard-levels',
        prev: 'wizard-goal-and-time',
      }"
    />
  </div>
</template>

<script>
import BottomNav from '../BottomNav';
import DummyField from './DummyField';

export default {
  name: 'Story',
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
