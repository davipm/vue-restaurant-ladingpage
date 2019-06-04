import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'IFood',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'IFood Project' },

      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'https://ifood-project.netlify.com'},
      {property: 'og:image', content: 'http://cms.ajaxti.com.br/wp-content/uploads/2019/04/logo.svg'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'IFood Project.'},

      // Twitter card
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: 'https://ifood-project.netlify.com'},
      {name: 'twitter:url', content: 'https://ifood-project.netlify.com'},
      {name: 'twitter:title', content: 'IFood Project'},
      {name: 'twitter:description', content: 'IFood Project'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@davipmdev'},
      {name: 'twitter:image:src', content: 'http://cms.ajaxti.com.br/wp-content/uploads/2019/04/logo.svg'},

      // Google / Schema.org markup:
      {itemprop: 'name', content: 'IFood Project'},
      {itemprop: 'description', content: 'IFood Project'},
      {itemprop: 'image', content: 'http://cms.ajaxti.com.br/wp-content/uploads/2019/04/logo.svg'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: 'plugins/owl.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
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
