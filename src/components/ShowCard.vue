<template lang="">
    <div v-if="data.id" data-testid="qa-show-card" class="flex flex-col md:flex-row gap-16">
        <div class="flex flex-col">
            <div class="flex items-center justify-center overflow-hidden rounded-lg w-[270px]">
                <ImageFrame :src="data.image" :alt="data.name" data-testid="qa-episode-card_image" class="h-full max-h-[400px]" />
            </div>
            <div class="flex flex-row items-center justify-center" >
                <Title text="Rating" type="h2" class="me-2 prose prose-headings:text-white"/>
                <div data-testid="qa-episode-card_rating" >
                    <p>{{data.rating}}</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="flex items-center justify-start text-secondary">
                <Title :text="data.name" type="h2" data-testid="qa-episode-card_title" class="prose prose-headings:text-white" />
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
    // @ts-ignore
    import Description from '../components/Description.vue';
    // @ts-ignore
    import Title from '../components/Title.vue';
    // @ts-ignore
    import ImageFrame from '../components/ImageFrame.vue';
    // @ts-ignore
    import { ShowCard } from "../interfaces/Components";
    // @ts-ignore
    import { Show } from "../interfaces/Data";


    const props = defineProps<ShowCard>();
    // @ts-ignore
    const { data: Show } = toRefs(props);

</script>
<style lang="css">

</style>