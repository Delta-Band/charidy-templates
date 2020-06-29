<template>
  <div class="goal-time-page">
    <DummyField />
    <BottomNav
      :routeName="{
        next: 'wizard-story',
        prev: 'wizard-cover',
      }"
    />
  </div>
</template>

<script>
import BottomNav from '../BottomNav';
import DummyField from './DummyField';

export default {
  name: 'GoalTime',
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
