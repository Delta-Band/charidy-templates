<template>
  <div class="saved-inidicator d-flex justify-center align-center">
    Saved
    <div class=""/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SaveIndicator',
  methods: {
    ...mapActions(['hideSavedIndicator']),
  },
  mounted() {
    setTimeout(this.hideSavedIndicator, 2000);
  }
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

$gutter: 4vw;

.saved-inidicator {
  width: #{1.5 * $gutter};
  height: #{1.5 * $gutter};
  position: fixed;
  bottom: $gutter;
  left: $gutter;
  background: rgba(black, 0.05);

  border-radius: 5px;
  @extend %popIn;
}
</style>
