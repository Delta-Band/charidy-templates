<template>
  <div class="step-menu-item">
    <div class="bar" :class="{'selected' : selected}">
      <div class="completed" v-bind:style="{'height': `${completed}%`}" />
    </div>
    <div class="txt">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "StepAsMenuItem",
  props: {
    title: String,
    completed: Number,
    selected: Boolean,
  }
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

.step-menu-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  .txt {
    flex-shrink: 0;
    margin-left: 20px;
  }

  .bar {
    width: 10px;
    height: 30px;
    position: relative;;
    border: 1px solid rgba(black, 0.2);
    background: rgba(black, 0.1);
    border-radius: 2px;
    overflow: hidden;
    transform: rotate(180deg);

    .completed {
      width: 100%;
      background: rgba(black, 0.3);
      transition: .5 $ease;
    }

    &.selected {
      border: 1px solid $blue;
      background: rgba($blue, 0.2);

      .completed {
        background: $blue;
      }
    }
  }
}
</style>