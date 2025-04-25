<script lang="ts" setup>
interface PodcastData {
  id: number;
  avatarUrl: string;
  title: string;
  features: string[];
}
const { podcast } = defineProps<{
  podcast: PodcastData;
}>();

const { avatarUrl, title, features } = toRefs(podcast);
</script>

<template>
  <div class="podcast-card card-column">
    <div class="podcast-card_avatar">
      <img :src="avatarUrl" class="card-img-top rounded-circle" alt="avatar" />
    </div>
    <div class="card-body h-100 px-0">
      <h4 class="fw-bold mt-4">{{ title }}</h4>
      <ul class="pt-2 pb-4">
        <li
          class="fw-medium text-gray-01 f-align-center"
          v-for="(feature, index) in features"
          :key="index"
        >
          <span class="material-symbols-outlined icon-fill text-primary me-2">
            check_box
          </span>
          {{ feature }}
        </li>
      </ul>
    </div>
    <div class="podcast-card_link mt-auto pt-4">
        <a href="#" class="btn btn-outline-black lh-base">前往聆聽 podcast</a>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.podcast-card_avatar {
  width: 80px;
  height: 80px;
}
.podcast-card_link {
  border-top: 1px solid $black;
}

</style>
