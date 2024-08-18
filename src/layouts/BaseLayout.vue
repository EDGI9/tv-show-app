<template lang="">
    <header class="flex gap-12 px-12 items-center shadow-md bg-white/10 backdrop-blur-md">
      <ImageFrame :src="Logo" class="w-10 h-10"/>
      <div class="flex flex-row gap-2">
        <Title text="Flick Flow" type="h2"/>
      </div>
    </header>
    <main class="flex-grow items-center justify-center flex flex-col">
      <div class="flex flex-col items-center w-11/12">
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transition || 'fade'" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
    <footer class="flex gap-12 px-12 items-center styicky items-center justify-center text-primary backdrop-blur-md bg-white/10">
      <Title text="Footer" type="h2" class="text-primary"/>
    </footer>
</template>
<script setup>
    import Title from '../components/Title.vue';
    import ImageFrame from '../components/ImageFrame.vue';
    import Logo from "../assets/logo.svg";
</script>
<style lang="css">

</style>