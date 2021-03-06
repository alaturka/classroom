import type { SidebarConfig } from '@vuepress/theme-default'

export const tr: SidebarConfig = {
  '/intro/': [
    {
      text: 'Giriş',
      children: [
        '/intro/README.md',
        '/intro/environment.md',
        '/intro/install.md',
        '/intro/manager.md',
      ],
    },
  ],
  '/guide/': [
    {
      text: 'Kılavuz',
      children: [
        '/guide/README.md',
      ],
    },
  ],
  '/refer/': [
    {
      text: 'Başvuru',
      collapsible: true,
      children: [
        '/refer/git.md',
        '/refer/github.md',
        '/refer/scoop.md',
      ],
    },
  ],
  '/help/': [
    {
      text: 'Yardım',
      children: [
        '/help/general.md',
        '/help/install.md',
        '/help/manager.md',
      ],
    },
  ],
}
