// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-04-24",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css",
        },
      ],
      viewport: "width=500, initial-scale=1",
      title: "Alyse Wang - 前端工程師 & 職涯諮詢師",
      meta: [
        {
          name: "description",
          content: "這是 Alyse Wang 的個人網站",
        },
        {
          property: "og:title",
          content: "Alyse Wang - 前端工程師 & 職涯諮詢師",
        },
        { property: "og:url", content: "http://localhost:3000/" },
        {
          property: "og:description",
          content: "這是 Alyse Wang 的個人網站",
        },
      ],
    },
  },
  css: ["@/assets/stylesheets/all.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "bootstrap/scss/functions"; 
          @import "@/assets/stylesheets/scss/utils/variables";
          @import "@/assets/stylesheets/scss/utils/mixin";`,
        },
      },
    },
  },
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "active",
    },
  },
});
