import { defineConfig } from 'vitepress'
import { zh } from "./lang/zh";
import { en } from "./lang/en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EasyTidy",
  description: "一个简单的文件整理工具",
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/logo/favicon.ico" }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo/logo.svg',
    search: {
      provider: 'local',
      options: {
        // https://vitepress.dev/zh/reference/default-theme-search
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档"
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search"
              },
              modal: {
                noResultsText: "No results found",
                resetButtonTitle: "Reset",
                footer: {
                  selectText: "Select",
                  navigateText: "Navigate",
                  closeText: "to close",
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SaboZhang/EasyTidy' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present SaboZhang'
    }
  },
  // i18n
  locales: {
    root: {
      label: "简体中文",
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
