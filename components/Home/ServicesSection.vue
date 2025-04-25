<script lang="ts" setup>
/* data */
interface ServiceData {
  id: number;
  title: string;
  content: string;
}

const services: ServiceData[] = [
  {
    id: 1,
    title: "履歷健檢",
    content:
      "履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引",
  },
  {
    id: 2,
    title: "線上諮詢",
    content:
      "想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。",
  },
  {
    id: 3,
    title: "網頁開發",
    content:
      "想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。",
  },
  {
    id: 4,
    title: "企業內訓",
    content:
      "想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。",
  },
];
</script>

<template>
  <section class="home-service-section wrap">
    <div class="container">
      <h2>專業服務與方案</h2>
      <div class="service-card-wrap">
        <div
          v-for="{ id, title, content } in services"
          :key="id"
          :class="[
            'service-card',
            id % 2 !== 0 ? 'f-lg-align-center' : 'f-lg-row-center',
          ]"
        >
          <div class="service-image">
            <img
              :src="`https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/thumbnails/thumbnail-${id}.png`"
              alt="service-thumbnail"
              class="img-fluid"
            />
          </div>
          <div
            class="service-content bg-white p-6"
            :class="id % 2 !== 0 ? 'push-left' : 'push-right'"
          >
            <div style="width: 40px; height: 40px">
              <img
                src="https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/deco/deco-line.svg"
                alt="blue-line"
              />
            </div>
            <h3>{{ title }}</h3>
            <p class="fw-medium mt-2">
              {{ content }}
            </p>
          </div>
        </div>
      </div>
      <a href="#" class="service-contact-link fs-3 fw-bold slide-right-hover">
        聯繫我，取得更多資訊！
        <span class="material-symbols-outlined black-border-circle-btn ms-2">
          arrow_right_alt
        </span>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
p {
  color: $gray-01;
}
.service-card-wrap {
  padding: 32px 110px;

  @include xxl-pc {
    padding: 32px 0;
  }
}
.service-card:not(:first-child) {
  margin-top: 64px;

  @include pad {
    margin-top: 32px;
  }
}
.service-content {
  width: 480px;
  z-index: 2;

  @include lg-pc {
    width: 100%;
    margin-left: 0;
  }
}
.service-contact-link {
  color: $black;
  text-align: end;
}

// 卡片位移
.push-left {
  margin-left: -40px;

  @include lg-pc {
    margin-left: 0;
  }
}
.push-right {
  margin-right: -40px;

  @include lg-pc {
    margin-right: 0;
  }
}
</style>
