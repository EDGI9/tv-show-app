<template>
  <div class="grid flex-col items-center justify-start h-full">
    <Card>
      <transition name="fade" mode="out-in">
        <div :key="episode.id">
          <div class="flex flex-row justify-between items-center mb-4">
            <Title
              :text="show.name"
              type="h1"
              class="prose prose-headings:text-white"
            />
            <List
              :items="episodeList"
              :callback="changeEpisode"
              :selectedItem="selectedEpisode"
            />
          </div>
          <EpisodeCard :data="episode" />
        </div>
      </transition>
    </Card>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Title from '../components/Title.vue';
import EpisodeCard from '../components/EpisodeCard.vue';
import List from '../components/List.vue';
import Card from '../components/Card.vue';

import { Episode } from '../interfaces/Data';

const store = useStore();
const router = useRouter();
const route = useRoute();

const show = computed(() => store.getters['showStore/SHOW']);
const episode = computed(() => store.getters['episodeStore/EPISODE']);

const episodeList = computed(() =>
  store.getters['showStore/EPISODES'].map((item: Episode) => ({
    id: item.number,
    text: `Episode ${item.number}`,
  }))
);

const selectedEpisode = computed(() => route.query.number);

//@ts-ignore
function changeEpisode(event): void {
  router.push({
    path: route.path,
    query: {
      season: route.query.season,
      number: event.target.value,
    },
  });
}
</script>
<style lang="css"></style>
