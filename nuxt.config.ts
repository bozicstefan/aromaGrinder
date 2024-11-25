// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    'radix-vue/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/content',
    '@formkit/nuxt',
    "@nuxt/scripts",
    "@nuxtjs/turnstile",
  ],

  turnstile: {
    siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
    addValidateEndpoint: true,
  },
  runtimeConfig: {
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
    CDN_URL: "",
    MAILER_USER: process.env.MAILER_USER,
    MAILER_PASSWORD: process.env.MAILER_PASSWORD,
  },

  nitro: {
    minify: true,
    compressPublicAssets: true,
    
    storage: {
      "assets:server": {
        driver: "fs",
        base: "./assets",
      },
    },
  },

  formkit: {
    configFile: './formkit.config.js'
  }
})