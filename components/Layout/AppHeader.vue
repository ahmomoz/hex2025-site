<script lang="ts" setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <ul class="w-100 f-center">
        <li class="nav-item">
          <NuxtLink
            class="fs-3 fw-bold nav-link underline-hover p-0"
            aria-current="page"
            to="/"
          >
            首頁
          </NuxtLink>
        </li>
        <li class="nav-item ms-10">
          <NuxtLink
            class="fs-3 fw-bold nav-link underline-hover p-0"
            to="/blogs"
          >
            部落格
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
