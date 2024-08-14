<template>
    <img :src="src" :alt="alt" data-testid="qa-image-frame"/>
</template>

<script setup lang="ts">
import { ImageComponent } from "../interfaces/Components";

const props = defineProps<ImageComponent>();

const { src, alt } = props;
</script>

<style lang="">
    
</style>