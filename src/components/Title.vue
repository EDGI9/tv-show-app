<template>
    <component :is='type' data-testid="qa-title">{{ text }}</component>
</template>

<script setup lang="ts">
import { TitleComponent } from "../interfaces/Components";

const props = defineProps<TitleComponent>();

const { text, type } = props;
</script>

<style lang="">
    
</style>