<template>
  <section class="advanced">
    <v-btn class="advanced-btn" text ripple @click="toggleAdvancedMode">
      <v-row align="center">
        Advanced Options
        <!-- <v-icon class="icon" :class="isOpen ? 'open' : 'closed'">mdi-arrow-down</v-icon> -->
      </v-row>
    </v-btn>
    <div
      class="advanced-container"
      :class="isOpen ? 'open' : 'closed'"
      :style="{
        'height': `${isOpen > 0 ? advacedSectionHeight : 0}px`,
      }"
    >
      <div id="advanced-content">
        <div class="vertical-spacer" />
        <slot name="1" />
        <div class="vertical-spacer" />
      </div>
    </div>
    <v-btn class="close-btn" text ripple @click="toggleAdvancedMode" :class="{show: isOpen}">
      <v-row align="center" justify="center">
        <v-icon class="icon">mdi-close</v-icon>Close
      </v-row>
    </v-btn>
  </section>
</template>

<script>
import VueScrollTo from "vue-scrollto";

export default {
  name: "AdvancedSection",
  props: {
    isOpen: Boolean
  },
  data: () => ({
    advacedSectionHeight: 0
  }),
  created() {
    window.addEventListener("resize", this.onRisize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onRisize);
  },
  mounted() {
    this.onRisize();
  },
  methods: {
    toggleAdvancedMode() {
      this.$emit("toggle");
      VueScrollTo.scrollTo("#advanced-content", 500, {
        container: "#wizard-content",
        easing: [0.25, 0.46, 0.45, 0.94]
      });
    },
    onRisize() {
      const $advancedContent = document.getElementById("advanced-content");
      this.advacedSectionHeight = $advancedContent.clientHeight + 1;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../shared-styles/index";

.advanced {
  position: relative;
  
  .advanced-container {
    background-color: $greyLight;
    height: 200px;
    overflow: hidden;
    will-change: height opacity;
    transition: 0.5s $ease;
    transform: scale(0.7);
    opacity: 0;

    &.open {
      transition: 0.5s $ease, opacity 0.5s $ease 0.25s;
      opacity: 1;
      transform: scale(1);
    }
  }

  .advanced-btn,
  .close-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 20px 20px;
    width: 100%;
    height: auto;
    // margin-top: -30px;
    background-color: $greyLight;

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
      transform: translateY(-1px);
    }
  }
}
</style>