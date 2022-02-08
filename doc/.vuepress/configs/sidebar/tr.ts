import type { SidebarConfig } from '@vuepress/theme-default'

export const tr: SidebarConfig = {
  '/guide/': [
    {
      text: 'Kılavuz',
      children: [
        '/guide/README.md',
        '/guide/environment.md',
        '/guide/install.md',
        '/guide/manager.md',
        '/guide/workflow.md',
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
        '/help/README.md',
      ],
    },
  ],
}
