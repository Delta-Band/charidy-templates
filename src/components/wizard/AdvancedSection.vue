<template>
  <section class="advanced">
    <div
      class="advanced-container"
      v-bind:class="isOpen ? 'open' : 'closed'"
      v-bind:style="{
        'height': `${isOpen > 0 ? advacedSectionHeight : 0}px`,
      }"
    >
      <div id="advanced-content">
        <div class="vertical-spacer" />
        <slot name="1" />
      </div>
    </div>
    <div class="vertical-spacer" />
    <v-btn class="advanced-btn" text ripple @click="toggleAdvancedMode">
      <div class="btn-content">
        Advanced Options
        <v-icon class="icon" v-bind:class="isOpen ? 'open' : 'closed'">mdi-arrow-down</v-icon>
      </div>
    </v-btn>
  </section>
</template>

<script>
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
    },
    onRisize() {
      const $advancedContent = document.getElementById("advanced-content");
      this.advacedSectionHeight = $advancedContent.clientHeight + 1;
      // this.wizardUpdatePortrait(this.$el.clientWidth);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./shared-styles/index";

.advanced {
  .advanced-container {
    height: 200px;
    overflow: hidden;
    will-change: height opacity;
    transition: 0.5s $ease;
    opacity: 0;

    &.open {
      transition: 0.5s $ease, opacity 0.5s $ease 0.25s;
      opacity: 1;
    }
  }

  .advanced-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 20px 20px;
    width: 100%;
    height: auto;
    margin-top: -30px;

    .btn-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .icon {
      transition: 0.25s $ease;
      margin-top: 10px;
      background-color: $yellow;
      color: white;
      border-radius: 40px;
      padding: 7px;

      &.open {
        transform: rotate(180deg);
      }
    }
  }
}
</style>