<template>
  <div class="content">
    <Steps />
  </div>
</template>

<script>
import Steps from './Steps.vue';

export default {
  name: 'Content',
  components: {
    Steps,
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  flex-grow: 1;
  background: rgba(0, 128, 0, 0.283);
}
</style>