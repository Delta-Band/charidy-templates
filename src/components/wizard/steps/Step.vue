<template>
  <v-btn class="step" text ripple>
    <router-link :to="{name: linkTo}" class="link">
      <vc-donut
          :sections="[{
            color: '#000',
            value: completed,
          }]"
          :size="40"
          :thickness="20"
          foreground="rgb(194, 194, 194)"
        />
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

.label {
  margin-top: 7px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
}

.pie {
  width: 100%;
  height: 100%;
}

// button {
//   @extend .button;
// }
</style>