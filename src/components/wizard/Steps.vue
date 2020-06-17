<template>
  <section>
  <div class="line" />
  <div class="steps">
    <Step title="Cover" />
    <Step title="Goal &amp; Time" />
    <Step title="Story" />
    <Step title="Levels" />
    <Step title="Teams" />
    <Step title="Matchers" />
    <Step title="Customize" />
  </div>
  </section>
</template>

<script>
import Step from './Step.vue';

export default {
  name: "Steps",
  components: {
    Step,
  }
};
</script>

<style lang="scss" scoped>
@import "./components.scss";

section {
  width: 100%;
  @extend .section;
  margin-top: 50px;
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