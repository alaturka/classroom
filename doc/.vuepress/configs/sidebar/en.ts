import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/intro/': [
    {
      text: 'Introduction',
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
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/c.md',
        '/guide/ruby.md',
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
