<template>
  <div>
    <div class="vertical-spacer-top" :class="{
        'portrait': wizardPortrait,
    }" />
    <section>
      <div class="line" v-if="!wizardPortrait" />

      <div class="steps" v-if="!wizardPortrait">
        <template v-for="step in steps">
          <Step
            v-bind:completed="step.completed"
            v-bind:title="step.txt"
            :key="step.txt"
            v-bind:linkTo="step.linkTo"
          />
        </template>
      </div>
      <v-select v-else :items="steps" solo v-model="currentStep" @change="onChangeHandler" item-value="linkTo" item-text="txt">
        <template v-slot:item="{item}">
          <StepAsMenuItem
            v-bind:title="item.txt"
            v-bind:completed="item.completed"
            v-bind:selected="$router.currentRoute.name === item.linkTo"
            v-bind:linkTo="item.linkTo"
          />
        </template>
        <template v-slot:selection="{item}">
          <StepAsMenuItem v-bind:title="item.txt" v-bind:completed="item.completed" selected />
        </template>
      </v-select>
    </section>
    <div class="vertical-spacer" :class="{
        'portrait': wizardPortrait,
    }" />
  </div>
</template>

<script>
import StepAsMenuItem from "./StepAsMenuItem.vue";
import Step from "./Step.vue";
import { mapGetters } from "vuex";

export default {
  name: "Steps",
  components: {
    Step,
    StepAsMenuItem
  },
  data() {
    const steps = [
        {
          txt: "Cover",
          completed: 50,
          linkTo: "wizard-cover"
        },
        {
          txt: "Goal & Time",
          completed: 25,
          linkTo: "wizard-goal-and-time"
        },
        {
          txt: "Story",
          completed: 10,
          linkTo: "wizard-story"
        },
        {
          txt: "Levels",
          completed: 0,
          linkTo: "wizard-levels"
        },
        {
          txt: "Teams",
          completed: 0,
          linkTo: "wizard-teams"
        },
        {
          txt: "Matchers",
          completed: 75,
          linkTo: "wizard-matchers"
        },
        {
          txt: "Customize",
          completed: 0,
          linkTo: "wizard-customize"
        }
      ];
    return {
      steps,
      currentStep: steps[0].linkTo,
    };
  },
  created() {
    this.currentStep = this.steps.find(step => step.linkTo === this.$router.currentRoute.name).linkTo;
  },
  computed: {
    ...mapGetters(["wizardPortrait"])
  },
  methods: {
    onChangeHandler() {
      this.$router.push({ name: this.currentStep});
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

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
  height: 2px;
  background: rgb(199, 199, 199);
  transform: translateY(32px);
}

.vertical-spacer {
  @extend .vertical-spacer;
}

.vertical-spacer-top {
  @extend .vertical-spacer-top;
}
</style>