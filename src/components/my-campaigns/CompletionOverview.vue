<template>
  <div class="completion-overview d-flex flex-column">
    <div class="stage-list d-flex flex-column">
      <template v-for="stage in stages">
        <v-btn
          text
          ripple
          class="stage d-flex justify-space-between"
          :key="stage.txt"
        >
          <div class="label d-flex">
            {{ stage.txt }}
          </div>
          <v-progress-linear
            class="progress-bar"
            :value="stage.completed"
            background-color="rgba(0, 0, 0, 0.2)"
            color="#000"
          />
        </v-btn>
      </template>
      <v-btn
          text
          ripple
          :disabled="!valid"
          class="stage d-flex justify-space-between"
        >
          <div class="label d-flex">
            Submit for review
          </div>
        </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CompletionOverview',
  data() {
    const stages = [
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
      stages,
      currentStep: stages[0].linkTo,
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
  padding: 20px 0 0 0;

  .stage-list {
    width: 100%;
  }

  .progress-bar {
    width: 40%;
  }

  .stage {
    border-radius: 0;
    height: 43px;
    padding: 0 26px;
  }

  // .stage {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   height: auto;
  //   padding: 10px 0;
  //   width: calc(100% / 3);
  //   flex-shrink: 0;
  //   box-sizing: border-box;

  //   &::v-deep {
  //     .v-btn__content {
  //       flex-direction: inherit;
  //     }
  //   }
  // }

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
    // background-color: black;
    // color: white;
    transition: 0.5s $ease;
    width: 100px;

    &:disabled {
      // background-color: rgba(black, 0.1);
    }
  }
}

.line {
  width: 100%;
  height: 2px;
  background: rgb(199, 199, 199);
  transform: translateY(32px);
}
</style>
