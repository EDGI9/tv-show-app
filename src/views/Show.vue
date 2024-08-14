<template lang="">
    <div>
        <Title text="Show Name" type="h2" />
        <Description text="Show Description"/>
        <router-link to="1/episode">Test Episode 1</router-link>
    </div>
</template>
<script setup>
    import { RouterLink } from 'vue-router'
    import Description from '../components/Description.vue';
    import Title from '../components/Title.vue';
</script>
<style lang="">
    
</style>