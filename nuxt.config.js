export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Sporty Ski",
    title: "Welkom",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
  ],
  router: {
    middleware: ["auth"]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyC6PgejkK7hapOwbsVbl1wZELP7ssAsurc",
          authDomain: "sportyski-f3f42.firebaseapp.com",
          projectId: "sportyski-f3f42",
          storageBucket: "sportyski-f3f42.appspot.com",
          messagingSenderId: "948852769566",
          appId: "1:948852769566:web:b0a98492d500888112ff0f",
          measurementId: "G-77RS9QJX85"
        },
        services: {
          auth: {
            persistence: "local", // default
            initialize: {
              onAuthStateChangedAction: "onAuthStateChangedAction",
              subscribeManually: false
            },
            ssr: true
          }
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "nl"
    },
    workbox: {
      importScripts: [
        // ...
        "/firebase-auth-sw.js"
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === "development"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
