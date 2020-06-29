<template>
  <div class="levels">
    Levels
    <NextBtn routeName="wizard-teams">Next</NextBtn>
  </div>
</template>

<script>
import NextBtn from '../NextBtn';

export default {
  name: 'Levels',
  components: {
    NextBtn,
  },
}
</script>

<style lang="scss" scoped>
  .levels {

  }
</style>