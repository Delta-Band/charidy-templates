<template>
  <div class="completion-overview d-flex flex-column">
    <template v-for="stage in stages">
      <v-btn text ripple class="stage" :key="stage.txt">
        <div class="stage-label-container" @click="goToWizard">
            <div class="label">
              {{ stage.txt }}
            </div>
            <v-progress-linear
              class="progress-bar"
              :value="stage.completed"
              background-color="rgba(0, 0, 0, 0.2)"
              color="#000"
            />
            <div class="tip d-flex align-center">
              <div class="led"/>
              <div>{{stage.tip}}</div>
            </div>
          </div>
      </v-btn>
    </template>
    <v-btn
      text
      ripple
      :disabled="!valid"
      class="stage d-flex justify-center align-center submit-btn"
    >
      <div class="label d-flex">
        Submit for review
      </div>
    </v-btn>
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
        tip: 'Lorem Ipsum...',
        linkTo: 'wizard-cover',
      },
      {
        txt: 'Legal entity',
        completed: 25,
        tip: 'Lorem Ipsum...',
        linkTo: 'undefined',
      },
      {
        txt: 'Payment gateway',
        completed: 10,
        tip: 'Lorem Ipsum...',
        linkTo: 'undefined',
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
        name: 'campaign-editor-cover',
        params: { campaignId: this.campaign.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

$guttter: 12%;

.completion-overview {
  display: flex;
  justify-content: center;
  padding: 20px 0 0 0;
  flex-grow: 1;

  .stage-label-container {
    width: 100%;
    text-align: left;
  }

  .progress-bar {
    width: 100%;
    height: 6px !important;
    border-radius: 4px;
    margin-top: 5px;
  }

  .tip {
    text-transform: none;
    margin-top: 5px;
  }

  .led {
    background: white;
    border: 1px solid rgba(black, 0.5);
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    margin-right: 10px;
  }

  .stage {
    border-radius: 0;
    height: 25%;
    box-sizing: border-box;
    padding: 0 $guttter;
    border-top: 1px solid rgba(black, 1);
  }

  .link {
    color: inherit;
    text-decoration: none;
    width: 100%;
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
    background-color: rgba(black, 0.05);

    // &:disabled {
    //   // background-color: rgba(black, 0.1);
    // }
  }
}

.line {
  width: 100%;
  height: 2px;
  background: rgb(199, 199, 199);
  transform: translateY(32px);
}
</style>
