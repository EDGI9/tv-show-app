<template>
  <div
    v-if="data.id"
    data-testid="qa-episode-card"
    class="flex flex-col md:flex-row gap-16 max-w-screen-xl"
  >
    <div class="flex flex-col">
      <div
        class="flex items-center justify-center overflow-hidden rounded-lg w-[270px]"
      >
        <ImageFrame
          :src="data.image"
          :alt="data.name"
          data-testid="qa-episode-card_image"
          class="h-[400px]"
        />
      </div>
      <div class="flex flex-row items-center justify-center">
        <Title
          text="Rating"
          type="h2"
          class="me-2 prose prose-headings:text-white"
        />
        <div data-testid="qa-episode-card_rating">
          <p>{{ data.rating }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex items-center justify-start text-secondary">
        <Title
          :text="data.name"
          type="h2"
          data-testid="qa-episode-card_title"
          class="prose prose-headings:text-white"
        />
      </div>
      <div class="flex flex-row items-center justify-start gap-7">
        <div class="flex flex-row justify-center items-center gap-2">
          <Title
            text="Season"
            type="h4"
            class="prose prose-headings:text-white"
          />
          <p data-testid="qa-episode-card_season">{{ data.season }}</p>
        </div>
        <div class="flex flex-row justify-center items-center gap-2">
          <Title
            text="Air Date"
            type="h4"
            class="prose prose-headings:text-white"
          />
          <p data-testid="qa-episode-card_airdate">{{ data.airdate }}</p>
        </div>
        <div class="flex flex-row justify-center items-center gap-2">
          <Title
            text="Runtime"
            type="h4"
            class="prose prose-headings:text-white"
          />
          <p data-testid="qa-episode-card_runtime">{{ data.runtime }}</p>
        </div>
      </div>
      <div class="flex flex-row items-start justify-start text-start mt-5">
        <Description
          :text="data.summary"
          data-testid="qa-episode-card_summary"
        />
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

import { EpisodeCard } from '../interfaces/Components';

const props = defineProps<EpisodeCard>();

const { data } = toRefs(props);
</script>
