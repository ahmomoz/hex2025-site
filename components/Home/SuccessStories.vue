<script setup lang="ts">
import PodcastCard from "../Common/PodcastCard.vue";

/* data */
interface PodcastData {
  id: number;
  avatarUrl: string;
  title: string;
  features: string[];
}
const podcasts: PodcastData[] = [
  {
    id: 1,
    avatarUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/avatars/avatar-1.png",
    title: "無經驗到前端工程師 Offer",
    features: ["打造前端專案與履歷亮點", "深度強化面試表現"],
  },
  {
    id: 2,
    avatarUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/avatars/avatar-2.png",
    title: "轉職迷茫到明確學習規劃",
    features: ["制訂階段性目標與時間安排", "鼓勵參與前端社群或活動"],
  },
  {
    id: 3,
    avatarUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/avatars/avatar-3.png",
    title: "面試緊張到從容應對",
    features: [
      "透過面試模擬找出常犯的邏輯漏洞",
      "討論遇到不熟悉議題時的回應方式",
    ],
  },
  {
    id: 4,
    avatarUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/avatars/avatar-4.png",
    title: "面試緊張到從容應對",
    features: ["擬定進階框架或技術研究目標", "培養跨團隊溝通與簡報能力"],
  },
];
</script>

<template>
  <section class="home-successStories-section wrap">
    <div class="container">
      <h2 class="d-lg-flex">
        <span class="d-block">職涯諮詢</span>
        <span class="d-block">成功案例</span>
      </h2>
      <div class="row mt-6">
        <div class="col-lg-7">
          <div class="success-stories-image bg-gray-02 p-6">
            <picture>
              <source
                srcset="
                  https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main//thumbnails/thumbnail-6.jpg
                "
                media="(max-width: 596px)"
              />
              <img
                src="https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main//thumbnails/thumbnail-5.png"
                class="card-img-top img-fluid w-100"
                alt="article-image"
              />
            </picture>
          </div>
        </div>
        <div class="col-lg-5 success-stories-content-wrap">
          <div
            class="success-stories-content bg-white py-10 py-xxl-13 px-6 px-xxl-10"
          >
            <div style="width: 40px; height: 40px">
              <img
                src="https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/deco/deco-line.svg"
                alt="blue-line"
              />
            </div>
            <p class="fw-bold mt-6">
              在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效
              <span class="text-primary">突破原有的舒適圈</span>
              。
            </p>
          </div>
          <div
            class="success-stories-content bg-gray-02 py-10 py-xxl-13 px-6 px-xxl-10"
          >
            <div style="width: 40px; height: 40px">
              <img
                src="https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/deco/deco-line.svg"
                alt="blue-line"
              />
            </div>
            <p class="fw-bold mt-6">
              期待在下一個新機會中，我能與你一起攜手邁向更高峰！
            </p>
            <a href="#" class="btn btn-outline-primary fw-bold lh-base mt-6">
              立即預約諮詢
            </a>
          </div>
        </div>
      </div>
      <div class="row podcast-card-wrap bg-gray-02 p-6 mt-10">
        <div
          class="col-lg-6 col-xxl-3"
          v-for="podcast in podcasts"
          :key="podcast.id"
        >
          <PodcastCard :podcast="podcast" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.success-stories-image {
  @include mobile {
    height: 626px;
  }

  @include mobile {
    height: 100%;
  }

  img {
    @include lg-pc {
      width: 100%;
    }
  }
}
.success-stories-content-wrap {
  padding: 30px 0;

  @include xl-pc {
    padding: 0;
  }
}
.success-stories-content:nth-child(1) {
  margin-left: -200px;
  margin-right: 220px;

  @include lg-pc {
    margin: -100px 0 0;
  }
}
.success-stories-content:nth-child(2) {
  margin-top: -40px;

  @include lg-pc {
    margin: 0;
  }
}
.podcast-card-wrap {
  @include xxl-pc {
    gap: 24px;
  }
}
</style>
