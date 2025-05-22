import { defineConfig } from 'vitepress'
import lightbox from 'vitepress-plugin-lightbox'

import { enConfig, zhTwConfig } from "./lang/configs.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [ 'link', { rel: 'icon', type:'image/png',href: '/images/favicon-96x96.png', sizes: '96x96' } ],
    [ 'link', { rel: 'icon', type:'image/svg+xml', href: '/images/favicon.svg' } ],
    [ 'link', { rel: 'shortcut icon', type:'image/png', href: '/images/favicon.ico' } ],
    [ 'link', { rel: 'apple-touch-icon', href: '/images/favicon.ico', sizes: '180x180' } ],
    [ 'meta', { name: 'apple-mobile-web-app-title', content: 'Clonezilla' } ],
    [ 'link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/stevenshiau/clonezilla' }
    ],
    logo: '/images/clonezilla-logo-small.png'
  },

  cleanUrls: true,
  rewrites: {
    'en/:rest*': ':rest*'
  },

  locales: {
    root: enConfig,
    'zh-tw': zhTwConfig,
  },

  markdown: {
    image: {
      lazyLoading: true,
    },
    config: (md) => {
      md.use(lightbox, {})
    }
  },

  srcDir: 'src'
})
