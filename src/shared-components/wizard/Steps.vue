<template>
  <div>
    <div
      class="vertical-spacer-top"
      :class="{
        portrait: wizardPortrait,
      }"
    />
    <div v-if="!wizardPortrait" no-gutters class="steps-section">
      <div class="line" />
      <div class="steps">
        <template v-for="step in steps">
          <Step
            v-bind:completed="step.completed"
            v-bind:title="step.txt"
            :key="step.txt"
            v-bind:linkTo="step.linkTo"
          />
        </template>
      </div>
    </div>
    <div v-else class="steps-section">
      <v-select
        :items="steps"
        solo
        v-model="currentStep"
        @change="onChangeHandler"
        item-value="linkTo"
        item-text="txt"
      >
        <template v-slot:item="{ item }">
          <StepAsMenuItem
            v-bind:title="item.txt"
            v-bind:completed="item.completed"
            v-bind:selected="$router.currentRoute.name === item.linkTo"
            v-bind:linkTo="item.linkTo"
          />
        </template>
        <template v-slot:selection="{ item }">
          <StepAsMenuItem
            v-bind:title="item.txt"
            v-bind:completed="item.completed"
            selected
          />
        </template>
      </v-select>
    </div>
    <div
      v-if="!wizardPortrait"
      class="vertical-spacer"
    />
    <div
      v-else
      class="sub-steps-mobile-spacer"
    />
  </div>
</template>

<script>
import StepAsMenuItem from './StepAsMenuItem.vue';
import Step from './Step.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Steps',
  components: {
    Step,
    StepAsMenuItem,
  },
  props: {
    steps: Array,
  },
  data() {
    return {
      currentStep: this.steps[0].linkTo,
    };
  },
  created() {
    this.currentStep = this.steps.find(
      (step) => step.linkTo === this.$router.currentRoute.name
    ).linkTo;
  },
  computed: {
    ...mapGetters(['wizardPortrait']),
  },
  methods: {
    onChangeHandler() {
      this.$router.push({ name: this.currentStep });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

.steps-section {
  padding: 0 10%;
  flex-direction: column;
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

.sub-steps-mobile-spacer {
  height: 5vh;
  max-height: 60px;
}
</style>
