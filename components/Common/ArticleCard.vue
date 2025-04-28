<script lang="ts" setup>
interface Article {
  id: number;
  thumbnailUrl: string;
  tag: string;
  category?: string;
  title: string;
  content: string;
  date: string;
}
const props = defineProps<{
  article: Article;
}>();

const { thumbnailUrl, tag, category, title, content, date } = props.article;
</script>

<template>
  <article class="article-card card bg-transparent rounded-0">
    <img
      :src="thumbnailUrl"
      class="card-img-top rounded-0"
      alt="article-thumbnail"
    />
    <div class="card-body h-100 p-0">
      <time>
        <p class="fw-medium lh-base mt-4">{{ date }}</p>
      </time>
      <div class="article-tag-wrap f-align-center mt-1">
        <h4 class="text-primary">{{ tag }}</h4>
        <span v-if="category" class="tag-primary ms-2">
          {{ category }}
        </span>
      </div>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-text text-truncate-2 mt-2" style="max-height: 48px">
        {{ content }}
      </p>
      <div class="mt-auto pt-4">
        <NuxtLink
          :to="`/blogs/${article.id}`"
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
