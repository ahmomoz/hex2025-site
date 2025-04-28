<script lang="ts" setup></script>

<template>
  <div class="position-relative f-align-center">
    <input
      type="search"
      class="form-control bg-white py-4"
      placeholder="搜尋你感興趣的文章"
      aria-label="Search"
    />
    <span class="material-symbols-outlined position-absolute ms-4">search</span>
  </div>
</template>

<style lang="scss" scoped>
input {
  font-size: 16px;
  padding-left: 50px;
  border-radius: 40px;
  border: 1px solid $gray-01;
}
</style>
