<script lang="ts" setup>
const { title } = defineProps<{ title: string }>();
</script>

<template>
  <div class="row">
    <div class="left-hero-wrap col-lg-6 bg"></div>
    <div class="right-hero-wrap col-lg-6 bg">
      <div class="right-text-content ps-lg-13">
        <h1 class="text-primary fw-bolder">{{ title }}</h1>
        <h3 class="text-primary mt-3">前端工程師 & 職涯諮詢師</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-hero-wrap {
  background-image: url(/assets/images/backgrounds/bg-1.jpg);
  padding: 300px 0;

  @include pad {
    padding: 175px 0;
  }
}

.right-hero-wrap {
  background-image: url(/assets/images/backgrounds/bg-2.jpg);
  padding: 300px 0;

  @include lg-pc {
    padding: 24px 0 200px;
  }
}

.right-text-content {
  @include lg-pc {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
  }
}
</style>
