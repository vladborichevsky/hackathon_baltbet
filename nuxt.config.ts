export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/webp', href: '/favicon.webp' }
      ],
      title: 'Хакатон. Идеи в действии',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'charset', content: 'utf-8' }
      ]
    }
  },
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  nitro: {
    preset: 'static'
  }
})

