<template>
  <div class="campaign-list-item" :style="{'width': `calc((100% - 40px) / ${myCampaignsColumns})`}">
    <v-col>
      <v-toolbar flat class="tool-bar">
        <v-toolbar-title>
          <div class="d-flex flex-column">
            <b>{{ campaign.name }}</b>
            <div class="type">{{ getReadableType(campaign.type) }}</div>
          </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-responsive :aspect-ratio="16 / 9" class="cover-image">
        <img
          src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        />
      </v-responsive>
      <div class="cover-image" />
      <CompletionOverview :campaign="campaign" />
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CompletionOverview from './CompletionOverview';

export default {
  name: 'CampaignItem',
  components: {
    CompletionOverview,
  },
  props: {
    campaign: Object,
  },
  computed: {
    ...mapGetters(['myCampaignsPortrait', 'campaignTypes', 'myCampaignsColumns']),
  },
  methods: {
    goToWizard() {
      this.$router.push({
        name: 'wizard-cover',
        params: { campaignId: this.campaign.id },
      });
    },
    getReadableType(type) {
      return this.campaignTypes.find((itm) => itm.value === type).label;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

.campaign-list-item {
  border: 1px solid $greyDark;
  background: $white50alpha;
  border-radius: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  margin-right: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  opacity: 0;
  @extend .popIn;
  overflow: hidden;
  text-align: left;

  &:nth-of-type(3n) {
    margin-right: 0;
  }

  &::v-deep {
    .col {
      padding: 0;
    }
  }

  .tool-bar {
    height: auto !important;
    padding: 16px 26px;
    // padding-bottom: 250px;

    &::v-deep {
      .v-toolbar__content {
        height: auto !important;
        padding: 0;
      }
    }

    .type {
      font-size: 15px;
    }
  }

  .summary {
    padding: 50px 30px;
  }

  .cover-image {
    width: 100%;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
