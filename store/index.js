export const state = () => ({
  cacheVersion: '',
  language: 'it',
  settings: {
    main_navi: []
  },
  mainSponsors: []
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
    return this.$storyapi.get('cdn/stories', {
      version: context.version,
      starts_with: `${context.language}/sponsors`,
      filter_query: {
        categories: {
          in_array: '4349dbde-514f-4d7d-93dd-8c9d053f2cc3'
        }
      }
    }).then((res) => {
      commit('setMainSponsors', res.data.stories)
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
