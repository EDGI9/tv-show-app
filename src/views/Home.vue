<template>
  <Card class="flex flex-col items-center w-full relative">
    <router-link to="/shows/1955" class="absolute top-0 right-0 p-6"
      >Shortcut to Powerpuff Girls</router-link
    >
    <Title
      text="Search Show"
      type="h2"
      class="prose prose-headings:text-white"
    />
    <input
      type="text"
      @input="searchShow"
      class="bg-white rounded-md h-10 px-3 text-primary font-bold shadow-lg"
    />
    <div class="flex flex-col sm:flex-row flex-wrap gap-12 justify-center mt-9">
      <div
        v-for="show in showList"
        :key="show.id"
        class="flex flex-col hover:scale-125 duration-150"
      >
        <router-link
          :to="'/shows/' + show.id"
          class="flex flex-col w-[230px] md:w-[130px]"
        >
          <ImageFrame
            :src="show.image"
            :alt="show.name"
            class="h-full md:max-h-[200px] rounded-lg shadow-lg"
          />
          <Title
            :text="show.name"
            type="h4"
            class="prose prose-headings:text-white"
          />
        </router-link>
      </div>
    </div>
  </Card>
</template>
<script setup lang="ts">
import { computed } from 'vue';
//@ts-ignore
import { useStore } from 'vuex';
import { RouterLink } from 'vue-router';
import ImageFrame from '../components/ImageFrame.vue';
import Title from '../components/Title.vue';
//@ts-ignore
import Card from '../components/Card.vue';
import { Show } from '../interfaces/Data';

const store = useStore();

//@ts-ignore
let showList: Show[] = computed(() => store.getters['showStore/SHOWS']);
let timeout: any = null;

//@ts-ignore
function searchShow(params): void {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    store.dispatch('showStore/GET_SHOWS', params.target.value);
  }, 500);
}
</script>
<style lang=""></style>
