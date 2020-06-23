const state = {
  portrait: false,
  campaignsList: [],
  isNewCampaignOpen: false,
}

const getters = {
  myCampaignsPortrait: state => state.portrait,
  myCampaignsList: state => state.campaignsList,
  isNewCampaignOpen: state => state.isNewCampaignOpen,
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
  myCampaignsAddNewCampaign: (state, newCampaign) => {
    state.campaignsList.unshift(newCampaign);
  },
  myCampaignsRemoveCampaign: (state, campaignId) => {
    state.campaignsList = state.campaignsList.filter(cmp => cmp.id !== campaignId);
  },
  myCampaignsToggleNewSection: state => {
    state.isNewCampaignOpen = !state.isNewCampaignOpen;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}