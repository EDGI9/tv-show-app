<template lang="">
    <div>
        <template v-if="show.id">
            <Title :text="show.name" type="h2" />
            <Description :text="show.summary"/>
            <!-- <router-link to="1/episode">Test Episode 1</router-link> -->

        </template>
    </div>
</template>
<script setup>
    import { RouterLink } from 'vue-router'
    import { useStore } from 'vuex';
    import { computed } from 'vue';

    import Description from '../components/Description.vue';
    import Title from '../components/Title.vue';

    const store = useStore();
    const show = computed(() => store.state.showStore.show);
</script>
<style lang="">
    
</style>