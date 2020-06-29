import md5 from 'md5';
import merge from 'deepmerge';
// import Router from 'vue-router';

const state = {
  portrait: false,
  campaignsList: [],
  isNewCampaignOpen: false,
  campaignTypes: [
    {
      value: 'year-round-giving',
      label: 'Year Round Giving (Donate to Org)',
      shortLabel: 'Year Round Giving',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    },
    {
      value: 'live-event',
      label: 'Live Event / Gala (Dinner)',
      shortLabel: 'Live Event / Gala',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    },
    {
      value: 'crowd-funding',
      label: 'Crowdfunding / Regular Campaign (Unidy / Standard)',
      shortLabel: 'Crowdfunding',
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
  campaignDetails: (state) => (id) => {
    if (id) {
      return state.campaignsList.find((itm) => itm.id === id);
    }
    return null;
  },
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
  myCampaignsAddNewCampaign({ commit }, { name, type }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const id = md5(`${name}-${type}`);
        commit('myCampaignsAddNewCampaign', {
          id,
          name,
          type,
          cover: {
            image: null,
            video: null,
            title: null,
            subtitle: null,
            countdownImage: null,
          },
          goalTime: {},
          story: {},
          levels: {},
          team: {},
          matchers: {},
          customize: {},
        });
        resolve(id);
      }, 500);
    });
  },
  myCampaignsRemoveCampaign({ commit }, campaignId) {
    commit('myCampaignsRemoveCampaign', campaignId);
  },
  myCampaignsToggleNewSection({ commit }) {
    commit('myCampaignsToggleNewSection');
  },
  myCampaignsCloseNewSection({ commit }) {
    commit('myCampaignsCloseNewSection');
  },
  updateCampaign({ commit }, payload) {
    commit('updateCampaign', payload);
  },
};

const mutations = {
  myCampaignsUpdatePortrait: (state, bool) => {
    state.portrait = bool;
  },
  myCampaignsAddNewCampaign: (state, newCampaign) => {
    state.campaignsList.push(newCampaign);
  },
  myCampaignsRemoveCampaign: (state, campaignId) => {
    state.campaignsList = state.campaignsList.filter(
      (cmp) => cmp.id !== campaignId
    );
  },
  myCampaignsToggleNewSection: (state) => {
    state.isNewCampaignOpen = !state.isNewCampaignOpen;
  },
  myCampaignsCloseNewSection: (state) => {
    state.isNewCampaignOpen = false;
  },
  updateCampaign: (state, {campaignId, updates}) => {
    const index = state.campaignsList.findIndex((itm) => itm.id === campaignId);
    state.campaignsList[index] = merge(state.campaignsList[index], updates);
    console.log(updates);
    console.log(state.campaignsList[index]);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
