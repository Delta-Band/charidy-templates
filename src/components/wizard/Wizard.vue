<template>
  <div class="wizard">
    <TopNav />
    <Content />
  </div>
</template>

<script>
import TopNav from "./TopNav.vue";
import Content from "./Content.vue";

export default {
  name: "Wizard",
  components: {
    TopNav,
    Content
  }
};
</script>

<style lang="scss" scoped>
@import "./colors.scss";

.wizard {
  width: 100%;
  height: 100%;
  background-color: rgb(238, 238, 238);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>