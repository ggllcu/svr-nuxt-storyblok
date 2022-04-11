import { createSEOMeta } from "./utils/seo";
import { getRoutes } from "./utils/routes";

const axios = require('axios')

export default async () => {
  const routes = await getRoutes();

  return {
    /*
    ** Nuxt rendering mode
    ** See https://nuxtjs.org/api/configuration-mode
    */
    // mode: 'universal',
    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: process.env.TARGET,

    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
      title: 'Scaligera Valeggio Rugby | Takai',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // { hid: 'description', name: 'description', content: 'Scaligera Valeggio Rugby. Società di rugby in provincia di Verona. nati dopo il 2005' },
        ...createSEOMeta({
          title: "Scaligera Valeggio Rugby | Takai",
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
      '@nuxtjs/gtm',
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
    gtm: {
      id: 'GTM-NJJ92HN'
    },
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
          'home',
          'it/setting',
          'it/societa',
          'it/home',
          'it/sponsor'
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
            
            routes = routes.filter(route => !route.includes('categories'));
      
            callback(null, routes)
          })
        })
      }
    },
    loading: false,
    sitemap: {
      hostname: process.env.HOST_NAME,
      gzip: true,
      routes: routes
    },
    pwa: {
      manifest: {
        name: 'Scaligera Valeggio Rugby',
        short_name: 'SVR 2015',
        lang: 'it',
        description: "Scaligera Valeggio Rugby. Società di rugby in provincia di Verona. Per tutti i giocatori nati dopo il 2005"
      }
    }
  }
}

