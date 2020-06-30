<template>
  <div id="my-campaigns" class="d-flex flex-column">
    <div class="app-bar"></div>
    <div class="scrollable">
      <section class="section title-bar">
        <h1>My Campaigns</h1>
        <!-- <v-autocomplete
            v-model="searchPhrase"
            :items="myCampaignsList"
            chips
            clearable
            hide-details
            hide-selected
            item-text="name"
            item-value="name"
            label="Search..."
            solo
            flat
            color="#000"
            class="search-box"
            :menu-props="{
              contentClass: 'search-menu',
            }"
          >
            <template v-slot:no-data>
              <v-list-item>
                <v-list-item-title>
                  My Campaigns
                </v-list-item-title>
              </v-list-item>
            </template>
            <template v-slot:selection="{ attr, on, item, selected }">
              <v-chip
                v-bind="attr"
                :input-value="selected"
                color="rgba(0, 0, 0, 0.1)"
                v-on="on"
                class="chip"
              >
                <span v-text="item.name"></span>
              </v-chip>
            </template>
            <template v-slot:item="{ item }">
              <v-list-item-content>
                <v-list-item-title>
                  <v-row no-gutters>
                    {{ item.name }}
                  </v-row>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>mdi-coin</v-icon>
              </v-list-item-action>
            </template>
          </v-autocomplete> -->
      </section>
      <section class="section new-campaign">
        <Collapsable
          :isOpen="isNewCampaignOpen"
          @toggle="toggleNewCampaignMode"
          container="#my-campaigns"
        >
          <template v-slot:title>
            <div class="new-campaign-toggle-txt">New Campaign</div>
          </template>
          <template v-slot:content>
            <NewCampaignForm />
          </template>
        </Collapsable>
      </section>
      <div class="d-flex flex-wrap justify-start campaign-list-wrapper">
        <CampaignItem
          v-for="(campaign, index) in myCampaignsList"
          :campaign="campaign"
          :numberOfColumns="numberOfColumns"
          :index="index"
          v-bind:key="campaign.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Collapsable from '@/shared-components/Collapsable.vue';
import NewCampaignForm from './NewCampaignForm';
import CampaignItem from './CampaignItem';

export default {
  name: 'MyCampaigns',
  components: {
    Collapsable,
    NewCampaignForm,
    CampaignItem,
  },
  data: () => {
    return {
      // searchPhrase: '',
      numberOfColumns: 4,
    };
  },
  created() {
    window.addEventListener('resize', this.onRisize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onRisize);
  },
  mounted() {
    this.onRisize();
  },
  computed: {
    ...mapGetters([
      'myCampaignsPortrait',
      'myCampaignsList',
      'isNewCampaignOpen',
      'campaignTypes',
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
      this.numberOfColumns = Math.floor(this.$el.clientWidth / 400);
    },
    toggleNewCampaignMode() {
      this.myCampaignsToggleNewSection();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

$gutter: 10vw;

#my-campaigns {
  width: 100vw;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: white;
  overflow: hidden;

  .campaign-list-wrapper {
    padding: 0 $gutter;

    .type {
      text-align: left;
      padding: 20px 0;
    }
  }

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

.scrollable {
  height: 100%;
  overflow: auto;
}

.section {
  padding: 0 $gutter;
}

.title-bar {
  margin-top: #{0.4 * $gutter};
  margin-bottom: #{0.1 * $gutter};
  text-align: left;

  h1 {
    margin: 0;
  }
}

.new-campaign {
  margin-bottom: #{0.3 * $gutter};
}

.new-campaign-toggle-txt {
  height: 16px;
}

.campaign-list {
  flex-grow: 0;
  position: relative;

  @for $i from 1 through 6 {
    :nth-child(#{$i}) {
      animation-delay: ($i - 1) * 0.12s;
    }
  }
}

// .chip {
//   // border-radius: 3px;
//   padding: 0 20px;
//   height: 33px;
//   margin: 0 10px 0 0;
//   transform: translateX(-7px);
// }

// .search-box {
//   max-width: 400px;

//   &::v-deep {
//     .v-input__slot {
//       padding-left: 20px;
//     }
//   }
// }

.app-bar {
  @extend %app-bar;
}
</style>

//
<style lang="scss">
// .search-menu {
//   background: green;
//   border-radius: 5px !important;
//   // max-width: 200px !important;
//   // min-width: 0 !important;
//   transform: translate(0, 7px);
// }
//
</style>
