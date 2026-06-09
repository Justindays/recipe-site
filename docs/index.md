---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Justin 的食譜收藏"
  text: "我的私房料理筆記"
  tagline: 中式 · 西式 · 韓式 — 從家常到宴客，一鍵查閱
  image:
    src: /hero-food.svg
    alt: 食譜
  actions:
    - theme: brand
      text: 瀏覽所有食譜
      link: /中式/
    - theme: alt
      text: 隨機來一道
      link: /西式/西班牙海鮮燉飯_主廚秘訣

features:
  - title: 🥟 中式料理
    details: 蔥鹽醬、魷魚螺肉蒜、眷村涼麵 — 經典台式好味道
    link: /中式/
  - title: 🥖 西式料理
    details: 法棍麵包、西班牙海鮮飯、馬賽魚湯 — 在家也能做出餐廳級美味
    link: /西式/
  - title: 🥘 韓式料理
    details: 韓式小菜大集合、韓式泡菜鍋 — 從家常小菜到經典鍋物
    link: /韓式/
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #e58325 30%, #f5a623);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #e58325 50%, #f5a623 50%);
  --vp-home-hero-image-filter: blur(68px);
}
</style>
