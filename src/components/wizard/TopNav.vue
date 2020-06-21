<template>
  <div class="top-nav">
    <section class="left">
      <v-btn class="exit btn" text ripple rounded>
        <v-icon class="icon">mdi-arrow-left</v-icon>Exit
      </v-btn>
    </section>
    <section class="right">
      <v-btn class="preview btn" text ripple rounded>
        <v-icon class="icon">mdi-eye-outline</v-icon>Preview
      </v-btn>
      <v-btn class="save btn" text ripple rounded>Save</v-btn>
    </section>
  </div>
</template>

<script>
export default {
  name: "TopNav"
};
</script>

<style lang="scss" scoped>
@import "./shared-styles/index";

.top-nav {
  width: 100%;
  flex-grow: 0;
  border-bottom: 1px solid black;
  background-color: rgba(255, 255, 255, 0.79);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 40px 10px 20px;
  box-sizing: border-box;

  .btn {
    padding: 0 20px;
    min-width: 150px;
    text-transform: none;
    font-family: inherit;
    letter-spacing: unset;
    font-size: 16px;
    transition: 0.5s $ease;

    .icon {
      margin-right: 10px;
      font-size: 22px;
      transform: translateY(-0.5px);
    }

    &.save {
      background-color: black;
      color: white;
      padding: 0 40px;
    }
  }

  .right {
    .btn {
      margin-left: 20px;
    }
  }
}

section {
  display: flex;
}
// button {
//   @extend .button;
//   text-transform: uppercase;
// }
</style>