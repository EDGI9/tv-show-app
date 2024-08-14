<template>
    <p data-testid="qa-description">{{ text }}</p>
</template>

<script setup lang="ts">
import { DescriptionComponent } from "../interfaces/Components";

const props = defineProps<DescriptionComponent>();

const { text } = props;
</script>

<style lang="">
    
</style>