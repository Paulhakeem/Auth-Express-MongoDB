// https://nuxt.com/docs/api/configuration/nuxt-configs
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon"],
 
  // header
  app: {
    head: {
      title: "Authentication with Express And MongoDB",
    },
  },
  // server config variable
  runtimeConfig: {
    MONGO_CONN: process.env.MONGO_CONN,
  },

  // register nitro plugin
  nitro: {
    plugins: ["@/server/db/index.js"],
  },
});
