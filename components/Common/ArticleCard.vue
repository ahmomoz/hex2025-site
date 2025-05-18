<script lang="ts" setup>
import { formatDateToYMD } from "@/utils/date";
import type { ArticleData } from "@/types/article";

const props = defineProps<{
  article: ArticleData;
}>();

const { _id, thumbnailUrl, tags, category, title, preview, createdAt } =
  props.article;
</script>

<template>
  <article class="article-card card card-column h-100 bg-transparent rounded-0">
    <img
      :src="thumbnailUrl"
      class="card-img-top rounded-0"
      alt="article-thumbnail"
    />
    <div class="card-body card-column p-0">
      <time>
        <p class="fw-medium lh-base mt-4">{{ formatDateToYMD(createdAt) }}</p>
      </time>
      <div class="article-tag-wrap f-align-center mt-1">
        <ul class="f-align-center">
          <li v-for="(tag, index) in tags" :key="index" class="me-2">
            <h4 class="text-primary">{{ tag }}</h4>
          </li>
        </ul>
        <span v-if="category" class="tag-primary ms-2">
          {{ category }}
        </span>
      </div>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text text-truncate-2 mt-2" style="max-height: 48px">
        {{ preview }}
      </p>
      <div class="mt-auto pt-4">
        <NuxtLink
          :to="`/blogs/${_id}`"
          class="btn btn-outline-black lh-base"
        >
          閱讀內文
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.article-card {
  width: 416px;

  @include xxl-pc {
    width: 100%;
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
