<script lang="ts" setup>
const { $swal } = useNuxtApp();

import { formatDateToYMD } from "@/utils/date";

import type { ApiResponse } from "@/types/api";
import type { ArticleData } from "@/types/article";

// 抓取 API 資料
const { data, error } = useFetch<ApiResponse<ArticleData[]>>(
  () => `/api/articles?latest=true`
);
// 錯誤處理
if (error.value) {
  $swal.fire({
    position: "center",
    icon: "error",
    title: error?.value || "發生未知錯誤，請稍後再試",
    showConfirmButton: false,
    timer: 1500,
  });
}
const latestArticle = computed(() => data.value?.data);
</script>

<template>
  <section class="blog-newArticle-section border-top-bottom">
    <div class="container-fluid">
      <div class="row">
        <div class="image-wrap col-xxl-6 bg"></div>
        <div class="content-wrap col-xxl-6 bg">
          <article
            v-if="latestArticle"
            class="article-card card bg-transparent rounded-0"
          >
            <div class="card-body h-100 p-0">
              <time>
                <p class="fw-medium lh-base">
                  {{ formatDateToYMD(latestArticle.createdAt) }}
                </p>
              </time>
              <div class="article-tag-wrap f-align-center mt-1">
                <ul class="f-align-center">
                  <li
                    v-for="(tag, index) in latestArticle.tags"
                    :key="index"
                    class="me-2"
                  >
                    <h4 class="text-primary">{{ tag }}</h4>
                  </li>
                </ul>
                <span class="tag-primary">最新文章</span>
              </div>
              <h3 class="card-title">{{ latestArticle.title }}</h3>
              <p
                class="card-text text-truncate-2 mt-2"
                style="max-height: 48px"
              >
                {{ latestArticle.preview }}
              </p>
              <div class="mt-auto pt-4">
                <NuxtLink
                  :to="`/blogs/${latestArticle._id}`"
                  class="btn btn-outline-black lh-base"
                >
                  閱讀內文
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.blog-newArticle-section {
  @include lg-pc {
    margin-top: -200px;
  }
}
.image-wrap {
  background-image: url(/assets/images/backgrounds/bg-5.jpg);

  padding: 206px 0;

  @include pad {
    padding: 187px 0;
  }

  img {
    @include mobile {
      width: 100%;
    }
  }
}
.content-wrap {
  padding: 206px 312px 206px 24px;

  @include xxl-pc {
    padding: 48px 12px;
  }
}
.text-truncate-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
