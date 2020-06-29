<template>
  <div class="story">
    Story
    <NextBtn routeName="wizard-levels">Next</NextBtn>
  </div>
</template>

<script>
import NextBtn from '../NextBtn';

export default {
  name: 'Story',
  components: {
    NextBtn,
  },
};
</script>

<style lang="scss" scoped>
.story {
}
</style>
