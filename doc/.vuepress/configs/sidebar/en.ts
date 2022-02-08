import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
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
      text: 'Reference',
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
      text: 'Help',
      collapsible: true,
      children: [
        '/help/general.md',
        '/help/issues.md',
        '/help/manager.md',
      ],
    },
  ],
}
