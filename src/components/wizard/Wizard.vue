<template>
  <div class="wizard">
    <TopNav />
    <Content />
  </div>
</template>

<script>
import TopNav from './TopNav.vue';
import Content from './Content.vue';

export default {
  name: 'Wizard',
  components: {
    TopNav,
    Content,
  }
}
</script>

<style scoped>
.wizard {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.228);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: stretch
}
</style>