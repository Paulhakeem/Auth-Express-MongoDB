// https://nuxt.com/docs/api/configuration/nuxt-configs
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", 'nuxt-icon'],

  app: {
    head: {
      title: "Authentication with Express And MongoDB",
    },
  },
  runtimeConfig: {
    MONGO_CONN: process.env.MONGO_CONN,
  },
})
