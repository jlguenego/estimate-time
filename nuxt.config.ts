import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  nitro: {
    preset: "static",
  },
  app: {
    baseURL: "/estimate-time/",
  },
  ssr: true,
});
