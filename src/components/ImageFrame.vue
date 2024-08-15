<template>
    <img :src="src" :alt="alt" :width="width" :height="height" data-testid="qa-image-frame"/>
</template>

<script setup lang="ts">
import { ImageComponent } from "../interfaces/Components";

const props = defineProps<ImageComponent>();

const { src, alt, width, height } = props;
</script>

<style lang="">
    
</style>