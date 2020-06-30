<template>
  <v-responsive
    :aspect-ratio="0.6"
    class="campaign-list-item"
    :style="{
      width: `calc((100% - ${(numberOfColumns - 1) * (7.5 * 0.25)}%) / ${numberOfColumns})`,
      marginRight: `${(index + 1) % numberOfColumns === 0 ? 0 : (7.5 * 0.25)}%`,
    }"
  >
    <div class="d-flex flex-column inner-container">
      <div class="d-flex justify-space-between">
        <v-responsive :aspect-ratio="1" class="pic-ratio-box">
          <v-avatar color="rgba(0, 0, 0, 0.1)" class="pic">
            <!-- <img
            src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
          /> -->
          </v-avatar>
        </v-responsive>
        <v-btn icon class="menu">
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </div>
      <div class="name">{{ campaign.name }}</div>
      <div class="type">{{ getReadableType(campaign.type) }}</div>
      <CompletionOverview :campaign="campaign" />
    </div>
  </v-responsive>
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
    index: Number,
    numberOfColumns: Number,
  },
  computed: {
    ...mapGetters([
      'myCampaignsPortrait',
      'campaignTypes',
    ]),
  },
  methods: {
    getReadableType(type) {
      return this.campaignTypes.find((itm) => itm.value === type).shortLabel;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

$guttter: 7.5%;

.campaign-list-item {
  border: 1px solid $greyDark;
  background: rgba(black, 0.03);
  border-radius: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  margin-right: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  opacity: 0;
  @extend %popIn;
  overflow: hidden;
  text-align: left;
  line-height: 1.5em;

  .inner-container {
    height: 100%;
  }

  .pic-ratio-box {
    width: 28%;
    margin: #{0.75 * $guttter} 0 #{0.75 * $guttter} #{0.75 * $guttter};
    flex-grow: 0;

    .pic {
      width: 100% !important;
      height: 100% !important;
      border: 1px solid black !important;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .menu {
    margin: #{0.75 * $guttter};
    transform: translate(5px, -5px);
  }

  .name {
    padding: 0 $guttter;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: #{0.1 * $guttter};
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden
    ;
  }

  .type {
    padding: 0 $guttter;
  }

  // &::v-deep {
  //   .col {
  //     padding: 0;
  //   }
  // }

  // .tool-bar {
  //   height: auto !important;
  //   padding: 16px 26px;
  //   // padding-bottom: 250px;

  //   &::v-deep {
  //     .v-toolbar__content {
  //       height: auto !important;
  //       padding: 0;
  //     }
  //   }

  //   .type {
  //     font-size: 15px;
  //   }
  // }

  // .summary {
  //   padding: 50px 30px;
  // }

  // .cover-image {
  //   width: 100%;
  // }
}
</style>
