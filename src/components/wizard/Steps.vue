<template>
  <section>
  <div class="line" />

  <div class="steps" v-if="!wizardPortrait">
    <Step completed="50" title="Cover" />
    <Step completed="25" title="Goal &amp; Time" />
    <Step completed="10" title="Story" />
    <Step completed="0" title="Levels" />
    <Step completed="0" title="Teams" />
    <Step completed="75" title="Matchers" />
    <Step completed="0" title="Customize" />
  </div>
  </section>
</template>

<script>
import Step from './Step.vue';
import { mapGetters } from 'vuex';

export default {
  name: "Steps",
  components: {
    Step,
  },
  computed: mapGetters(['wizardPortrait']),
};
</script>

<style lang="scss" scoped>
@import "./components.scss";

section {
  width: 100%;
  @extend .section;
}

.steps {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
}

.line {
  width: 100%;
  height: 1px;
  background: black;
  transform: translateY(31px);
}
</style>