<template>
  <v-app>
    <div id="my-campaigns">
      <section>
        <div class="vertical-spacer" />
        <h1>My Campaigns</h1>
        <v-btn class="create btn" ripple rounded @click="createNewCampaign">
          <v-icon class="icon">mdi-plus</v-icon>New Campaign
        </v-btn>
        <ul>
          <li
            v-for="(campaign, index) in myCampaignsList"
            v-bind:key="campaign.id"
          >{{index}} {{campaign.name}}</li>
        </ul>
      </section>
    </div>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MyCampaigns",
  components: {},
  created() {
    window.addEventListener("resize", this.onRisize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onRisize);
  },
  mounted() {
    this.myCampaignsUpdatePortrait(this.$el.clientWidth);
  },
  methods: {
    ...mapActions([
      "myCampaignsUpdatePortrait",
      "myCampaignsAddNewCampaign",
      "myCampaignsRemoveCampaign"
    ]),
    ...mapGetters(["myCampaignsPortrait", "myCampaignsList"]),
    onRisize() {
      this.myCampaignsUpdatePortrait(this.$el.clientWidth);
    },
    createNewCampaign() {
      console.log('create new campaign');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/shared-styles/index";

#my-campaigns {
  width: 100%;
  height: 100%;
  background-color: rgb(238, 238, 238);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

section {
  @extend .section;
}

.vertical-spacer {
  @extend .vertical-spacer;
}
</style>