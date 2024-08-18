<template>
    <div class="prose prose-headings:font-bold prose-headings:text-back">
        <component :is='type' data-testid="qa-title" class="my-5">{{ text }}</component>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { TitleComponent } from "../interfaces/Components";

const props = defineProps<TitleComponent>();

const { text, type } = toRefs(props);
</script>

<style lang="css">
</style>