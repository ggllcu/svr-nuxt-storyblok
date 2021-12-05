const axios = require('axios')

export const getRoutes = async () => {
  const token = '34avQMupdMtN0r8mDGVVTgtt'
  const version = 'published'
  let cacheVersion = 0

  let toIgnore = [
    'home',
    'it/settings',
    'it/societa',
    'it/home',
    'it/sponsor'
  ]

  let routes = ['/']

  const space_res = await axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)

  cacheVersion = space_res.data.space.version

  const res = await axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cacheVersion}&per_page=100`)

  Object.keys(res.data.links).forEach((key) => {
    if (!toIgnore.includes(res.data.links[key].slug)) {
      routes.push('/' + res.data.links[key].slug)
    }
  })

  routes = routes.filter(route => !route.includes('categories'));

  // console.log('routes routes', routes)

  return routes
}