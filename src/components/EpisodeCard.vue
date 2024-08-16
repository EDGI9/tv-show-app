<template lang="">
    <div v-if="data.id" data-testid="qa-episode-card" class="flex flex-col md:flex-row gap-16 max-w-screen-xl">
        <div class="flex flex-col">
            <div class="flex items-center justify-center relative rounded-lg shadow-lg w-[400px] h-[500px]">
                
                <div class="flex items-center justify-center overflow-hidden rounded-lg shadow-lg w-[400px] h-[500px] relative z-10">
                    <ImageFrame :src="data.image" :alt="data.name" data-testid="qa-episode-card_image" class="h-full" />
                </div>
                <div class="w-[400px] h-[500px] bg-primary rounded-lg absolute shadow-lg z-0 rotate-3 opacity-50">
                    asas
                </div>
            </div>
            <div class="flex flex-row items-center justify-center" >
                <Title text="Rating" type="h2" class="me-2"/>
                <div data-testid="qa-episode-card_rating" >
                    <p>{{data.rating}}</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex items-center justify-start text-secondary">
                <Title :text="data.name" type="h2" data-testid="qa-episode-card_title"  />
            </div>
            <div class="flex flex-row items-center justify-start gap-7">
                <div class="flex flex-row justify-center items-center gap-2">
                    <Title text="Season" type="h4" class="text-secondary"/>
                    <p data-testid="qa-episode-card_season" >{{data.season}}</p>
                </div>
                <div class="flex flex-row justify-center items-center gap-2">
                    <Title text="Air Date" type="h4" class="text-secondary"/>
                    <p data-testid="qa-episode-card_airdate" >{{data.airdate}}</p>
                </div>
                <div class="flex flex-row justify-center items-center gap-2">
                    <Title text="Runtime" type="h4" class="text-secondary"/>
                    <p data-testid="qa-episode-card_runtime" >{{data.runtime}}</p>
                </div>
            </div>
            <div class="flex flex-row items-start justify-start text-start mt-5">
                <Description :text="data.summary" data-testid="qa-episode-card_summary" />
            </div>
        </div>
    </div>
    <div v-else>
        Nothing to show
    </div>
</template>
<script setup lang="ts">
    import { toRefs } from 'vue';
    import Description from '../components/Description.vue';
    import Title from '../components/Title.vue';
    import ImageFrame from '../components/ImageFrame.vue';
    import { EpisodeCard } from "../interfaces/Components";
    import { Episode } from "../interfaces/Data";


    const props = defineProps<EpisodeCard>();

    const { data: Episode } = toRefs(props);

</script>
<style lang="css">

</style>