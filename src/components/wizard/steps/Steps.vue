<template>
  <section>
    <div class="line" v-if="!wizardPortrait" />

    <div class="steps" v-if="!wizardPortrait">
      <template v-for="step in steps">
        <Step v-bind:completed="step.completed" title="step.txt" :key="step.txt" />
      </template>
    </div>
    <v-select
      v-else
      :items="steps"
      item-text="txt"
      label="Step"
      solo
      v-bind:value="currentStep"
    >
      <template v-slot:item="{item}">
        <StepAsMenuItem v-bind:title="item.txt" v-bind:completed="item.completed" v-bind:selected="currentStep === item.txt" />
      </template>
      <template v-slot:selection="{item}">
        <StepAsMenuItem v-bind:title="item.txt" v-bind:completed="item.completed" selected />
      </template>
    </v-select>
  </section>
</template>

<script>
import StepAsMenuItem from "./StepAsMenuItem.vue";
import Step from "./Step.vue";
import { mapGetters } from "vuex";

export default {
  name: "Steps",
  components: {
    Step,
    StepAsMenuItem,
  },
  data() {
    return {
      steps: [
        {
          txt: "Cover",
          completed: 50
        },
        {
          txt: "Goal & Time",
          completed: 25
        },
        {
          txt: "Story",
          completed: 10
        },
        {
          txt: "Levels",
          completed: 0
        },
        {
          txt: "Teams",
          completed: 0
        },
        {
          txt: "Matchers",
          completed: 75
        },
        {
          txt: "Customize",
          completed: 0
        }
      ],
      currentStep: "Cover"
    };
  },
  computed: {
    ...mapGetters(["wizardPortrait"]),
  }
};
</script>

<style lang="scss" scoped>
@import "../shared-styles/index";

section {
  width: 100%;
  @extend .section;
}

.steps {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
}

.line {
  width: 100%;
  height: 1px;
  background: black;
  transform: translateY(31px);
}

.step-menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .txt {
    flex-shrink: 0;
    width: 93px;
  }

  .bar {
    width: 50%;
    height: 10px;
    position: relative;;
    border: 1px solid $blue;
    border-radius: 10px;

    .completed {
      height: 100%;
      background: $blue;
      border-radius: 10px;
    }
  }
}
</style>