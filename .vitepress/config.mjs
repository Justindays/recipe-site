import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Justin 的食譜收藏",
  description: "我的私房料理筆記",
  lang: 'zh-TW',

  themeConfig: {
    siteTitle: "🍳 Justin 的食譜收藏",

    sidebar: {
      '/中式/': [
        {
          text: '中式料理 🇨🇳',
          items: [
            { text: '特製蔥鹽醬', link: '/中式/特製蔥鹽醬' },
            { text: '魷魚螺肉蒜', link: '/中式/魷魚螺肉蒜' },
            { text: '眷村涼麵', link: '/中式/眷村涼麵' },
          ]
        }
      ],
      '/西式/': [
        {
          text: '西式料理 🥩',
          items: [
            { text: '西班牙海鮮燉飯（主廚秘訣）', link: '/西式/西班牙海鮮燉飯_主廚秘訣' },
            { text: '西班牙海鮮飯（Afterwork Kitchen）', link: '/西式/西班牙海鮮飯_AfterworkKitchen' },
            { text: '法國長棍麵包', link: '/西式/法國長棍麵包' },
            { text: '4步驟簡易長棍麵包', link: '/西式/4步驟簡易長棍麵包' },
            { text: '馬賽魚湯', link: '/西式/馬賽魚湯_Bouillabaisse' },
          ]
        }
      ],
      '/韓式/': [
        {
          text: '韓式料理 🇰🇷',
          items: [
            { text: '韓式小菜大集合', link: '/韓式/韓式小菜大集合' },
            { text: '韓式泡菜鍋', link: '/韓式/韓式泡菜鍋_孫榮Kai' },
            { text: '青蔥小菜大全', link: '/韓式/青蔥小菜大全' },
          ]
        }
      ],
    }
  }
})