const state = {
  portrait: false,
  campaignsList: [],
}

const getters = {
  myCampaignsPortrait: state => state.portrait,
  myCampaignsList: state => state.campaignsList,
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
};

export default {
  state,
  getters,
  actions,
  mutations,
}