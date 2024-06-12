// https://nuxt.com/docs/api/configuration/nuxt-configs
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],

  app: {
    head: {
      title: "Authentication with Express And MongoDB",
    },
  },
});
