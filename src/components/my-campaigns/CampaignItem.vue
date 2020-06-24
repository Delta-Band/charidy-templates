<template>
  <div class="campaign-list-item">
    <v-col>
      <v-toolbar dense flat class="tool-bar">
        <v-toolbar-title
          ><b>{{ campaign.name }}</b>
          <span class="type">{{ getReadableType(campaign.type) }}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon size="21px">mdi-pencil</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon size="25px">mdi-cash-usd-outline</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-row no-gutters v-bind:key="campaign.id" class="summary">
        <v-col align="start">
          Completion State... / Live Stats...
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CampaignItem',
  props: {
    campaign: Object,
  },
  computed: {
    ...mapGetters(['myCampaignsPortrait', 'campaignTypes']),
  },
  methods: {
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
  width: 100%;
  flex-shrink: 0;
  @extend .popIn;
  overflow: hidden;

  &::v-deep {
    .col {
      padding: 0;
    }
  }

  .type {
    font-size: 15px;
    margin-left: 10px;
  }

  .tool-bar {
    border-bottom: 1px solid $greyDark;
  }

  .summary {
    padding: 20px;
  }
}
</style>
