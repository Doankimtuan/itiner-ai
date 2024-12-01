// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
  ],

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      login: "/",
      callback: "/confirm",
      exclude: ["/api/*"],
    },
  },

  fonts: {
    defaults: {
      weights: [400],
      styles: ["normal", "italic"],
      subsets: ["latin-ext", "latin"],
    },
    families: [
      { name: "Montserrat", provider: "google" },
      { name: "Roboto", provider: "google" },
      { name: "Poppins", provider: "google" },
    ],
  },

  compatibilityDate: "2024-11-30",
});