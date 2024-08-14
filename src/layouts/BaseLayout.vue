<template lang="">
    <header>
      <ImageFrame src="/vite.svg"/>
      <Title text="Header" type="h2" />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>Footer</p>
    </footer>
</template>
<script setup>
    import Title from '../components/Title.vue';
    import ImageFrame from '../components/ImageFrame.vue';
</script>
<style lang="">
    
</style>