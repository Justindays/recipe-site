import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Justin 的食譜收藏',
  description: 'Justin 的私房食譜收藏',
  lang: 'zh-TW',
  base: '/recipe-site/',

  themeConfig: {
    logo: 'https://api.iconify.design/fluent:food-24-regular.svg',

    nav: [
      { text: '首頁', link: '/' },
      { text: '中式', link: '/中式/' },
      { text: '西式', link: '/西式/' },
      { text: '韓式', link: '/韓式/' },
    ],

    sidebar: {
      '/中式/': [
        {
          text: '中式料理',
          items: [
            { text: '分類首頁', link: '/中式/' },
            { text: '特製蔥鹽醬', link: '/中式/特製蔥鹽醬' },
            { text: '魷魚螺肉蒜', link: '/中式/魷魚螺肉蒜' },
          ]
        }
      ],
      '/西式/': [
        {
          text: '西式料理',
          items: [
            { text: '分類首頁', link: '/西式/' },
            { text: '法國長棍麵包', link: '/西式/法國長棍麵包' },
            { text: '4步驟簡易長棍麵包', link: '/西式/4步驟簡易長棍麵包' },
            { text: '西班牙海鮮燉飯', link: '/西式/西班牙海鮮燉飯_主廚秘訣' },
            { text: '馬賽魚湯 Bouillabaisse', link: '/西式/馬賽魚湯_Bouillabaisse' },
          ]
        }
      ],
      '/韓式/': [
        {
          text: '韓式料理',
          items: [
            { text: '分類首頁', link: '/韓式/' },
            { text: '韓式小菜大集合', link: '/韓式/韓式小菜大集合' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/justindays/recipe-site' },
    ],

    footer: {
      message: '由 Hermes Agent 自動整理',
      copyright: 'Copyright © 2026 Justin'
    },

    search: {
      provider: 'local'
    }
  },

  lastUpdated: true,
  cleanUrls: true,
})