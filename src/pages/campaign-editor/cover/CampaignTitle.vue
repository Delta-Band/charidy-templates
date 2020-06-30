<template>
  <div
    class="campaign-title"
    :class="{
      portrait: wizardPortrait,
    }"
  >
    <section
      :class="{
        top: wizardPortrait,
        left: !wizardPortrait,
      }"
    >
      <div class="label">
        Campaign Title
        <RequiredTag />
      </div>
      <p>
        Write a clear, brief title that helps people quickly understand the gist
        of your project.
      </p>
    </section>
    <section
      :class="{
        bottom: wizardPortrait,
        right: !wizardPortrait,
      }"
    >
      <div class="input-title">Title</div>
      <v-text-field
        height="50"
        class="text-input"
        counter
        color="#000"
        @change="saveTitle"
        :value="details.cover.title"
      ></v-text-field>
      <Tip class="text-input-tip">Title tip...</Tip>
      <div class="input-title">Subtitle</div>
      <v-text-field
        height="50"
        class="text-input"
        counter
        color="#000"
      ></v-text-field>
      <Tip class="text-input-tip">Subtitle tip...</Tip>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Tip from '@/shared-components/Tip';
import RequiredTag from "@/shared-components/RequiredTag";

export default {
  name: 'CampaignTitle',
  components: {
    Tip,
    RequiredTag,
  },
  computed: {
    ...mapGetters(['wizardPortrait', 'campaignDetails']),
    details() {
      return this.campaignDetails(this.$router.currentRoute.params.campaignId);
    },
  },
  methods: {
    ...mapActions(['updateCampaign', 'showSavedIndicator']),
    saveTitle(val) {
      this.showSavedIndicator();
      this.updateCampaign({
        campaignId: this.$router.currentRoute.params.campaignId,
        updates: {
          cover: {
            title: val,
          },
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

.campaign-title {
  width: 100%;
  display: flex;
  @extend .section;
}

.text-input {
  @extend .text-input;
  flex-grow: 1;
}

.text-input-tip {
  margin-top: -12px;
  margin-bottom: 32px;
}

.tag {
  @extend .tag;
}
</style>
