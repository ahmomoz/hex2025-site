<script setup lang="ts">
import { computed } from 'vue';

// 接收分頁總頁數和當前頁
const props = defineProps<{
  totalPages: number;
  currentPage: number;
}>();

// 定義 emit 事件
const emit = defineEmits<{
  (e: 'change-page', page: number): void;
}>();

// 生出頁碼列表
const pages = computed(() =>
  Array.from({ length: props.totalPages }, (_, i) => i + 1)
);

// 輔助 function：上一頁、下一頁
const goPrev = () => {
  if (props.currentPage > 1) emit('change-page', props.currentPage - 1);
};
const goNext = () => {
  if (props.currentPage < props.totalPages)
    emit('change-page', props.currentPage + 1);
};
</script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination py-2 px-5">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <button class="page-link" @click="goPrev" aria-label="Previous">
          <i class="bi bi-chevron-left"></i>
        </button>
      </li>

      <li
        v-for="page in pages"
        :key="page"
        class="page-item"
        :class="{ active: page === currentPage }"
      >
        <button
          class="page-link"
          @click="emit('change-page', page)"
        >
          {{ page }}
        </button>
      </li>

      <li
        class="page-item"
        :class="{ disabled: currentPage === totalPages }"
      >
        <button class="page-link" @click="goNext" aria-label="Next">
          <i class="bi bi-chevron-right"></i>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.page-link {
  font-weight: 500;
}
</style>
