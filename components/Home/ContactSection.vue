<script lang="ts" setup>
interface MediaData {
  id: number;
  mediaName: string;
  mediaContent: string;
  iconImageUrl?: string;
}

const mediaList: MediaData[] = [
  {
    id: 1,
    mediaName: "alysewang@hexschool.com",
    mediaContent: "合作洽談",
  },
  {
    id: 2,
    mediaName: "Youtube",
    mediaContent: "職涯諮詢室",
    iconImageUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/icon/icon-YouTube.svg",
  },
  {
    id: 3,
    mediaName: "podcast",
    mediaContent: "職涯諮詢室",
    iconImageUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/icon/icon-ApplePodcasts.svg",
  },
  {
    id: 4,
    mediaName: "Facebook",
    mediaContent: "前端社群",
    iconImageUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/icon/icon-Facebook.svg",
  },
  {
    id: 5,
    mediaName: "linkedin",
    mediaContent: "職涯交流",
    iconImageUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/icon/icon-Linkedin.svg",
  },
  {
    id: 6,
    mediaName: "Instagram",
    mediaContent: "日常分享",
    iconImageUrl:
      "https://raw.githubusercontent.com/ahmomoz/hex2025-site-data/refs/heads/main/icon/icon-Instagram.svg",
  },
];
</script>

<template>
  <section class="home-contact-section wrap">
    <div class="container">
      <h2 class="d-lg-flex">與我聯繫</h2>
      <ul class="contact-list mt-6">
        <li
          v-for="{ id, mediaName, mediaContent, iconImageUrl } in mediaList"
          :key="id"
        >
          <a href="#" class="slide-right-hover">
            <div v-if="iconImageUrl" class="f-align-center">
              <div class="f-center" style="width: 44px; height: 44px">
                <img :src="iconImageUrl" :alt="`icon-${mediaName}`" />
              </div>
              <span class="ms-2">{{ mediaName }} {{ mediaContent }}</span>
            </div>
            <div v-else class="email-wrap f-sm-align-center">
              <span class="fs-4 fs-lg-2 text-decoration-underline">
                alysewang@hexschool.com
              </span>
              <span class="mt-2 mt-sm-0 ms-sm-4">合作洽談</span>
            </div>
            <div class="f-align-center">
              <i class="bi bi-arrow-right text-gray-01"></i>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-contact-section {
  border-bottom: 1px solid $brand-02;
}
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 16px;

  @include mobile {
    gap: 24px;
  }

  li {
    padding-bottom: 16px;
    border-bottom: 1px solid $black;
  }

  a,
  span {
    color: $black;
    font-size: 28px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include pad {
      font-size: 24px;
    }

    @include mobile {
      flex-direction: column;
      align-items: start;
    }
  }
}
.email-wrap {
  @include mobile {
    flex-direction: column;
    align-items: start;
  }
}
</style>
