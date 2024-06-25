// https://nuxt.com/docs/api/configuration/nuxt-configs
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
    "@vesp/nuxt-fontawesome",
  ],

  css: ['~/assets/css/main.css'],

  // header
  app: {
    head: {
      title: "Authentication with Express And MongoDB",
    },
  },

  // register nitro plugin
  nitro: {
    plugins: ["@/server/db/index.js"],
  },

  // fontawesome: {
  //   icons: {
  //     solid: ['facebook', 'twitter', 'github', 'linkedin'],
  //     regular: ['user']
  //   }
  // }
});