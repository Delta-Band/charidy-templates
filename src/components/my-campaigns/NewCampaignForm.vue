<template>
  <v-form v-model="valid" class="new-campaign-form">
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
          v-model="name"
          autofocus
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
          v-model="type"
          mandatory
          name="campaign-type"
          class="campaign-types"
        >
          <v-radio
            v-for="item in campaignTypes"
            :key="item.value"
            :value="item.value"
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
    <v-row justify="end" align="center" class="footer">
      <v-btn
        class="save-btn"
        :disabled="!valid"
        text
        ripple
        rounded
        @click="createNewCampaign"
        >Start
        <v-icon class="icon">mdi-chevron-right</v-icon>
        </v-btn
      >
    </v-row>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NewCampaignForm',
  data() {
    return {
      type: null,
      name: null,
      valid: false,
      nameRules: [
        (v) => !!v || 'This is required',
        (v) => (v && v.length <= 40) || 'Name must be less than 40 characters',
        (v) => (v && v.length >= 2) || 'Name must be at least 2 characters',
      ],
    };
  },
  destroyed() {
    this.myCampaignsCloseNewSection();
  },
  computed: {
    ...mapGetters(['myCampaignsPortrait', 'campaignTypes']),
  },
  methods: {
    ...mapActions(['myCampaignsAddNewCampaign', 'myCampaignsToggleNewSection', 'myCampaignsCloseNewSection']),
    createNewCampaign() {
      const that = this;
      const promise = this.myCampaignsAddNewCampaign({
        name: this.name,
        type: this.type,
      });
      promise.then(campaignId => {
        that.$router.push({ name: 'wizard-cover', params: { campaignId } });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

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

.section {
  @extend .section;
}

.vertical-spacer {
  @extend .vertical-spacer;
}

.add-campaign-section {
  padding: 0 5%;
}

.campaign-types {
  margin-top: 0;
}

.new-campaign-form {
  .footer {
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0 5%;
    margin-top: 50px;
    margin-bottom: -20px;
  }
  .save-btn {
    background-color: black;
    color: white;
    padding: 0 25px 0 40px;
    transition: 0.5s $ease;

    &:disabled {
      background-color: rgba(black, 0.1);
    }

    &:hover {
      .icon {
        transform: translateX(33%);
      }
    }

    .icon {
      transition: .3s $ease;
    }
  }
}
</style>
