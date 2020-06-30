<template>
  <Wizard :steps="steps">
    <template v-slot:nav-left>
      <v-btn class="exit btn" text ripple rounded @click="exitWizard">
        <v-icon class="icon" :class="{ 'center-me': wizardPortrait }"
          >mdi-view-grid</v-icon
        >
        <span v-if="!wizardPortrait">My Campaigns</span>
      </v-btn>
    </template>
    <template v-slot:nav-center>
      <h3>{{ details ? details.name : 'Campaign not found!' }}</h3>
    </template>
    <template v-slot:nav-right>
      <v-btn class="preview btn" text ripple rounded>
        <v-icon class="icon" :class="{ 'center-me': wizardPortrait }"
          >mdi-eye-outline</v-icon
        >
        <span v-if="!wizardPortrait">Preview</span>
      </v-btn>
    </template>
  </Wizard>
</template>

<script>
import Wizard from '@/shared-components/wizard/Wizard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'CampaignEditor',
  components: {
    Wizard,
  },
  data() {
    const steps = [
      {
        txt: 'Cover',
        completed: 50,
        linkTo: 'campaign-editor-cover',
      },
      {
        txt: 'Goal & Time',
        completed: 25,
        linkTo: 'campaign-editor-goal-and-time',
      },
      {
        txt: 'Story',
        completed: 10,
        linkTo: 'campaign-editor-story',
      },
      {
        txt: 'Levels',
        completed: 0,
        linkTo: 'campaign-editor-levels',
      },
      {
        txt: 'Teams',
        completed: 0,
        linkTo: 'campaign-editor-teams',
      },
      {
        txt: 'Matchers',
        completed: 75,
        linkTo: 'campaign-editor-matchers',
      },
      {
        txt: 'Customize',
        completed: 0,
        linkTo: 'campaign-editor-customize',
      },
    ];
    return {
      steps,
    };
  },
  methods: {
    exitWizard() {
      this.$router.push({ name: 'my-campaigns' });
    },
  },
  computed: {
    ...mapGetters(['wizardPortrait', 'campaignDetails']),
    details() {
      return this.campaignDetails(this.$router.currentRoute.params.campaignId);
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

.btn {
    padding: 0 20px;
    min-width: 150px;
    text-transform: none;
    font-family: inherit;
    letter-spacing: unset;
    font-size: 16px;
    transition: 0.5s $ease;

    .icon {
      margin-right: 10px;
      font-size: 22px;
      transform: translateY(-0.5px);

      &.center-me {
        margin-right: 0;
      }
    }
  }
</style>