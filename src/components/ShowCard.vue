<template>
  <div
    v-if="data.id"
    data-testid="qa-show-card"
    class="flex flex-col md:flex-row gap-16"
  >
    <div class="flex flex-col">
      <div
        class="flex items-center justify-center overflow-hidden rounded-lg w-[270px]"
      >
        <ImageFrame
          :src="data.image"
          :alt="data.name"
          data-testid="qa-show-card_image"
          class="h-full max-h-[400px]"
        />
      </div>
      <div class="flex flex-row items-center justify-center">
        <Title
          text="Rating"
          type="h2"
          class="me-2 prose prose-headings:text-white"
        />
        <div data-testid="qa-show-card_rating">
          <p>{{ data.rating }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex items-center justify-start text-secondary">
        <Title
          :text="data.name"
          type="h2"
          data-testid="qa-show-card_title"
          class="prose prose-headings:text-white"
        />
      </div>
      <div class="flex flex-row items-start justify-start text-start mt-5">
        <Description :text="data.summary" data-testid="qa-show-card_summary" />
      </div>
    </div>
  </div>
  <div v-else>Nothing to show</div>
</template>
<script setup lang="ts">
import { toRefs } from 'vue';
import Description from '../components/Description.vue';
import Title from '../components/Title.vue';
import ImageFrame from '../components/ImageFrame.vue';

import { ShowCard } from '../interfaces/Components';

const props = defineProps<ShowCard>();

const { data } = toRefs(props);
</script>
