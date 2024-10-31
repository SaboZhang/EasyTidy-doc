import { defineConfig } from 'vitepress'
import { zh } from "./lang/zh";
import { en } from "./lang/en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EasyTidy",
  description: "一个简单的文件整理工具",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/logo/favicon.ico" }]],
  themeConfig: {
    logo: '/logo/logo.svg',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/zh/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/zh/markdown-examples' },
          { text: 'Runtime API Examples', link: '/zh/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SaboZhang/Organize' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present SaboZhang'
    }
  },
  locales: {
    root: {
      label: "中文",
      lang: "zh",
      ...zh,
    },
    en: {
      label: "English",
      lang: "en",
      ...en,
    },
  },
})
