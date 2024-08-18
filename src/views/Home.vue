<template lang="">
    <div>
        <Title text="Show list page" type="h2" />
        <Description text="Show list"/>
        <router-link to="/shows/1955">To especific show</router-link>
    </div>
</template>
<script setup>
    import { RouterLink } from 'vue-router'
    import Description from '../components/Description.vue';
    import Title from '../components/Title.vue';

</script>
<style lang="">
    
</style>