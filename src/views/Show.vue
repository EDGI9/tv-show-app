<template>
  <div class="flex flex-col gap-4">
    <template v-if="show.id">
      <Card>
        <ShowCard :data="show" />
      </Card>
    </template>
    <template v-if="episodeList.length">
      <carousel :items-to-show="5.5" :wrap-around="true">
        <slide v-for="(episode, index) in episodeList" :key="episode">
          <div class="mx-4 cursor-pointer" @click="goToEpisode(episode)">
            <ImageFrame
              :src="episode.image"
              :alt="episode.name"
              width="200px"
              class=""
            />
            <Title
              :text="index + 1 + ' - ' + episode.name"
              type="h5"
              class="prose prose-headings:text-white"
            />
          </div>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
    </template>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
//@ts-ignore
import { useStore } from 'vuex';
import { computed } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import Title from '../components/Title.vue';
//@ts-ignore
import Card from '../components/Card.vue';
import ShowCard from '../components/ShowCard.vue';
import ImageFrame from '../components/ImageFrame.vue';

import { Episode } from '../interfaces/Data.ts';

const store = useStore();
const router = useRouter();
const show = computed(() => store.getters['showStore/SHOW']);
const episodeList = computed(() => store.getters['showStore/EPISODES']);

function goToEpisode(episode: Episode): void {
  router.push({
    name: 'Episode',
    query: {
      season: episode.season,
      number: episode.number,
    },
  });
}
</script>
<style lang=""></style>
