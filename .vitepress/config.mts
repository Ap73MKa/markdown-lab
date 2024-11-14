import { defineConfig } from 'vitepress'

const config = defineConfig({
  title: "Markdown Lab",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'Projects', link: '/list' },
    ],
    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Palleto', link: '/projects/palleto' },
          { text: 'Shorty', link: '/projects/shorty' },
          { text: 'Text Vision', link: '/projects/text-vision' },
          { text: 'Concert Parser', link: '/projects/telegram-parser' }
        ]
      }
    ],
  }
})

export default config