<template lang="">
    <div class="c_episode-page">
        <EpisodeCard :data="episode"/>
    </div>
</template>
<script setup>
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import EpisodeCard from '../components/EpisodeCard.vue';

    const store = useStore();
    const episode = computed(() => store.state.episodeStore.episode);
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