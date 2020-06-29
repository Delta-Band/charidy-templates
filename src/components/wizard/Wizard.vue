<template>
  <div id="wizard">
    <TopNav />
    <div id="wizard-content">
      <Steps />
      <router-view />
    </div>
  </div>
</template>

<script>
import TopNav from './TopNav.vue';
import Steps from './steps/Steps.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Wizard',
  components: {
    TopNav,
    Steps,
  },
  created() {
    window.addEventListener('resize', this.onRisize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onRisize);
  },
  mounted() {
    this.wizardUpdatePortrait(this.$el.clientWidth);
  },
  methods: {
    ...mapActions(['wizardUpdatePortrait']),
    onRisize() {
      this.wizardUpdatePortrait(this.$el.clientWidth);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

#wizard {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(black, 0.05);
}

#wizard-content {
  width: 100%;
  overflow: auto;
  flex-grow: 1;
  box-sizing: border-box;
}
</style>
