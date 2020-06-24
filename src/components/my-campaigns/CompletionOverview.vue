<template>
  <div class="completion-overview">
    <div class="steps">
      <div class="line" />
      <v-row no-gutters class="steps-list" >
        <template v-for="step in steps">
          <v-btn text ripple class="step" :key="step.txt">
            <vc-donut
              :sections="[
                {
                  color: '#000',
                  value: step.completed,
                },
              ]"
              :size="40"
              :thickness="20"
              foreground="rgb(194, 194, 194)"
            />
            <div class="percentage">{{ step.completed }}</div>
            <div class="label">{{ step.txt }}</div>
          </v-btn>
        </template>
      </v-row>
    </div>
    <v-btn
        class="submit-btn"
        :disabled="!valid"
        text
        ripple
        rounded
        >Submit</v-btn
      >
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CompletionOverview',
  data() {
    const steps = [
      {
        txt: 'Campaign page',
        completed: 50,
        linkTo: 'wizard-cover',
      },
      {
        txt: 'Legal entity',
        completed: 25,
        linkTo: 'wizard-goal-and-time',
      },
      {
        txt: 'Payment gateway',
        completed: 10,
        linkTo: 'wizard-story',
      },
    ];
    return {
      steps,
      currentStep: steps[0].linkTo,
      valid: false,
    };
  },
  props: {
    campaign: Object,
  },
  computed: {
    ...mapGetters(['myCampaignsPortrait']),
  },
  methods: {
    goToWizard() {
      this.$router.push({
        name: 'wizard-cover',
        params: { campaignId: this.campaign.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

.completion-overview {
  display: flex;
  justify-content: center;

  .steps {
    width: 550px;
    flex-grow: 0;
  }

  .step {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 10px 0;
    width: calc(100% / 3);
    flex-shrink: 0;
    box-sizing: border-box;

    &::v-deep {
      .v-btn__content {
        flex-direction: inherit;
      }
    }
  }

  .label {
    margin-top: 5px;
  }

  .percentage {
    margin-top: 7px;
    font-size: 17px;
    font-weight: bold;
    position: relative;

    &::after {
      content: '%';
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(100%);

    }
  }

  .submit-btn {
    background-color: black;
    color: white;
    padding: 0 40px;
    transition: 0.5s $ease;
    transform: translateY(15px);
    margin-left: 20px;

    &:disabled {
      background-color: rgba(black, 0.1);
    }
  }
}

.line {
  width: 100%;
  height: 2px;
  background: rgb(199, 199, 199);
  transform: translateY(32px);
}

.steps-list {
  flex-wrap: nowrap;
}
</style>
