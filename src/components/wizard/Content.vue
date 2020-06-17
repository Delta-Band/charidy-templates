<template>
  <div class="content">
    <div class="vertical-spacer-top" />
    <Steps />
    <div class="vertical-spacer" />
    <CoverMedia />
    <div class="vertical-spacer" />
    <div class="divider" />
    <div class="vertical-spacer" />
  </div>
</template>

<script>
import Steps from './Steps.vue';
import CoverMedia from './CoverMedia.vue';

export default {
  name: 'Content',
  components: {
    Steps,
    CoverMedia,
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  overflow: auto;
  flex-grow: 1;
  box-sizing: border-box;
}

.vertical-spacer {
  height: 15%;
  min-height: 106px;
  max-height: 150px;
}

.vertical-spacer-top {
  height: 10%;
  max-height: 100px;
}

.divider {
  width: 100%;
  height: 1px;
  background: black;
}

</style>