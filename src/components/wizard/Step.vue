<template>
  <button class="step">
    <div class="outer-circle">
      <div class="inner-circle" v-bind:style="{'height': `${completed}%`, 'width': `${completed}%`}"></div>
    </div>
    <label>{{title}}</label>
  </button>
</template>

<script>
export default {
  name: "Step",
  props: {
    title: String,
    completed: String,
  }
};
</script>

<style lang="scss" scoped>
@import "./colors.scss";
@import "./components.scss";

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  flex-shrink: 0;
  width: calc(100% / 7);
}

.outer-circle {
  border-radius: 50px;
  width: 40px;
  height: 40px;
  background: rgb(194, 194, 194);
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-circle {
  border-radius: 50px;
  background-color: black;
  transition: .5s $ease;
}

label {
  margin-top: 7px;
  font-size: 15px;
  font-weight: 500;
}

button {
  @extend .button;
}
</style>