<template lang="">
    <div>
        <template v-if="episode.id">
            <Title :text="episode.name" type="h2" />
            <Description :text="episode.summary"/>
            <!--<router-link to="/shows/1">Test Show 1</router-link>-->
            
        </template>
        {{store.state.episode}}
    </div>
</template>
<script setup>
    import { useStore } from 'vuex';
    import Description from '../components/Description.vue';
    import Title from '../components/Title.vue';

    const store = useStore();
    const episode = computed(() => store.state.episodeStore.episode);

</script>
<style lang="">
    
</style>