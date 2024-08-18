<template lang="">
    <div class="grid flex-col items-center justify-start p-24 h-full">
        <Card> 
            <transition name="fade" mode="out-in">
                <div :key="episode.id">
                    <div class="flex flex-row justify-between items-center mb-10">
                        <Title :text="show.name" type="h1"/>
                        <List :items="episodeList" :callback="changeEpisode"/>
                    </div>
                    <EpisodeCard :data="episode"/>
                </div>
            </transition>
        </Card>
    </div>
</template>
<script setup lang="ts">
    // @ts-ignore
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    // @ts-ignore
    import Title from '../components/Title.vue';
    // @ts-ignore
    import EpisodeCard from '../components/EpisodeCard.vue';
    // @ts-ignore
    import List from '../components/List.vue';
    // @ts-ignore
    import Card from '../components/Card.vue';



    import { Episode } from "../interfaces/Data";

    const store = useStore();
    // @ts-ignore
    const show = computed(() => store.getters['showStore/SHOW']);
    // @ts-ignore
    const episode = computed(() => store.getters['episodeStore/EPISODE']);
    // @ts-ignore
    const episodeList = computed(() => store.getters['showStore/EPISODES'].map((item: Episode) => ({id: item.id, text: `Episode ${item.id}`})));
    const router = useRouter();
    const route = useRoute();

    // @ts-ignore
    function changeEpisode(event): void {
        router.push({
            path: route.path,
            query: {
                season: route.query.season,
                number: event.target.value
            }

        });
    }

</script>
<style lang="css">
</style>