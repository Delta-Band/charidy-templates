const state = {
  portrait: false,
  cover: {
    advanced: false,
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
}

const getters = {
  wizardPortrait: state => state.portrait,
  wizardCover: state => state.cover,
  wizardGoalTime: state => state.goalTime,
  wizardStory: state => state.story,
  wizardLevels: state => state.levels,
  wizardTeam: state => state.team,
  wizardMatchers: state => state.matchers,
  wizardCustomize: state => state.customize,
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
  },
  wizardUpdateGoalTime({ commit }, update) {
    commit('wizardUpdateGoalTime', update);
  },
  wizardUpdateStory({ commit }, update) {
    commit('wizardUpdateStory', update);
  },
  wizardUpdateLevels({ commit }, update) {
    commit('wizardUpdateLevels', update);
  },
  wizardUpdateTeam({ commit }, update) {
    commit('wizardUpdateTeam', update);
  },
  wizardUpdateMatchers({ commit }, update) {
    commit('wizardUpdateMatchers', update);
  },
  wizardUpdateCustomize({ commit }, update) {
    commit('wizardUpdateCustomize', update);
  },
};

const mutations = {
  wizardUpdatePortrait: (state, bool) => (state.portrait = bool),
  wizardUpdateCover: (state, update) => (state.cover = Object.assign({}, state.cover, update)),
  wizardUpdateGoalTime: (state, update) => (state.goalTime = Object.assign({}, state.goalTime, update)),
  wizardUpdateStory: (state, update) => (state.story = Object.assign({}, state.story, update)),
  wizardUpdateLevels: (state, update) => (state.levels = Object.assign({}, state.levels, update)),
  wizardUpdateTeam: (state, update) => (state.team = Object.assign({}, state.team, update)),
  wizardUpdateMatchers: (state, update) => (state.matchers = Object.assign({}, state.matchers, update)),
  wizardUpdateCustomize: (state, update) => (state.customize = Object.assign({}, state.customize, update)),
};

export default {
  state,
  getters,
  actions,
  mutations,
}