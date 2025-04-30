<script lang="ts" setup>
const { $swal } = useNuxtApp();

import ArticleCard from "../Common/ArticleCard.vue";
import Pagination from "../Common/Pagination.vue";
import SearchBar from "../Common/SearchBar.vue";

import type { ApiResponse } from "@/types/api";
import type { ArticleData } from "@/types/article";

const currentPage = ref(1);

// 抓取 API 資料
const { data, error, refresh, pending } = useFetch<ApiResponse<ArticleData[]>>(
  () => `/api/articles?page=${currentPage.value}`
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

// 變更頁數
const changePage = (page: number) => {
  currentPage.value = page;
};

// 監聽 currentPage，一旦頁數改變就觸發 refresh
watch(currentPage, () => {
  refresh();
});

// 不取最新文章的資料
const filteredArticles = computed(() => {
  return (data.value?.data || []).filter((_, index) => index !== 0);
});
</script>

<template>
  <main class="blog-articleList-section wrap border-top-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <SearchBar />
        </div>
      </div>
      <!-- Spinner：資料載入中 -->
      <div v-if="pending" class="f-center mt-10 mt-lg-0 wrap">
        <span class="fs-4 fs-lg-2">Loading...</span>
      </div>
      <!-- 文章列表 -->
      <div v-else class="row mt-10 mt-lg-0">
        <div
          v-for="article in filteredArticles"
          class="col-lg-6 col-xxl-4 py-4 py-lg-10"
          :key="article._id"
        >
          <ArticleCard :article="article" />
        </div>
      </div>
      <div class="f-justify-center">
        <ClientOnly>
          <Pagination
            v-if="data?.pagination && data.pagination.totalPages > 0"
            :total-pages="data.pagination.totalPages"
            :current-page="currentPage"
            @change-page="changePage"
          />
        </ClientOnly>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
