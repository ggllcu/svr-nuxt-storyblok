export const state = () => ({
  cacheVersion: '',
  language: 'it',
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
  },
  setLatestPosts (state, latestPosts) {
    state.latestPosts = latestPosts
  }
}

export const actions = {
  loadMainSponsors ({ commit }, context) {
    return this.$storyapi.get('cdn/stories', {
      version: context.version,
      starts_with: `${context.language}/sponsor/sponsors`,
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
  },
  loadLatestPosts ({ commit }, context) {
    return this.$storyapi.get('cdn/stories', {
      version: context.version,
      starts_with: `${context.language}/news`,
      page: 1,
      per_page: 3
    }).then((res) => {
      // console.log('posts', res.data)
      commit('setLatestPosts', res.data.stories)
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
