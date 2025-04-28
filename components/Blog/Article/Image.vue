<script lang="ts" setup>
const { url } = defineProps<{ url: string }>();
</script>

<template>
  <img
    :src="url"
    alt="article-image"
    class="img-fluid object-fit w-100"
    loading="lazy"
  />
</template>

<style lang="scss" scoped></style>
