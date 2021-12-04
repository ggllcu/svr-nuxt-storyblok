import { createSEOMeta } from "./utils/seo";

const axios = require('axios')

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  // target: process.env.TARGET,
  target: 'static',
  // ssr: process.env.SSR === 'false' ? false : true,
  ssr: true,

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Scaligera Valeggio Rugby | Squadra in provincia di Verona',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      ...createSEOMeta({
        title: "Scaligera Valeggio Rugby",
        description: "Scaligera Valeggio Rugby. Società di rugby in provincia di Verona. Per tutti i giocatori nati dopo il 2005",
        image: "https://a.storyblok.com/f/91547/828x315/48404bb618/placeholder_scaligera_valeggio_rugby.png",
        url: process.env.HOST_NAME,
      }),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss'
  ],
  buefy: {
    materialDesignIcons: false,
    materialDesignIconsHRef: '/'
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/filters.js',
    '~/plugins/components.js'
    // '~/plugins/vue-number-animation.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */

  googleFonts: {
    families: {
      'Source+Code+Pro': true,
    }
  },
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { css: false, materialDesignIcons: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    [
      'storyblok-nuxt',
      {
        accessToken: '34avQMupdMtN0r8mDGVVTgtt',
        cacheProvider: 'memory'
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  router: {
    middleware: ['languageDetection', 'getMainSponsors', 'getLatestPosts']
  },
  generate: {
    routes: function (callback) {
      const token = '34avQMupdMtN0r8mDGVVTgtt'
      const version = 'published'
      let cacheVersion = 0

      let toIgnore = [
        '/home',
        '/it/settings',
        '/it/societa',
        '/it/home',
        '/it/sponsor'
      ]

      // other routes that are not in Storyblok with their slug.
      let routes = ['/'] // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {

        // timestamp of latest publish
        cacheVersion = space_res.data.space.version

        // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
        axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cacheVersion}&per_page=100`).then((res) => {
          Object.keys(res.data.links).forEach((key) => {
            if (!toIgnore.includes(res.data.links[key].slug)) {
              routes.push('/' + res.data.links[key].slug)
            }
          })

          routes = routes.filter(route => route.includes('category'));

          callback(null, routes)
        })
      })
    }
  },
  loading: false,
  sitemap: {
    hostname: process.env.HOST_NAME,
    gzip: true
  }
}

