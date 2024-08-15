<template lang="">
    <div class="c_episode-page">
        <label for="cars">Choose a car:</label>
        <select name="cars" id="cars" @change="changeEpisode($event)">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <EpisodeCard :data="episode"/>
        {{episodeList}}
        <br>
    </div>
</template>
<script setup lang="ts">
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router'
    import EpisodeCard from '../components/EpisodeCard.vue';
    

    const store = useStore();
    const episode = computed(() => store.state.episodeStore.episode);
    const episodeList = computed(() => store.getters.showStore); //FIX ME

    const router = useRouter();
    const route = useRoute();
    console.log(episodeList);
    

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
    .c_episode-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        padding-top: 60px;
        height: 100%;
    }
</style>