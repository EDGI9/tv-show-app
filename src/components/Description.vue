<template>
  <p data-testid="qa-description" v-html="text"></p>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { DescriptionComponent } from '../interfaces/Components';

const props = defineProps<DescriptionComponent>();

const { text } = toRefs(props);
</script>
