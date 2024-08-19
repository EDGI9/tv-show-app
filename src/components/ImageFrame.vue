<template>
  <img
    v-if="src.length"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    data-testid="qa-image-frame"
  />
  <div v-else data-testid="qa-image-frame">
    <Card class="h-full w-full flex items-center justify-center">
      <p>No Image Available</p>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { ImageComponent } from '../interfaces/Components';
import Card from './Card.vue';

const props = defineProps<ImageComponent>();

const { src, alt, width, height } = toRefs(props);
</script>