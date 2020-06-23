<template>
  <v-app>
    <div id="my-campaigns">
      <div class="vertical-spacer" />
      <section class="section">
        <h1>My Campaigns</h1>
        <!-- <v-btn class="create btn" ripple rounded @click="createNewCampaign">
          <v-icon class="icon">mdi-plus</v-icon>New Campaign
        </v-btn>-->
      </section>
      <section class="section">
        <Collapsable
          :isOpen="isNewCampaignOpen"
          @toggle="toggleNewCampaignMode"
          container="#my-campaigns"
        >
          <template v-slot:title>
            <v-icon class="icon">mdi-plus</v-icon>
            New Campaign
          </template>
          <template v-slot:content>
            <v-form v-model="valid">
              <section class="section add-campaign-section">
                <div
                  :class="{
                    top: myCampaignsPortrait,
                    left: !myCampaignsPortrait,
                  }"
                >
                  <div class="label">
                    Campaign Name
                  </div>
                  <p>
                    Internal name
                  </p>
                </div>
                <div
                  :class="{
                    bottom: myCampaignsPortrait,
                    right: !myCampaignsPortrait,
                  }"
                >
                  <v-text-field
                    height="50"
                    class="text-input"
                    counter
                    color="#000"
                    :rules="nameRules"
                  ></v-text-field>
                </div>
              </section>
              <div class="vertical-spacer" />
              <section class="section add-campaign-section">
                <div
                  :class="{
                    top: myCampaignsPortrait,
                    left: !myCampaignsPortrait,
                  }"
                >
                  <div class="label">
                    How would you like to fundrais?
                  </div>
                  <p>
                    Select one option
                  </p>
                </div>
                <div
                  :class="{
                    bottom: myCampaignsPortrait,
                    right: !myCampaignsPortrait,
                  }"
                >
                  <v-radio-group
                    v-model="campaignType"
                    mandatory
                    name="campaign-type"
                    @change="onChangeCampaignTypeHandler"
                    class="campaign-types"
                  >
                    <v-radio
                      v-for="item in campaignTypes"
                      :key="item.value"
                      :value="item"
                      active-class="selected"
                      class="campaign-type-option"
                      color="#000"
                    >
                      <template v-slot:label>
                        <v-col>
                          <v-row class="label">{{ item.label }}</v-row>
                          <v-row>{{ item.description }}</v-row>
                        </v-col>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </div>
              </section>
            </v-form>
          </template>
        </Collapsable>
      </section>
      <ul>
        <li
          v-for="(campaign, index) in myCampaignsList"
          v-bind:key="campaign.id"
        >
          {{ index }} {{ campaign.name }}
        </li>
      </ul>
    </div>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Collapsable from '@/shared-components/Collapsable.vue';

export default {
  name: 'MyCampaigns',
  components: {
    Collapsable,
  },
  data() {
    const campaignTypes = [
      {
        value: 'year-round-giving',
        label: 'Year Round Giving (Donate to Org)',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      },
      {
        value: 'live-event',
        label: 'Live Event / Gala (Dinner)',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      },
      {
        value: 'crowd-funding',
        label: 'Crowdfunding / Regular Campaign (Unidy / Standard)',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      },
    ];
    return {
      campaignTypes,
      campaignType: campaignTypes[0],
      valid: false,
      nameRules: [
        v => !!v || 'This is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
        v => (v && v.length >= 2) || 'Name must be at least 2 characters',
      ],
    };
  },
  created() {
    window.addEventListener('resize', this.onRisize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onRisize);
  },
  mounted() {
    this.myCampaignsUpdatePortrait(this.$el.clientWidth);
  },
  computed: {
    ...mapGetters([
      'myCampaignsPortrait',
      'myCampaignsList',
      'isNewCampaignOpen',
    ]),
  },
  methods: {
    ...mapActions([
      'myCampaignsUpdatePortrait',
      'myCampaignsAddNewCampaign',
      'myCampaignsRemoveCampaign',
      'myCampaignsToggleNewSection',
    ]),
    onRisize() {
      this.myCampaignsUpdatePortrait(this.$el.clientWidth);
    },
    createNewCampaign() {
      console.log('create new campaign');
    },
    toggleNewCampaignMode() {
      this.myCampaignsToggleNewSection();
    },
    onChangeCampaignTypeHandler(item) {
      console.log(item);
      // this.campaignType =
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

#my-campaigns {
  width: 100%;
  height: 100%;
  background-color: rgb(238, 238, 238);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: auto;

  .campaign-type-option {
    box-shadow: 0 0 0 1px $darkBorderAccentColor;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: $white50alpha;
    margin-bottom: 15px;
    transition: 0.5s $ease;

    &::v-deep {
      .v-input--selection-controls__input {
        margin-right: 15px;
      }
    }

    .label {
      font-size: 17px;
    }

    &.selected {
      box-shadow: 0 0 0 2px black;
    }
  }
}

.section {
  @extend .section;
}

.vertical-spacer {
  @extend .vertical-spacer;
}

.icon {
  font-size: 20px;
  margin-right: 10px;
}

h1 {
  margin-bottom: 20px;
}

.add-campaign-section {
  padding: 0 5%;
}

.campaign-types {
  margin-top: 0;
}
</style>
