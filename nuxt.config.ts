// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/supabase",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
  ],
  css: ["~/assets/css/main.css"],
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
});
