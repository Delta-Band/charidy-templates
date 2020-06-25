<template>
  <v-form v-model="valid" class="new-campaign-form">
    <div class="d-flex flex-column inner">
      <div class="input-label">Campaign Name</div>
      <v-text-field
        height="50"
        class="text-input"
        counter
        color="#000"
        :rules="nameRules"
        v-model="name"
      ></v-text-field>
      <div class="description">
        Description here... Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.
      </div>
      <v-spacer />
      <v-btn
        class="add-btn"
        :disabled="!valid"
        text
        ripple
        height="50px"
        @click="createNewCampaign"
        >Add</v-btn
      >
    </div>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NewCampaignForm',
  props: {
    type: String,
  },
  data() {
    return {
      name: null,
      valid: false,
      nameRules: [
        (v) => !!v || 'This is required',
        (v) => (v && v.length <= 20) || 'Name must be less than 20 characters',
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
    ...mapActions([
      'myCampaignsAddNewCampaign',
      'myCampaignsToggleNewSection',
      'myCampaignsCloseNewSection',
    ]),
    createNewCampaign() {
      const that = this;
      const promise = this.myCampaignsAddNewCampaign({
        name: this.name,
        type: this.type,
      });
      
      promise.then((campaignId) => {
        that.$router.push({ name: 'wizard-cover', params: { campaignId } });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/shared-styles/index';

.new-campaign-form {
  @extend .campaignCard;
  margin-right: 0;

  .inner {
    height: 100%;
  }

  .description {
    padding: 20px;
  }
  .input-label {
    padding: 20px 20px 0 20px;
    // font-size: 12px;
    font-weight: bold;
  }
  .text-input {
    width: 90%;
    margin-left: 5%;
  }
  .add-btn {
    border-radius: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    transition: .5s $ease;
    margin-top: 20px;

    &::v-deep {
      .v-btn__content {
        transform: translateY(2px);
      }
    }

    &:disabled {
      background: rgba(0, 0, 0, 0.1);
      color: inherit;
    }
  }

  .spacer {
    height: 100%;
  }
}
</style>
