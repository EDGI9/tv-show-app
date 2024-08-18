<template lang="">
    <div class="">
        <template v-if="show.id">
            <Card> 
                <ShowCard :data="show"/>
                <router-link to="/shows/1/episodebynumber?season=1&number=1">To especific test show</router-link>
            </Card>
        </template>
    </div>
</template>
<script setup>
    import { RouterLink } from 'vue-router'
    import { useStore } from 'vuex';
    import { computed } from 'vue';

    import Description from '../components/Description.vue';
    import Title from '../components/Title.vue';
    import Card from '../components/Card.vue';
    import ShowCard from '../components/ShowCard.vue';


    const store = useStore();
    const show = computed(() => store.getters['showStore/SHOW']);
</script>
<style lang="">
    
</style>