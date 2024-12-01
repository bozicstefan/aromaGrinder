// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "radix-vue/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@formkit/nuxt",
    "@nuxt/scripts",
    "@nuxtjs/turnstile",
  ],
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
  turnstile: {
    siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
    addValidateEndpoint: true,
  },
  runtimeConfig: {
    public: {
      websiteURL: process.env.NUXT_PUBLIC_WEBSITE_URL,
    },
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
    CDN_URL: "",
    MAILER_USER: process.env.MAILER_USER,
    MAILER_PASSWORD: process.env.MAILER_PASSWORD,
  },
  formkit: {
    configFile: "./formkit.config.js",
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Aroma Grinder",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          "http-equiv": "x-ua-compatible",
          content: "IE=edge",
          tagPosition: "head",
          tagPriority: "critical",
        },
        {
          name: "description",
          content:
            "Aroma Grinder - Coffee Grinder that delivers the ultimate aroma experience",
        },
        { name: "robots", content: "max-snippet:-1, max-image-preview:large" },
        { name: "author", content: "Aroma Grinder" },
        { name: "twitter:site", content: "@aromagrinder" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Aroma Grinder" },
        {
          name: "twitter:description",
          content: "Aroma Grinder - The Ultimate Aroma Experience",
        },
        {
          name: "robots",
          content: "index,follow",
        },
        // {name:'google-site-verification',content:'GOOGLE SEARCH CONSOLE CONFIRMATION KEY HERE'},
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/grinder-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/grinder-icon.png",
        },
        {
          rel: "canonical",
          href: "https://aromagrinder.com",
        },
      ],
    },
  },

  routeRules:{
   '/':{prerender: true},
   '/about-us':{prerender: true},
   '/products':{prerender: true},
   '/blog/**':{prerender: true, swr: true},
   '/faq':{prerender: true},
  }
});
