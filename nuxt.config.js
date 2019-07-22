const pkg = require('./package')

module.exports = {
  mode: 'universal',

  generate: {
    routes: [
      // '/films/test-post-3',
      // '/films/test-post-2',
      // '/films/test-post-1',
      // '/films/adems-island',
      // '/films/test-article',
      // '/films/women-of-the-national-front',
      // '/films/when-i-was-a-boy-i-was-a-girl',
      // '/films/when-im-at-home',
      // '/news/selection-committee-for-german-international-ethnographic-film-festival',
      // '/news/makron-u-bgu',
      // '/news/test-news',
      // '/news/first-short-fiction-film',
      // '/news/master-class-at-the-serbian-film-center',
      // '/news/two-7-day-workshopin-kulturwissenschaft-an-der-uni-koblenc-germany',
      // '/news/test-news-3',
      // '/news/test-news-2',
      // '/news/test-news-1',
      '404'
    ],
    fallback: "404.html"
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: ["@/assets/scss/main.scss"],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/custom.js",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/apollo'
  ],
  /*
  ** Axios module configuration
  */
  apollo: {
    clientConfigs: {
      default: "~/plugins/apollo-config.js"
    }
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
