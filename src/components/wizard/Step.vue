<template>
  <div class="step">
    <div class="outer-circle">
      <div class="inner-circle"></div>
    </div>
    <label>Label</label>
  </div>
</template>

<script>
export default {
  name: "Step",
};
</script>

<style lang="scss" scoped>
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.outer-circle {
  border-radius: 50px;
  width: 40px;
  height: 40px;
  background: rgba(black, 0.2);
}

.inner-circle {
  border-radius: 50px;
}

label {
  margin-top: 5px;
}
</style>