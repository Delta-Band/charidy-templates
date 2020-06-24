import md5 from 'md5';

const state = {
  portrait: false,
  campaignsList: [],
  isNewCampaignOpen: false,
  campaignTypes: [
    {
      value: 'year-round-giving',
      label: 'Year Round Giving (Donate to Org)',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    },
    {
      value: 'live-event',
      label: 'Live Event / Gala (Dinner)',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    },
    {
      value: 'crowd-funding',
      label: 'Crowdfunding / Regular Campaign (Unidy / Standard)',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    },
  ],
};

const getters = {
  myCampaignsPortrait: (state) => state.portrait,
  myCampaignsList: (state) => state.campaignsList,
  campaignTypes: (state) => state.campaignTypes,
  isNewCampaignOpen: (state) => state.isNewCampaignOpen,
};

const actions = {
  myCampaignsUpdatePortrait({ commit }, myCampaignsWidth) {
    if (myCampaignsWidth <= 1105) {
      if (!this.state.myCampaigns.portrait) {
        commit('myCampaignsUpdatePortrait', true);
      }
    } else if (this.state.myCampaigns.portrait) {
      commit('myCampaignsUpdatePortrait', false);
    }
  },
  myCampaignsAddNewCampaign({ commit }, newCampaign) {
    commit('myCampaignsAddNewCampaign', newCampaign);
  },
  myCampaignsRemoveCampaign({ commit }, campaignId) {
    commit('myCampaignsRemoveCampaign', campaignId);
  },
  myCampaignsToggleNewSection({ commit }) {
    commit('myCampaignsToggleNewSection');
  },
};

const mutations = {
  myCampaignsUpdatePortrait: (state, bool) => {
    state.portrait = bool;
  },
  myCampaignsAddNewCampaign: (state, { name, type }) => {
    const id = md5(`${name}-${type}`);
    state.campaignsList.push({
      id,
      name,
      type,
    });
  },
  myCampaignsRemoveCampaign: (state, campaignId) => {
    state.campaignsList = state.campaignsList.filter(
      (cmp) => cmp.id !== campaignId
    );
  },
  myCampaignsToggleNewSection: (state) => {
    state.isNewCampaignOpen = !state.isNewCampaignOpen;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
