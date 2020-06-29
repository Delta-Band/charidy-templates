<template>
  <div class="teams">
    Teams
    <NextBtn routeName="wizard-matchers">Next</NextBtn>
  </div>
</template>

<script>
import NextBtn from '../NextBtn';

export default {
  name: 'Teams',
  components: {
    NextBtn,
  },
}
</script>

<style lang="scss" scoped>
  .teams {

  }
</style>