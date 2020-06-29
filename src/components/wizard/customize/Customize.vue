<template>
  <div class="customize">
    <DummyField />
    <BottomNav
      :routeName="{
        next: 'my-campaigns',
        prev: 'wizard-matchers',
      }"
    />
  </div>
</template>

<script>
import DummyField from './DummyField';
import BottomNav from '../BottomNav';

export default {
  name: 'Customize',
  components: {
    DummyField,
    BottomNav,
  },
};
</script>

<style lang="scss" scoped>
.leave-wrapper {
  padding: 0 10%;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
