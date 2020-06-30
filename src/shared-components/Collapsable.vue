<template>
  <section class="collapsable">
    <v-btn class="collapsable-btn" text ripple @click="toggleAdvancedMode">
      <slot name="title" />
    </v-btn>
    <div
      class="collapsable-container"
      :class="isOpen ? 'open' : 'closed'"
      :style="{
        height: `${isOpen > 0 ? advacedSectionHeight : 0}px`,
      }"
    >
      <div id="collapsable-content">
        <div class="vertical-spacer-top" />
        <slot name="content" />
        <div class="vertical-spacer" />
      </div>
    </div>
    <v-btn
      class="close-btn"
      text
      ripple
      @click="toggleAdvancedMode"
      :class="{ show: isOpen }"
    >
      <div class=close-btn-txt>Close</div>
    </v-btn>
  </section>
</template>

<script>
import VueScrollTo from 'vue-scrollto';

export default {
  name: 'Collapsable',
  props: {
    isOpen: Boolean,
    title: String,
    container: String,
  },
  data: () => ({
    advacedSectionHeight: 0,
  }),
  created() {
    window.addEventListener('resize', this.onRisize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onRisize);
  },
  mounted() {
    this.onRisize();
  },
  methods: {
    toggleAdvancedMode() {
      this.$emit('toggle');
      VueScrollTo.scrollTo('#collapsable-content', 500, {
        container: this.container,
        easing: [0.25, 0.46, 0.45, 0.94],
      });
    },
    onRisize() {
      const $collapsableContent = document.getElementById('collapsable-content');
      this.advacedSectionHeight = $collapsableContent.clientHeight + 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

.collapsable {
  position: relative;
  width: 100%;

  .collapsable-container {
    background-color: $greyLight;
    height: 200px;
    overflow: hidden;
    will-change: height opacity;
    transition: 0.5s $ease;

    &.open {
      #collapsable-content {
        transition: 0.5s $ease, opacity 0.5s $ease 0.25s;
        opacity: 1;
        transform: scale(1);
      }
    }

    #collapsable-content {
      transition: 0.5s $ease;
      transform: scale(0.7);
      opacity: 0;
    }
  }

  .collapsable-btn,
  .close-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 20px 26px;
    width: 100%;
    // margin-top: -30px;
    background-color: $greyLight;
    border-radius: 0;
    line-height: 1em;
    height: 56px !important;

    // .icon {
    //   transition: 0.25s $ease;
    //   margin-top: 15px;
    //   background-color: $yellow;
    //   color: white;
    //   border-radius: 40px;
    //   padding: 7px;

    //   &.open {
    //     transform: rotate(180deg);
    //   }
    // }
  }

  .close-btn {
    opacity: 0;
    pointer-events: none;
    transition: 0.5s $ease;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    background: none;

    &.show {
      opacity: 1;
      pointer-events: all;
    }

    .icon {
      font-size: 20px;
      margin-right: 10px;
      // transform: translateY(-1px);
    }
  }
  .close-btn-txt {
    height: 16px;
    transform: translateY(1px);
  }
}
</style>
