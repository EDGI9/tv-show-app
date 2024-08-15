<template>
    <component :is='type' data-testid="qa-title" class="c_title">{{ text }}</component>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { TitleComponent } from "../interfaces/Components";

const props = defineProps<TitleComponent>();

const { text, type } = toRefs(props);
</script>

<style lang="css">
    .c_title {
        margin: 10px 0;
    }
</style>