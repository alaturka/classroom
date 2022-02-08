import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  markdown: {
    code: {
      lineNumbers: false
    },
  },

  plugins: [
    "@snippetors/vuepress-plugin-code-copy"
  ],

  locales: {
    '/': {
      lang: 'tr-TR',
      title: 'Classroom',
      description: 'Programlama Dersliği',

      head: [
          ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
          ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
          ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
          ['link', { rel: 'manifest', href: '/site.webmanifest' }],
          ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
          ['meta', { name: 'theme-color', content: '#5d2f86', media: '(prefers-color-scheme: light)' }],
          ['meta', { name: 'theme-color', content: '#8ed6fb', media: '(prefers-color-scheme: dark)'  }],
          ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
          ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],

          ['meta', { property: 'og:url', content: 'https://classroom.alaturka.dev/' }],
          ['meta', { property: 'og:title', content: 'Classroom' }],
          ['meta', { property: 'og:image', content: '/images/icon/purple.png' }],
          ['meta', { property: 'twitter:card', content: 'https://classroom.alaturka.dev/images/icon/purple.png' }],
          ['meta', { property: 'og:description', content: 'Programla Dersliği' }],
          ['meta', { property: 'og:locale', content: 'tr_TR' }],
          ['meta', { property: 'og:locale:alternate', content: 'en_US' }],
          ['meta', { property: 'og:width', content: '100'}],
      ],
    },
    '/en/': {
      lang: 'en-US',
      title: 'Classroom',
      description: 'Classroom Programming Environment',

      head: [
          ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
          ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
          ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
          ['link', { rel: 'manifest', href: '/site.webmanifest' }],
          ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
          ['meta', { name: 'theme-color', content: '#5d2f86', media: '(prefers-color-scheme: light)' }],
          ['meta', { name: 'theme-color', content: '#8ed6fb', media: '(prefers-color-scheme: dark)'  }],
          ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
          ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],

          ['meta', { property: 'og:url', content: 'https://classroom.alaturka.dev/en/' }],
          ['meta', { property: 'og:title', content: 'Classroom' }],
          ['meta', { property: 'og:image', content: '/images/icon/purple.png' }],
          ['meta', { property: 'twitter:card', content: 'https://classroom.alaturka.dev/images/icon/purple.png' }],
          ['meta', { property: 'og:description', content: 'Classroom Programming Environment' }],
          ['meta', { property: 'og:locale', content: 'en_US' }],
          ['meta', { property: 'og:width', content: '100'}],
      ],
    },
  },

  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/icon/purple.svg',
    logoDark: '/images/icon/cyan.svg',

    locales: {
      '/': {
        navbar: navbar.tr,
        selectLanguageName: 'Türkçe',
        selectLanguageText: 'Dil',
        selectLanguageAriaLabel: 'Dil',

        sidebar: sidebar.tr,

        editLinkText: 'Bu sayfayı Github üzerinde düzenle',
        contributorsText: 'Yazarlar',
        lastUpdatedText: 'Son Güncelleme',

        tip: 'İpucu',
        danger: 'Dikkat',
        warning: 'Uyarı',
        details: 'Bilgi',
      },

      '/en/': {
        navbar: navbar.en,
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        selectLanguageAriaLabel: 'Language',

        sidebar: sidebar.en,
      },
    },
  },
})
