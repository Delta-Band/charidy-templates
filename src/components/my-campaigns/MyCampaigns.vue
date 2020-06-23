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
                <div class="input-title">Title</div>
                <v-text-field
                  height="50"
                  class="text-input"
                  counter
                  color="#000"
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
                <div class="input-title">Title</div>
                <v-text-field
                  height="50"
                  class="text-input"
                  counter
                  color="#000"
                ></v-text-field>
              </div>
            </section>
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
</style>
