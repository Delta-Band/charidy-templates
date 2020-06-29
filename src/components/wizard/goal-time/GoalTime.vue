<template>
  <div class="goal-time-page">
    Goal &amp; Time
    <NextBtn routeName="wizard-story">Next</NextBtn>
  </div>
</template>

<script>
import NextBtn from '../NextBtn';

export default {
  name: 'GoalTime',
  components: {
    NextBtn,
  },
};
</script>

<style lang="scss" scoped>
.goal-time-page {
}
</style>
