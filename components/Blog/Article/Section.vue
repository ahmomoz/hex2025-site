<script lang="ts" setup>
const { title } = defineProps<{ title: string }>();
</script>

<template>
  <section class="blog-article-section">
    <h2 class="section-title">{{ title }}</h2>
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.section-title {
  font-size: 28px;
  font-weight: 700;
  color: $primary;
}
</style>
