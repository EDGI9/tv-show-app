<template lang="">
    <div>
        <Title text="Episode Name" type="h2" />
        <Description text="Episode Summary"/>
        <router-link to="/shows/1">Test Show 1</router-link>
    </div>
</template>
<script setup>
    import Description from '../components/Description.vue';
    import Title from '../components/Title.vue';
</script>
<style lang="">
    
</style>