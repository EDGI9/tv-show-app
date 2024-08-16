<template lang="">
    <div class="grid flex-col items-center justify-start p-24 h-full">
        <div class="flex flex-row justify-between items-center mb-10">
            <Title :text="show.name" type="h1"/>
            <List :items="episodeList" :callback="changeEpisode"/>
        </div>
        <EpisodeCard :data="episode"/>
    </div>
</template>
<script setup lang="ts">
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router';
    import Title from '../components/Title.vue';
    import EpisodeCard from '../components/EpisodeCard.vue';
    import List from '../components/List.vue';


    import { Episode } from "../interfaces/Data";

    const store = useStore();
    const show = computed(() => store.getters['showStore/SHOW']);
    const episode = computed(() => store.getters['episodeStore/EPISODE']);
    const episodeList = computed(() => store.getters['showStore/EPISODES'].map((item: Episode) => ({id: item.id, text: `Episode ${item.id}`})));
    const router = useRouter();
    const route = useRoute();

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