<template lang="">
    <div class="grid flex-col items-center justify-start p-24 h-full">
        <List :items="episodeList" :callback="changeEpisode" class="justify-self-end mb-3"/>
        <EpisodeCard :data="episode"/>
    </div>
</template>
<script setup lang="ts">
    import { useStore, mapGetters } from 'vuex';
    import { computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router'
    import EpisodeCard from '../components/EpisodeCard.vue';
    import List from '../components/List.vue';


    import { Episode } from "../interfaces/Data";

    const store = useStore();
    const episode = computed(() => store.state.episodeStore.episode);
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