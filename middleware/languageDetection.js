export default function ({ app, isServer, route, store, isDev }) {
  const version = route.query._storyblok || isDev ? 'draft' : 'published'
  const language = route.params.language || 'it'

  if (isServer) {
    store.commit('setCacheVersion', app.$storyapi.cacheVersion)
  }

  if (language !== store.state.language) {
    store.commit('setLanguage', language)

    return store.dispatch('loadSettings', {
      version,
      language
    })
  }
}
