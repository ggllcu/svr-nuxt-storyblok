export const state = () => ({
  cacheVersion: '',
  language: 'it',
  settings: {
    main_navi: []
  },
  mainSponsors: {}
})

export const mutations = {
  setSettings (state, settings) {
    state.settings = settings
  },
  setLanguage (state, language) {
    state.language = language
  },
  setCacheVersion (state, version) {
    state.cacheVersion = version
  },
  setMainSponsors (state, mainSponsors) {
    state.mainSponsors = mainSponsors
  }
}

export const actions = {
  loadSettings ({ commit }, context) {
    return this.$storyapi.get(`cdn/stories/${context.language}/settings`, {
      version: context.version
    }).then((res) => {
      commit('setSettings', res.data.story.content)
    })
  },
  loadMainSponsors ({ commit }, context) {
    return this.$storyapi.get(`cdn/stories/${context.language}/settings`, {
      version: context.version
    }).then((res) => {
      commit('setMainSponsors', res.data.story.content)
    })
  }
}
