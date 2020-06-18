<template>
  <div class="top-nav">
    <section class="left">
      <button>
        <v-icon class="icon-left">mdi-arrow-left</v-icon>
        Exit
      </button>
    </section>
    <section class="right">
      <button>
        <v-icon class="icon-left">mdi-eye-outline</v-icon>
        Preview
      </button>
      <button>
        Save
        <v-icon class="icon-right">mdi-arrow-right</v-icon>
      </button>
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
  padding: 10px 20px;
  box-sizing: border-box;
}

section {
  display: flex;
}
button {
  @extend .button;
  text-transform: uppercase;
}
</style>