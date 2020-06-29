const state = {
  portrait: false,
  showSavedIndicator: false,
}

const getters = {
  wizardPortrait: (state) => state.portrait,
  showSavedIndicator: (state) => state.showSavedIndicator,
  // wizardCover: state => state.cover,
  // wizardGoalTime: state => state.goalTime,
  // wizardStory: state => state.story,
  // wizardLevels: state => state.levels,
  // wizardTeam: state => state.team,
  // wizardMatchers: state => state.matchers,
  // wizardCustomize: state => state.customize,
};

const actions = {
  wizardUpdatePortrait({ commit }, wizardWidth) {
    if (wizardWidth <= 1105) {
      if (!this.state.wizard.portrait) {
        commit('wizardUpdatePortrait', true);
      }
    } else if (this.state.wizard.portrait) {
      commit('wizardUpdatePortrait', false);
    }
  },
  showSavedIndicator({ commit }) {
    commit('toggleSavedIndicator', true);
  },
  hideSavedIndicator({ commit }) {
    commit('toggleSavedIndicator', false);
  }
};

const mutations = {
  wizardUpdatePortrait: (state, bool) => (state.portrait = bool),
  toggleSavedIndicator: (state, bool) => (state.showSavedIndicator = bool),
};

export default {
  state,
  getters,
  actions,
  mutations,
}