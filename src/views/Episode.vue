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
//@ts-ignore
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Title from '../components/Title.vue';
import EpisodeCard from '../components/EpisodeCard.vue';
import List from '../components/List.vue';
//@ts-ignore
import Card from '../components/Card.vue';

import { Episode } from '../interfaces/Data';

const store = useStore();
const router = useRouter();
const route = useRoute();

const show = computed(() => store.getters['showStore/SHOW']);
const episode = computed(() => store.getters['episodeStore/EPISODE']);

/**
 * Fetch the list of Episodes and adapting slightly its data for the specific use of this component
 *
 */
const episodeList = computed(() =>
  store.getters['showStore/EPISODES'].map((item: Episode) => ({
    id: item.number,
    text: `Season ${item.season} - Episode ${item.number}`,
  }))
);

const selectedEpisode = computed(() => {
  const number = route.query.number;
  return Array.isArray(number) ? number[0] : (number as string) || '';
});

/**
 * Change route to a different episode
 * @param event Event
 *
 */
//@ts-ignore
function changeEpisode(event): void {
  router.push({
    name: 'Episode',
    query: {
      season: route.query.season,
      number: event.target.value,
    },
  });
}
</script>
