<template>
  <v-app>
    <div id="my-campaigns">
      <section>
        <div class="vertical-spacer"/>
        <h1>My Campaigns</h1>
      </section>
    </div>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

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
    onRisize() {
      this.myCampaignsUpdatePortrait(this.$el.clientWidth);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../shared-styles/index";

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