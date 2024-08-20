<template>
  <select
    @change="callback"
    :value="selectedItem"
    data-testid="qa-list"
    class="px-3 py-2 rounded-lg bg-primary text-white"
  >
    <option v-for="item in items" :value="item.id" :key="item.id">
      {{ item.text }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { ListComponent } from '../interfaces/Components';

const props = defineProps<ListComponent>();

const { items, callback, selectedItem } = toRefs(props);
</script>
