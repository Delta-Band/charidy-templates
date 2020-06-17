const state = {
  portrait: false,
}

const getters = {
  wizardPortrait: state => state.portrait,
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
  }
};

const mutations = {
  wizardUpdatePortrait: (state, bool) => (state.portrait = bool),
};

export default {
  state,
  getters,
  actions,
  mutations,
}