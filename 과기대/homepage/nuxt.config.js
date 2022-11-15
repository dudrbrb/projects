import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // server: { port: 80 } ,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '',
    title: 'NEW HORIZONS',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  buildModules: [
    'nuxt-compress',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],
  modules: [
    '@nuxtjs/device',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  styleResources: {
    scss: [
      '@/assets/main.scss',
    ],
  },
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  env: {
    baseUrl: "http://www.seoultech-id-degreeshow-2022.com",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // serverMiddleware: {
  //   '/api': '~/api'
  // },
  serverMiddleware: ['~/api/index.js'],
  axios: {
    // baseURL: process.env.baseUrl,
  }
}

