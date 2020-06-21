const state = {
  portrait: false,
  cover: {
    advanced: false,
  }
}

const getters = {
  wizardPortrait: state => state.portrait,
  wizardCover: state => state.cover,
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
  wizardUpdateCover({ commit }, update) {
    commit('wizardUpdateCover', update);
  }
};

const mutations = {
  wizardUpdatePortrait: (state, bool) => (state.portrait = bool),
  wizardUpdateCover: (state, update) => (state.cover = Object.assign({}, state.cover, update)),
};

export default {
  state,
  getters,
  actions,
  mutations,
}