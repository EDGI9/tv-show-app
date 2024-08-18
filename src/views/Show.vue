<template lang="">
    <div class="flex flex-col gap-4">
        <template v-if="show.id">
            <Card> 
                <ShowCard :data="show"/>
            </Card>
        </template>
        <template v-if="episodeList.length">
            <carousel :items-to-show="5.5" :wrap-around="true">
                <slide v-for="(episode, index) in episodeList" :key="episode">
                    <div class="mx-4 cursor-pointer" @click="goToEpisode(episode)">
                        <ImageFrame :src="episode.image" :alt="episode.name" width="200px" class="" />
                        <Title :text="index+1 + ' - ' + episode.name" type="h5" class="prose prose-headings:text-white" />
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
    //@ts-ignore
    import { RouterLink, useRouter } from 'vue-router'
    //@ts-ignore
    import { useStore } from 'vuex';
    //@ts-ignore
    import { computed } from 'vue';
    //@ts-ignore
    import 'vue3-carousel/dist/carousel.css';
    //@ts-ignore
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
    //@ts-ignore
    import Description from '../components/Description.vue';
    //@ts-ignore
    import Title from '../components/Title.vue';
    //@ts-ignore
    import Card from '../components/Card.vue';
    //@ts-ignore
    import ShowCard from '../components/ShowCard.vue';
    //@ts-ignore
    import Button from '../components/Button.vue';
    //@ts-ignore
    import ImageFrame from '../components/ImageFrame.vue';
    //@ts-ignore
    import { Episode } from "../interfaces/Data.ts";

    const store = useStore();
    const router = useRouter();
    //@ts-ignore
    const show = computed(() => store.getters['showStore/SHOW']);
    //@ts-ignore
    const episodeList = computed(() => store.getters['showStore/EPISODES']);
    
    //@ts-ignore
    function goToEpisode(episode: Episode): void {
        router.push({
            name: 'Episode',
            query: {
                season: episode.season,
                number: episode.number
            }

        });
    }
</script>
<style lang="">
    
</style>