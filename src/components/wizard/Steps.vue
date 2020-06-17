<template>
  <div class="steps">
    <div class="line" />
    <Step />
    <Step />
    <Step />
    <Step />
    <Step />
    <Step />
    <Step />
  </div>
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
.steps {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}

.line {
  width: 100%;
  height: 1px;
  background: black;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-12px);
}
</style>