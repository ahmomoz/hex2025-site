<script lang="ts" setup></script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination py-2 px-5">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <i class="bi bi-chevron-left"></i>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <i class="bi bi-chevron-right"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.page-link {
  font-weight: 500;
}
</style>
