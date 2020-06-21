<template>
  <v-btn class="step" text ripple rounded>
    <router-link :to="{name: linkTo}" class="link">
      <div class="outer-circle">
        <div
          class="inner-circle"
          v-bind:style="{'height': `${completed}%`, 'width': `${completed}%`}"
        ></div>
      </div>
      <div class="label">{{title}}</div>
    </router-link>
  </v-btn>
</template>

<script>
export default {
  name: "Step",
  props: {
    title: String,
    linkTo: String,
    completed: Number
  }
};
</script>

<style lang="scss" scoped>
@import "../shared-styles/index";

.step {
  z-index: 1;
  flex-shrink: 0;
  width: calc(100% / 7);
  height: auto !important;
  padding: 0px !important;

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    color: inherit;
    text-decoration: none;
  }
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
  transition: 0.5s $ease;
}

.label {
  margin-top: 7px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
}

button {
  @extend .button;
}
</style>