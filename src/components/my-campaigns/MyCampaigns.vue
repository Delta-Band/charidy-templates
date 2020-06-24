<template>
  <v-app>
    <div id="my-campaigns">
      <div class="vertical-spacer" />
      <section class="section">
        <v-row
          align="center"
          justify="space-between"
          class="title-bar"
          no-gutters
        >
          <h1>My Campaigns</h1>
          <v-autocomplete
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
            outlined
            rounded
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
          </v-autocomplete>
        </v-row>
      </section>
      <v-col class="campaign-list" >
        <CampaignItem v-for="campaign in myCampaignsList" :campaign="campaign" v-bind:key="campaign.id" />
      </v-col>
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
            <NewCampaignForm />
          </template>
        </Collapsable>
      </section>
    </div>
  </v-app>
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
      searchPhrase: '',
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

.title-bar {
  margin-bottom: 40px;

  h1 {
    margin: 0;
    margin-right: 5%;
  }
}

.add-campaign-section {
  padding: 0 5%;
}

.campaign-types {
  margin-top: 0;
}

.campaign-list {
  flex-grow: 0;
  padding: 0 10%;
}

.chip {
  // border-radius: 3px;
  padding: 0 20px;
  height: 33px;
  margin: 0 10px 0 0;
  transform: translateX(-7px);
}

.search-box {
  max-width: 400px;

  &::v-deep {
    .v-input__slot {
      padding-left: 20px;
    }
  }
}
</style>

<style lang="scss">
.search-menu {
  background: green;
  border-radius: 5px !important;
  // max-width: 200px !important;
  // min-width: 0 !important;
  transform: translate(0, 7px);
}
</style>
