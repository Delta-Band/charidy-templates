<template>
  <div id="wizard">
    <div class="top-nav">
    <section class="left">
      <slot name="nav-left"></slot>
    </section>
    <section class="center">
      <slot name="nav-center"></slot>
    </section>
    <section class="right">
      <slot name="nav-right"></slot>
    </section>
  </div>
    <div id="wizard-content">
      <Steps :steps="steps" />
      <router-view />
    </div>
    <SaveIndicator v-if="showSavedIndicator"/>
  </div>
</template>

<script>
import Steps from './Steps.vue';
import SaveIndicator from './SaveIndicator.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Wizard',
  components: {
    Steps,
    SaveIndicator,
  },
  props: {
    steps: Array,
  },
  computed: {
    ...mapGetters([
      'showSavedIndicator',
    ]),
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

.top-nav {
  @extend %app-bar;

  .right {
    .btn {
      margin-left: 20px;
    }
  }
}
</style>
