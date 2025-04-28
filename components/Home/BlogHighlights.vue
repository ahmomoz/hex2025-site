<script lang="ts" setup>
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ArticleCard from "../Common/ArticleCard.vue";

/* swiper */
const swiperRef = ref<HTMLElement | null>(null);
onMounted(() => {
  nextTick(() => {
    if (!swiperRef.value) return;
    new Swiper(swiperRef.value, {
      loop: false,
      slidesPerView: 3,
      spaceBetween: 24,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        996: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      modules: [Navigation, Autoplay],
    });
  });
});

/* data */
interface HighLightArticleData {
  id: number;
  thumbnailUrl: string;
  tag: string;
  category?: string;
  title: string;
  content: string;
  date: string;
}
const highlightArticles: HighLightArticleData[] = [
  {
    id: 1,
    thumbnailUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/article-thumbnails/article-thumbnails-1.png",
    tag: "前端開發 x 職涯成長",
    category: "最新文章",
    title: "自學前端不用怕：從零開始的三大關鍵",
    content:
      "嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！",
    date: "2024/10/21",
  },
  {
    id: 2,
    thumbnailUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/article-thumbnails/article-thumbnails-2.png",
    tag: "#面試準備 #工程師求職",
    category: "人氣文章",
    title: "前端面試不再慌：破解常見提問的三大策略",
    content:
      "面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。",
    date: "2024/07/08",
  },
  {
    id: 3,
    thumbnailUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/article-thumbnails/article-thumbnails-3.png",
    tag: "#CSS設計 #視覺體驗",
    title: "CSS 魔法大揭密：排版與設計的三大關鍵技巧",
    content:
      "在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。",
    date: "2024/09/03",
  },
  {
    id: 4,
    thumbnailUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/article-thumbnails/article-thumbnails-4.png",
    tag: "#React #入門基礎",
    title: "React 入門不再迷惘：三步驟帶你上手核心概念",
    content:
      "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。",
    date: "2024/10/11",
  },
];
</script>

<template>
  <section class="home-blogHighlights-section border-top-bottom wrap">
    <div class="container">
      <h2>部落格精選</h2>
      <div class="service-card-wrap position-relative">
        <div class="swiper" ref="swiperRef">
          <div class="swiper-wrapper f-align-center">
            <div
              v-for="article in highlightArticles"
              class="swiper-slide"
              :key="article.id"
            >
              <ArticleCard :article="article" />
            </div>
          </div>
        </div>
        <ClientOnly>
          <div class="swiper-btn-wrap">
            <div class="swiper-btn-primary swiper-button-prev"></div>
            <div class="swiper-btn-primary swiper-button-next"></div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.service-card-wrap {
  margin-top: 24px;
}
.swiper-btn-wrap {
  @include xxxl-pc {
    display: flex;
    justify-content: flex-end;
    gap: 40px;
    margin-top: 32px;
  }
}
.swiper-btn-primary {
  margin: 0 -80px;

  @include xxxl-pc {
    position: relative;
    margin: 0;
  }
}
</style>
