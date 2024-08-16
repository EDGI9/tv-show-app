<template lang="">
    <header class="flex gap-12 px-12 items-center">
      <ImageFrame src="/logo.svg" class="w-10 h-10"/>
      <div class="flex flex-row gap-2">
        <Title text="Flick" type="h2" class="prose prose-headings:text-black"/>
        <Title text="Flow" type="h2" class="text-primary"/>
      </div>
    </header>
    <main class="flex-grow bg-background ">
      <router-view />
    </main>
    <footer class="flex gap-12 px-12 items-center styicky items-center justify-center text-primary">
      <Title text="Footer" type="h2" class="text-primary"/>
    </footer>
</template>
<script setup>
    import Title from '../components/Title.vue';
    import ImageFrame from '../components/ImageFrame.vue';
</script>
<style lang="css">
 
</style>